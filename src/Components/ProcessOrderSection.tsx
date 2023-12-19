import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
declare const fbq: any;

const ProcessOrderSection = () => {
  const [itemNames, setItemNames] = useState([] as any);
  const [generatedOrderReference, setGeneratedOrderReference] = useState("");
  const [merchantSignature, setMerchantSignature] = useState("");

  useEffect(() => {
    /* get cart from local storage */
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    const itemNames = cart.map((item: any) => {
      return item.name + " " + item.selectedSize;
    });

    setItemNames(itemNames);
    console.log(cart);
    console.log(itemNames);
    console.log("cart111");
    setProcessCart(cart);
    const getTotalPrice = () => {
      let totalPrice = 0;
      cart.forEach((product: any) => {
        totalPrice += parseInt(product.price);
      });
      setTotalPrice(totalPrice);
    };
    getTotalPrice();
    const generatedOrderReference =
      "Order" + Math.random().toString(36).substr(2, 9);
    setGeneratedOrderReference(generatedOrderReference);
  }, []);
  const [finalLink, setFinalLink] = useState("");

  const handleOnline = () => {
    const merchantAccount = "www_diieva_com_ua1";
    const merchantDomainName = "www.diieva.com.ua";
    const storedCart = localStorage.getItem("cart");
    const orderReference = generatedOrderReference;
    const orderDate = 1696807119;
    const currency = "UAH";
    const productLines = storedCart
      ? JSON.parse(storedCart).map((item: any) => {
          // Replace \ with /
          const productName = item.name.replace(/\\/g, "/");
          return `${productName} ${item.selectedSize}`;
        })
      : [];

    const productAmounts = storedCart
      ? JSON.parse(storedCart).map(() => {
          return `1`;
        })
      : [];

    const productPrices = storedCart
      ? JSON.parse(storedCart).map((item: any) => {
          return item.price;
        })
      : [];

    const productData = `${productLines.join(";")};${productAmounts.join(
      ";"
    )};${productPrices.join(";")}`;

    const paymentLink = `${merchantAccount};${merchantDomainName};${orderReference};${orderDate};${totalPrice};${currency};${productData}`;

    console.log(paymentLink);
    generateMerchantSignature(paymentLink);
  };
  const generateMerchantSignature = async (paymentLink: string) => {
    try {
      const response = await axios.post(
        "https://35.228.109.35:5001/generate-merchant-signature",
        {
          paymentLink,
        }
      );
      const { merchantSignature } = response.data;
      setMerchantSignature(merchantSignature);
      console.log(merchantSignature);
      generatePayment(merchantSignature);
    } catch (error) {
      console.error("Error generating merchantSignature", error);
    }
  };
  const generatePayment = async (merchant: string) => {
    try {
      const storedCart = localStorage.getItem("cart");
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];

      const productNames = parsedCart.map((item: any) => {
        const productName = item.name.replace(/\\/g, "/");
        return `${productName} ${item.selectedSize}`;
      });

      const productPrices = parsedCart.map((item: any) => {
        return item.price;
      });

      const productCounts = parsedCart.map(() => {
        return 1;
      });

      const paymentData = {
        transactionType: "CREATE_INVOICE",
        merchantAccount: "www_diieva_com_ua1",
        merchantAuthType: "SimpleSignature",
        merchantDomainName: "www.diieva.com.ua",
        merchantSignature: merchant,
        apiVersion: 1,
        language: "ua",
        serviceUrl: "https://diieva.com.ua/success",
        orderReference: generatedOrderReference,
        orderDate: 1696807119,
        amount: totalPrice,
        currency: "UAH",
        orderTimeout: 86400,
        productName: productNames,
        productPrice: productPrices,
        productCount: productCounts,
      };

      console.log(paymentData);

      const response = await axios.post(
        "https://35.228.109.35:5001/process-payment",
        {
          paymentData,
        }
      );

      console.log(response);
      setFinalLink(response.data.invoiceUrl);
      /* navigate to response.data.invoiceUrl */
      /* const win = window.open(response.data.invoiceUrl, "_blank"); */
      /* Navigate(response.data.invoiceUrl); */
      /* navigate without opening a new tab */
      window.location.href = response.data.invoiceUrl;
    } catch (error) {
      console.error("Error sending payment data to backend", error);
    }
  };
  const handleSend = () => {
    if (name === "") {
      alert("Введіть ім'я");
      return;
    } else if (number === "") {
      alert("Введіть номер телефону");
      return;
    } else if (city === "") {
      alert("Введіть місто");
      return;
    } else if (postOffice === "") {
      alert("Введіть номер відділення Нової Пошти");
      return;
    } else if (processCart.length === 0) {
      alert("Ви не обрали жодного товару");
      return;
    }
    axios
      .post("https://35.228.109.35:5001/order", {
        name,
        number,
        email,
        city,
        postOffice,
        itemNames,
        totalPrice,
      })
      .then((response) => {
        console.log(response);
        window.location.href = "/successOrder";
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("send");
  };
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postOffice, setPostOffice] = useState("");
  const [processCart, setProcessCart] = useState([] as any);
  const [totalPrice, setTotalPrice] = useState(0);
  const [method, setMethod] = useState("Оплата при отриманні" as any);

  return (
    <>
      <div className="p-4">
        <h1 className="flex justify-center flex-col lg:flex-row text-[48px]">
          Ваше замовлення
        </h1>
        {processCart.map((product: any) => (
          <>
            <div className="flex justify-center flex-col lg:max-w-[50%] mx-auto">
              <div className="flex flex-row border-2 border-black p-2 items-center gap-2">
                <div className="flex justify-center">
                  <img
                    src={product.image1}
                    alt="product"
                    className="w-[100px]"
                  />
                </div>
                <div>
                  <h1>{product.name}</h1>
                  <h1>{product.price}</h1>
                  <h1>{product.selectedSize}</h1>
                </div>
              </div>
            </div>
            <div className="line w-[50px] h-[2px] bg-[#373737] m-auto mt-[10px] mb-[10px]"></div>
          </>
        ))}
        <h1 className="flex justify-center flex-col lg:flex-row text-[30px]">
          Ціна: {totalPrice} грн.
        </h1>
      </div>
      <div className="p-4">
        <div className="flex justify-center flex-col lg:max-w-[50%] mx-auto">
          <div className="flex flex-col lg:ml-8">
            <select
              className="cursor-pointer border-black border-2 px-2 py-2"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option>Оплата на сайті</option>
              <option>Оплата при отриманні</option>
            </select>
          </div>
        </div>
      </div>
      {method === "Оплата при отриманні" && (
        <div className="p-4">
          <div className="flex justify-center flex-col lg:max-w-[50%] mx-auto">
            <div className="flex flex-col lg:ml-8">
              <label htmlFor="name">
                Ваше ім'я <span className="text-red-500">*</span>
              </label>
              <input
                className="border-[1px] border-black py-2 px-4"
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="name">
                Номер телефону <span className="text-red-500">*</span>
              </label>
              <input
                className="border-[1px] border-black py-2 px-4"
                type="text"
                id="number"
                name="number"
                onChange={(e) => setNumber(e.target.value)}
                required
              />
              <label htmlFor="name">Електронна пошта</label>
              <input
                className="border-[1px] border-black py-2 px-4"
                type="text"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="name">
                Місто <span className="text-red-500">*</span>
              </label>
              <input
                className="border-[1px] border-black py-2 px-4"
                type="text"
                id="email"
                name="email"
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <label htmlFor="name">
                Номер відділення Нової Пошти
                <span className="text-red-500"> *</span>
              </label>
              <input
                className="border-[1px] border-black py-2 px-4"
                type="text"
                id="email"
                name="email"
                onChange={(e) => setPostOffice(e.target.value)}
                required
              />
              <button
                onClick={() => {
                  fbq("track", "Purchase");
                  handleSend();
                }}
                className="mb-5 bg-white border-[1px] border-black text-black font-roboto text-[20px] p-2 mt-2"
              >
                ЗАМОВИТИ
              </button>
            </div>
          </div>
        </div>
      )}{" "}
      {method === "Оплата на сайті" && (
        <button
          onClick={() => {
            fbq("track", "Purchase");
            handleOnline();
          }}
          className="mb-5 bg-white border-[1px] border-black text-black font-roboto text-[20px] p-2 mt-2 text-center mx-auto block"
        >
          Перейти до онлайн-оплати(WAY4PAY)
        </button>
      )}
    </>
  );
};

export default ProcessOrderSection;

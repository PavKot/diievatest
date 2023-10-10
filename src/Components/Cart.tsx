import React, { useEffect, useState } from "react";
import { CgPlayListRemove } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { Navigate } from "react-router-dom";

interface CartProps {
  toggleCart: () => void;
  isOpen: boolean;
}

const Cart = ({ toggleCart, isOpen }: CartProps) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState<any>([]);
  const [merchantSignature, setMerchantSignature] = useState("");
  const [generatedOrderReference, setGeneratedOrderReference] = useState("");

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    setCart(storedCart ? JSON.parse(storedCart) : []);
    calculateTotalPrice(storedCart);
    console.log(storedCart);
    const generatedOrderReference =
      "Order" + Math.random().toString(36).substr(2, 9);
    setGeneratedOrderReference(generatedOrderReference);
  }, []);
  const [finalLink, setFinalLink] = useState("");

  const storedCart = localStorage.getItem("cart");
  useEffect(() => {
    calculateTotalPrice(storedCart);
  }, [storedCart]);
  /* send a post to https://api.wayforpay.com/api with data from storedcart and a secretkey from backend 
  {
"transactionType":"CREATE_INVOICE",
"merchantAccount":"www_diieva_com_ua",
"merchantAuthType":"SimpleSignature",
"merchantDomainName":"www.diieva.com.ua",
"merchantSignature":"82376ac22f440f1eb26f490b24ce2b20",
"apiVersion":1,
"language":"ua",
"serviceUrl":"http://serviceurl.com",
"orderReference":"myOrder12",
"orderDate":1696807119,
"amount":32150,
"currency":"UAH",
"orderTimeout": 86400,
"productName":["Брюки палаццо з вовни / Бежеві XS", "Брюки палаццо з вовни / Бежеві XS", "Жакет з вовни / Бежевий XS", "Костюм з кроп-жакетом / темно-зелений M"],
"productPrice":[5350, 5350, 9550, 11900],
"productCount":[1, 1, 1, 1]
}
  */

  const calculateTotalPrice = (cartItems: string | null) => {
    if (cartItems) {
      const parsedCart = JSON.parse(cartItems);
      const total = parsedCart.reduce(
        (acc: number, item: any) => acc + parseFloat(item.price),
        0
      );
      setTotalPrice(total.toFixed(0)); // Remove decimal places
    } else {
      setTotalPrice(0);
    }
  };
  const generatePaymentLink = async () => {
    // This is a simplified example for generating a payment link
    // In a real application, this should be handled securely on the server side
    const merchantAccount = "www_diieva_com_ua1";
    const merchantDomainName = "www.diieva.com.ua";
    const storedCart = localStorage.getItem("cart");
    const orderReference = generatedOrderReference;
    const orderDate = 1696807119;
    const currency = "UAH";

    // Create an array to hold the product lines
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
        "http://192.168.1.111:5000/generate-merchant-signature",
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
        serviceUrl: "http://192.168.1.111:5000",
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
        "http://192.168.1.111:5000/process-payment",
        {
          paymentData,
        }
      );

      console.log(response);
      setFinalLink(response.data.invoiceUrl);
      /* navigate to response.data.invoiceUrl */
      const win = window.open(response.data.invoiceUrl, "_blank");
      Navigate(response.data.invoiceUrl);
    } catch (error) {
      console.error("Error sending payment data to backend", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div
        className={`fixed top-0 left-0 z-[999] w-full h-full ${
          isOpen ? "bg-black opacity-60" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed top-0 right-0 z-[1000] h-screen w-72 bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isOpen
            ? "transform translate-x-0 animate-slideInFromRight"
            : "transform translate-x-full animate-slideOutToRight"
        }`}
      >
        <button
          onClick={toggleCart}
          className="text-[40px] absolute top-4 right-4 bg-gray-600 text-black px-2 py-1 rounded cursor-pointer"
        >
          <AiOutlineClose />
        </button>
        <div className="p-4">
          <p className="font-roboto text-xl pt-2">Кошик</p>
        </div>
        {storedCart && storedCart.length > 0 ? (
          <div className="flex flex-col gap-2 p-10">
            {JSON.parse(storedCart).map((item: any) => (
              <>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="font-roboto text-lg">
                        {item.name} {item.selectedSize}
                      </p>
                      <p className="font-roboto text-lg">{item.price}</p>
                    </div>
                  </div>
                </div>
                <div className="line h-[2px] w-[85%] border-[1px] border-black mx-auto"></div>
              </>
            ))}
            <button
              className="flex items-center gap-2 bg-transparent border-black border-2 text-black font-roboto text-[16px] p-2 mt-2 hover:bg-black hover:text-white rounded"
              onClick={() => {
                localStorage.removeItem("cart");
                setCart([]);
                toast.success("Корзина очищена");
                setTotalPrice(0);
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
              }}
            >
              Очистити <CgPlayListRemove />
            </button>
          </div>
        ) : (
          <p className="font-roboto text-lg p-10">Кошик порожній</p>
        )}
        <div className="p-10">
          <p className="font-roboto text-lg">Всього</p>
          <p className="font-roboto text-lg">{totalPrice} UAH</p>

          {/*
          {finalLink && (
            <a
              className="bg-transparent border-black border-2 text-black font-roboto text-[16px] p-2 rounded mt-2"
              href={finalLink}
            >
              Оплатити
            </a>
          )}
          */}
        </div>
        <button
          className="mb-5 w-[100%] bg-black text-white font-roboto font-bold text-[20px] p-2 mt-2 hover:bg-white hover:text-black border-2 border-black"
          onClick={() => {
            generatePaymentLink();
          }}
        >
          Оформити замовлення
        </button>
      </div>
    </>
  );
};

export default Cart;

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const ProcessOrderSection = () => {
  const [itemNames, setItemNames] = useState([] as any);
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
  }, []);
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
              onClick={handleSend}
              className="mb-5 bg-white border-[1px] border-black text-black font-roboto text-[20px] p-2 mt-2"
            >
              ЗАМОВИТИ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessOrderSection;

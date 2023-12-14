import React, { useEffect } from "react";
declare const fbq: any;
const SuccessOrderSection = () => {
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    console.log(parsedCart);
    console.log(storedCart);
    const cartPrice = parsedCart.map((item: any) => {
      return parseFloat(item.price);
    });

    const totalPrice = cartPrice.reduce((a: any, b: any) => a + b, 0);
    fbq("track", "Purchase", { value: totalPrice, currency: "UAH" });
    localStorage.removeItem("cart");
  }, []);
  return (
    <div className="flex justify-center items-center py-[30vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Успішно замовлено</h1>
        <p className="text-xl">Очікуйте дзвінка для підтвердження замовлення</p>
      </div>
    </div>
  );
};

export default SuccessOrderSection;

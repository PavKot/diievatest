import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CartProps {
  toggleCart: () => void;
  isOpen: boolean;
}

const Cart = ({ toggleCart, isOpen }: CartProps) => {
  return (
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
        <p className="font-roboto text-xl pt-2">Корзина</p>
      </div>
    </div>
  );
};

export default Cart;

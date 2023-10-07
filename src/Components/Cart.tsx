import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgPlayListRemove } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartProps {
  toggleCart: () => void;
  isOpen: boolean;
}

const Cart = ({ toggleCart, isOpen }: CartProps) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState<any>([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    setCart(storedCart ? JSON.parse(storedCart) : []);
    const total = storedCart
      ? JSON.parse(storedCart).reduce(
          (acc: any, item: any) => acc + parseInt(item.price),
          0
        )
      : 0;
    setTotalPrice(total);
  }, []);
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
        {cart.length > 0 ? (
          <div className="flex flex-col gap-2 p-10">
            {cart.map((item: any) => (
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="font-roboto text-lg">
                      {item.name} {item.selectedSize}
                    </p>
                    <p className="font-roboto text-lg">{item.price}</p>

                    <button
                      onClick={() => {
                        const newCart = cart.filter(
                          (cartItem: any) => cartItem.id !== item.id
                        );
                        setCart(newCart);
                        localStorage.setItem("cart", JSON.stringify(newCart));
                      }}
                    ></button>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="flex items-center gap-2"
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
          <button className="bg-black text-white font-roboto text-[16px] p-2 rounded mt-2">
            Оформити замовлення
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

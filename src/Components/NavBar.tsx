import React from "react";
import logo from "../Assets/logo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { BsCart } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";
import Cart from "./Cart";

interface Link {
  name: string;
  url: string;
}

const Links: Link[] = [
  {
    name: "Каталог",
    url: "/goods",
  },
  {
    name: "Колекції",
    url: "/collections",
  },
  {
    name: "Покупцеві",
    url: "/customers",
  },
  {
    name: "Контакти",
    url: "/contacts",
  },
  {
    name: "Про нас",
    url: "/about",
  },
];

const NavBarTest = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
    console.log("opened");
  };
  return (
    <>
      <Cart toggleCart={toggleCart} isOpen={isOpen} />

      <div className="backdrop-blur-5.6 w-full top-0 left-0 z-[999] mx-auto pt-[20px] sticky bg-blur md:p-0 p-[18px] md:py-2">
        <div className="lg:px-10 2xl:px-0 container mx-auto">
          <div className="flex items-center justify-between">
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[999] left-0 w-full md:w-auto md:pl-0 pl-0 w-[400px] ${
                open
                  ? "top-[6rem] right-0 bg-darkGreen w-full h-screen flex pt-[6rem] flex-col bg-blur2"
                  : "top-[-490px] right-[-120px]"
              }`}
            >
              {Object.values(Links).map((link) => (
                <>
                  <li
                    key={link.name}
                    className="text-black font-epilogue md:text-[16px] text-[24px] lg:ml-[40px] first:ml-0 mt-0 md:mt-[20px] pl-[3rem] md:pl-0 pt-[24px] md:pt-0 pb-[24px] md:pb-0"
                  >
                    <a href={link.url}>{link.name}</a>
                  </li>
                  <div className="line h-[1px] bg-gray"></div>
                </>
              ))}
            </ul>
            <div className="font-bold text-2xl cursor-pointer flex items-center font-epilogue text-white font-normal md:w-[300px] justify-center w-100 p-5">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="flex gap-[36px] justify-end w-[400px]">
              <button>
                <CiSearch fontSize={20} />
              </button>
              <button className="hidden md:block">
                <GrLanguage fontSize={20} />
              </button>
              <button
                className="block md:hidden"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {open ? (
                  <AiOutlineClose fontSize={24} />
                ) : (
                  <VscMenu fontSize={24} />
                )}
              </button>
              <button onClick={toggleCart}>
                <BsCart fontSize={20} />
              </button>
            </div>
          </div>
          <div
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-black hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <AiOutlineClose /> : <HiMenuAlt2 />}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarTest;

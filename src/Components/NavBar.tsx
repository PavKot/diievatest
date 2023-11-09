import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { BsCart } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";
import Cart from "./Cart";
import GlobalSearch from "./Popups/GlobalSearch";
import productData from "../Data/Data";
import { BiChevronDown } from "react-icons/bi";
import NavHover from "./NavHover";
import { useEffect } from "react";

interface Link {
  name: string;
  url: string;
}

const Links: Link[] = [
  {
    name: "Каталог",
    url: "/goods/all",
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
declare const fbq: any;
useEffect(() => {
  console.log(fbq);
}, []);
const NavBarTest = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
    console.log("opened");
    fbq("track", "AddToCart");
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    fbq("track", "Search");
  };

  // State to track if the "Каталог" or "Покупцеві" elements are being hovered
  const [isCatalogOrCustomersHovered, setIsCatalogOrCustomersHovered] =
    useState(false);

  const handleCatalogOrCustomersMouseEnter = () => {
    setIsCatalogOrCustomersHovered(true);
  };

  const handleCatalogOrCustomersMouseLeave = () => {
    /* set timeout to allow the user to hover over the nav hover element */
    setTimeout(() => {
      setIsCatalogOrCustomersHovered(false);
    }, 1500);
  };

  return (
    <>
      <Cart toggleCart={toggleCart} isOpen={isOpen} />
      {isSearchOpen && (
        <GlobalSearch
          productData={productData}
          isSearchOpen={isSearchOpen}
          toggleSearch={toggleSearch}
        />
      )}
      <div className="backdrop-blur-5.6 w-full top-0 left-0 z-[999] mx-auto pt-[5px] pb-[5px] sticky bg-blur lg:p-0 p-[18px] lg:py-2">
        <div className="lg:px-10 2xl:px-0 container mx-auto">
          <div className="flex items-center justify-between">
            <ul
              className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[999] left-0 w-full lg:w-auto md:pl-0 pl-0 w-[400px] ${
                open
                  ? "top-[5rem] right-0 bg-darkGreen w-full h-screen flex pt-[6rem] flex-col bg-blur2"
                  : "top-[-490px] right-[-120px]"
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="text-black font-epilogue lg:text-[16px] text-[24px] lg:ml-[40px] first:ml-0 mt-0 md:mt-[20px] pl-[3rem] lg:pl-0 pt-[24px] md:pt-0 pb-[24px] md:pb-0"
                  onMouseEnter={
                    link.name === "Каталог" || link.name === "Покупцеві"
                      ? handleCatalogOrCustomersMouseEnter
                      : undefined
                  }
                  onMouseLeave={
                    link.name === "Каталог" || link.name === "Покупцеві"
                      ? handleCatalogOrCustomersMouseLeave
                      : undefined
                  }
                >
                  <a href={link.url} className="flex items-center gap-2">
                    {link.name}
                    {/*
                    {(link.name === "Каталог" || link.name === "Покупцеві") && (
                      <BiChevronDown fontSize={20} />
                    )}*/}
                  </a>
                </li>
              ))}
            </ul>
            <div className="font-bold text-2xl cursor-pointer flex items-center font-epilogue text-white font-normal md:w-[300px] justify-center w-100 p-5">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="flex gap-[36px] justify-end w-[400px]">
              <button onClick={toggleSearch}>
                <CiSearch fontSize={20} />
              </button>
              <button className="hidden lg:hidden">
                <GrLanguage fontSize={20} />
              </button>
              <button
                className="block lg:hidden"
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
        </div>
      </div>
      <NavHover show={isCatalogOrCustomersHovered} />
    </>
  );
};

export default NavBarTest;

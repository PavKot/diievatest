import React from "react";
import paymentmethods from "../Assets/paymentmethods.png";
import logo from "../Assets/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import logowh from "../Assets/logowh.png";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto pt-8">
        <div className="container flex justify-between md:flex-row flex-col gap-4 md:gap-0">
          <div className="md:ml-0 ml-[30px]">
            <img src={logowh} alt="logo" />
          </div>
          <div className="md:ml-[60px] ml-[30px]">
            <h4 className="uppercase font-[20px] text-white">Покупцеві</h4>
            <ul className="md:pt-[50px] pt-[20px] text-white">
              <li>
                <a href="/about">Про нас</a>
              </li>
              <li className="pt-[16px]">
                <a href="/customers">Оплата і доставка</a>
              </li>
              <li className="pt-[16px]">
                <a href="/collections">Колекції</a>
              </li>
            </ul>
          </div>
          <div className="md:ml-[60px] ml-[30px]">
            <h4 className="uppercase font-[20px] text-white">
              Каталог товарів
            </h4>
            <div className="flex">
              <ul className="md:pt-[50px] pt-[20px] text-white">
                <li>
                  <a href="/goods/all">Все</a>
                </li>
                <li className="pt-[16px]">
                  <a href="/goods/Верхній%20одяг">Верхній одяг</a>
                </li>
                <li className="pt-[16px]">
                  <a href="/goods/Костюми">Костюми</a>
                </li>
                <li className="pt-[16px]">
                  <a href="/goods/Жакети">Жакети</a>
                </li>
              </ul>
              <ul className="md:pt-[50px] pt-[20px] text-white ml-[120px]">
                <li>
                  <a href="/goods/Брюки">Брюки</a>
                </li>
                <li className="pt-[16px]">
                  <a href="/goods/Корсети">Корсети</a>
                </li>
                <li className="pt-[16px]">
                  <a href="/goods/Спідниці">Спідниці</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:ml-[60px] ml-[30px]">
            <h4 className="uppercase font-[20px] text-white">КОНТАКТИ</h4>
            <div className="flex mt-[10px]">
              <a href="https://www.instagram.com/diieva.brand/">
                <AiOutlineInstagram className="text-[30px] text-white" />
              </a>

              <a href="https://www.facebook.com/profile.php?id=61553048443427">
                <FaFacebookF className="text-[30px] ml-[10px] text-white" />
              </a>
            </div>
            <ul className="md:pt-[50px] pt-[20px] text-white">
              <li>
                <a href="/contacts" className="uppercase">
                  Customer support
                </a>
              </li>
              <li className="pt-[16px]">
                <a href="tel:380732197916">+380 73 219 79 16</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line mt-[100px] bg-[#BFBFBF] h-[1px] w-100% items-center"></div>
      <div className="flex justify-between container mx-auto py-[20px] text-center md:text-unset items-center flex-col lg:flex-row">
        <p className="uppercase text-[14px] text-white">2023 - Diieva Brand</p>
        <p className="uppercase text-[14px] text-white">Усі права захищено</p>
        <img src={paymentmethods} alt="" className="" />
      </div>
    </footer>
  );
};

export default Footer;

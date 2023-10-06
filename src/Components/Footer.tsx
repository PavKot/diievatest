import React from "react";
import paymentmethods from "../Assets/paymentmethods.png";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto pt-8">
        <div className="container flex justify-between md:flex-row flex-col gap-4 md:gap-0">
          <div className="md:ml-0 ml-[30px]">
            <p className="uppercase text-[14px] text-white">
              Буде короткий опис про бренд
            </p>
            <p className="uppercase text-[14px] text-white pt-[50px]">
              Буде короткий опис про бренд
            </p>
          </div>
          <div className="md:ml-[60px] ml-[30px]">
            <h4 className="uppercase font-[20px] text-white">Покупцеві</h4>
            <ul className="md:pt-[50px] pt-[20px] text-white">
              <li>
                <a href="#">Про нас</a>
              </li>
              <li className="pt-[16px]">
                <a href="#">Оплата і доставка</a>
              </li>
              <li className="pt-[16px]">
                <a href="#">Колекції</a>
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
                  <a href="#">Все</a>
                </li>
                <li className="pt-[16px]">
                  <a href="#">Верхній одяг</a>
                </li>
                <li className="pt-[16px]">
                  <a href="#">Костюми</a>
                </li>
                <li className="pt-[16px]">
                  <a href="#">Жакети</a>
                </li>
              </ul>
              <ul className="md:pt-[50px] pt-[20px] text-white ml-[120px]">
                <li>
                  <a href="#">Брюки</a>
                </li>
                <li className="pt-[16px]">
                  <a href="#">Корсети</a>
                </li>
                <li className="pt-[16px]">
                  <a href="#">Спідниці</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:ml-[60px] ml-[30px]">
            <h4 className="uppercase font-[20px] text-white">КОНТАКТИ</h4>
            <ul className="md:pt-[50px] pt-[20px] text-white">
              <li>
                <a href="#" className="uppercase">
                  Customer support
                </a>
              </li>
              <li className="pt-[16px]">
                <a href="#">+ 38073 219 79 16</a>
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

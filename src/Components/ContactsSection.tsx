import React from "react";
import aboutSectionImg from "../Assets/aboutSectionImg.png";
import contactsSectionImg from "../Assets/contactsSectionImg.png";

const ContactsSection = () => {
  return (
    <section className="flex justify-between flex-col md:flex-row">
      <div className="max-w-[500px] container mx-auto">
        <h1 className="text-[20px] pt-[30px]">Інформація</h1>
        <p className="pt-[16px]">
          Якщо є пошиття по індивідуальним параметрам, строки очікування,
        </p>
        <h1 className="text-[20px] pt-[30px]">Умови доставки</h1>
        <p className="pt-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <h1 className="text-[20px] pt-[30px]">Оплата</h1>
        <p className="pt-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <h1 className="text-[20px] pt-[30px]">Повернення</h1>
        <p className="pt-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="w-[50%] mx-auto pt-4 md:mx-0 md:pt-0">
        <img src={contactsSectionImg} alt="" className="w-[100%]" />
      </div>
    </section>
  );
};

export default ContactsSection;

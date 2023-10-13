import React from "react";
import aboutSectionImg from "../Assets/aboutSectionImg.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="">
      <div className="container mx-auto p-5 lg:p-0">
        <p className="text-[16px] font-roboto">Клієнтська підтримка</p>
        <h1 className="text-[32px] font-bold font-roboto pt-[40px]">
          + 38073 219 79 16
        </h1>

        <div className="flex max-w-[300px] justify-between pt-[70px] items-center">
          <p>Для зв’язку у соціальних мережах</p>
          <div className="flex">
            <a href="https://www.instagram.com/diieva.brand/">
              <AiOutlineInstagram className="text-[30px] ml-[10px]" />
            </a>

            <a href="https://www.instagram.com/diieva.brand/">
              <FaFacebookF className="text-[30px] ml-[10px]" />
            </a>
          </div>
        </div>
      </div>
      <img src={aboutSectionImg} alt="" className="w-[100%] pt-[70px]" />
    </section>
  );
};

export default AboutSection;

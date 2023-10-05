import React from "react";
import about1 from "../Assets/about1.png";
import about2 from "../Assets/about2.png";
import logo from "../Assets/logo.png";

const AboutUsSection = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="roboto text-[20px] pt-[100px]">Про нас</h1>
      </div>
      <img src={about1} alt="" className="w-[100%] pt-[50px]" />
      <div>
        <div className="flex justify-between container mx-auto py-[100px] flex-col md:flex-row">
          <div className="flex items-center flex-col md:flex-row">
            <h5 className="text-[16px] roboto font-bold">
              Дінара ГАБІБУЛЛАЄВА
            </h5>
            <div className="line w-[50px] h-[2px] ml-[24px] bg-[#373737]"></div>
          </div>
          <div className="max-w-[550px]">
            <p className="roboto text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </div>
      <img src={about2} alt="" className="w-[100%] pt-[50px]" />
      <div>
        <div className="flex justify-between container mx-auto py-[100px] flex-col md:flex-row">
          <div className="flex items-center flex-col md:flex-row">
            <h5 className="text-[16px] roboto font-bold">Анастасія ЛЕЖНІНА </h5>
            <div className="line w-[50px] h-[2px] ml-[24px] bg-[#373737]"></div>
          </div>
          <div className="max-w-[550px]">
            <p className="roboto text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={logo} alt="" className="w-[200px] pb-[100px]" />
      </div>
    </>
  );
};

export default AboutUsSection;

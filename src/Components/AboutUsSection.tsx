import React from "react";
import about1 from "../Assets/about1.png";
import about2 from "../Assets/about2.png";
import logo from "../Assets/logo.png";

const AboutUsSection = () => {
  return (
    <>
      <div className="container mx-auto pt-10">
        <h1 className="roboto text-[20px] pt-[100px] lg:p-0 p-5 uppercase font-bold text-center">
          Про нас
        </h1>
        <div className="line w-[50px] h-[2px] bg-[#373737] m-auto mt-[20px]"></div>
        <p className="roboto text-[14px] lg:p-0 p-5 italic text-[20px] text-center mt-[20px]">
          Сильна. Творча. Дієва.
        </p>
        <p className="roboto text-[14px] lg:p-0 p-5 text-[20px] text-center mt-[20px] max-w-[900px] mx-auto">
          DIIEVA - український бренд жіночого ділового одягу з витонченими
          акцентам традиційної айдентики. Створений під час війни у серці
          України, місті вільних людей - Києві
        </p>
      </div>
      <img src={about1} alt="" className="w-[100%] pt-[50px]" />
      <div>
        <div className="flex justify-between container mx-auto py-[100px] flex-col md:flex-row hidden">
          <div className="flex items-center flex-col md:flex-row">
            <h5 className="text-[16px] roboto font-bold">
              Дінара ГАБІБУЛЛАЄВА
            </h5>
            <div className="line w-[50px] h-[2px] ml-[24px] bg-[#373737]"></div>
          </div>
          <div className="max-w-[550px]">
            <p className="roboto text-[14px] lg:p-0 p-5 text-white">
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
        <div>
          <div className="line w-[50px] h-[2px] bg-[#373737] m-auto mt-[20px]"></div>
          <p className="roboto text-[14px] lg:p-0 p-5 text-[20px] text-center mt-[20px] max-w-[1000px] mx-auto">
            <span className="font-bold">Назва бренду</span> спонукає сучасних
            жінок діяти, творити та рухатися вперед незважаючи на життєві
            виклики.
          </p>
          <p className="roboto text-[14px] lg:p-0 p-5 text-[20px] text-center mt-[20px] max-w-[900px] mx-auto">
            Для цього <span className="font-bold">DIIEVA</span> використовує
            індивідуальний підхід, якісні натуральні тканини та звертає увагу на
            деталі, що дарують комфорт та впевненість.
          </p>
          <h1 className="roboto text-[20px] pt-[100px] uppercase font-bold text-center pt-[50px]">
            Айдентика бренду
          </h1>
          <div className="line w-[50px] h-[2px] bg-[#373737] m-auto mt-[20px]"></div>
          <p className="roboto text-[14px] lg:p-0 p-5 text-[20px] text-center mt-[20px] max-w-[900px] mx-auto">
            Включає в себе поєднання змережувальних швів та орнаментів, які
            поколіннями використовували в українському традиційному одязі. Наші
            прабабусі стверджували, що кожен стежок був не просто елементом
            декору, а справжнім оберегом.
          </p>
        </div>
      </div>
      <img src={about2} alt="" className="w-[100%] pt-[50px]" />
      <div>
        <div className="flex justify-between container mx-auto py-[100px] flex-col md:flex-row hidden">
          <div className="flex items-center flex-col md:flex-row">
            <h5 className="text-[16px] roboto font-bold">Анастасія ЛЕЖНІНА </h5>
            <div className="line w-[50px] h-[2px] ml-[24px] bg-[#373737]"></div>
          </div>
          <div className="max-w-[550px]">
            <p className="roboto text-[14px] lg:p-0 p-5 text-white">
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
        <div className="line w-[50px] h-[2px] bg-[#373737] m-auto mt-[20px]"></div>
        <p className="roboto text-[14px] lg:p-0 p-5 text-[20px] text-center mt-[20px] max-w-[900px] mx-auto">
          Тому, з брендом DIIEVA ти підкреслиш свою ідентичність та відчуєш силу
          поколінь.
        </p>
        <div className="line w-[50px] h-[2px] bg-[#373737] m-auto mt-[20px]"></div>
        <p className="roboto text-[14px] text-[20px] text-center mt-[20px] max-w-[900px] mx-auto">
          <span className="font-bold">Ти народжена творити.</span>
        </p>
        <p className="roboto text-[14px] text-[20px] text-center max-w-[900px] mx-auto">
          <span className="font-bold">ТИ – DIIEVA.</span>
        </p>
      </div>
      <div className="flex justify-center pt-[150px]">
        <img src={logo} alt="" className="w-[200px] pb-[100px]" />
      </div>
    </>
  );
};

export default AboutUsSection;

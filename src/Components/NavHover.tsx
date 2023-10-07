import React, { useState } from "react";
import navhover from "../Assets/navhover.png";

interface NavHoverProps {
  show: boolean;
}

const NavHover: React.FC<NavHoverProps> = ({ show }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={`backdrop-blur-5.6 w-full z-[999] mx-auto pt-[20px] sticky top-[126px] bg-blur lg:p-0 p-[18px] lg:py-0 lg:pb-5 ${
        show || isHovering ? "hidden md:block" : "hidden"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between container mx-auto pt-[40px]">
        <div>
          <ul>
            <li className="mt-[16px]">
              <a href="#">Все</a>
            </li>
            <li className="mt-[16px]">
              <a href="#">Верхній одяг</a>
            </li>
            <li className="mt-[16px]">
              <a href="#">Костюми</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mt-[16px]">
              <a href="#">Жакети</a>
            </li>
            <li className="mt-[16px]">
              <a href="#">Брюки</a>
            </li>
            <li className="mt-[16px]">
              <a href="#">Спідниці</a>
            </li>
            <li className="mt-[16px]">
              <a href="#">Корсети</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mt-[16px]">
              <a href="#">Про нас</a>
            </li>
            <li className="mt-[16px]">
              <a href="#">Покупцеві</a>
            </li>
            <li className="mt-[16px]">
              <a href="#">Контакти</a>
            </li>
          </ul>
        </div>
        <div onMouseLeave={handleMouseLeave}>
          <img src={navhover} alt="DIIEVA" className="navhover" />
          <p>DIIEVA Brand</p>
        </div>
      </div>
    </div>
  );
};

export default NavHover;

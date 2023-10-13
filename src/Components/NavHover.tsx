import React, { useState } from "react";
import navhover from "../Assets/navhover.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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
      className={`backdrop-blur-5.6 w-full z-[999] mx-auto pt-[20px] fixed top-[126px] bg-blur lg:p-0 p-[18px] lg:py-0 lg:pb-5 ${
        show || isHovering ? "hidden md:block" : "hidden"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between container mx-auto pt-[40px]">
        <div>
          <ul>
            <li className="mt-[16px]">
              <a href="/goods/all">Все</a>
            </li>
            <li className="mt-[16px]">
              <a href="/goods/Верхній%20одяг">Верхній одяг</a>
            </li>
            <li className="mt-[16px]">
              <a href="/goods/Костюми">Костюми</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mt-[16px]">
              <a href="/goods/Жакети">Жакети</a>
            </li>
            <li className="mt-[16px]">
              <a href="/goods/Брюки">Брюки</a>
            </li>
            <li className="mt-[16px]">
              <a href="/goods/Спідниці">Спідниці</a>
            </li>
            <li className="mt-[16px]">
              <a href="/goods/Корсети">Корсети</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mt-[16px]">
              <Link to="/about">Про нас</Link> {/* Use Link for navigation */}
            </li>
            <li className="mt-[16px]">
              <Link to="/customers">Покупцеві</Link>{" "}
              {/* Use Link for navigation */}
            </li>
            <li className="mt-[16px]">
              <Link to="/contacts">Контакти</Link>{" "}
              {/* Use Link for navigation */}
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

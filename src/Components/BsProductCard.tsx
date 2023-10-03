import React from "react";
import bsCard1 from "../Assets/bsCard1.png";

const BsProductCard = () => {
  return (
    <div className="text-center lg:w-[415px] w-[75%] mx-auto lg:mx-0">
      <img src={bsCard1} alt="card1" className="" />
      <h5 className="font-bold text-xl pt-[16px]">Жакет NAME</h5>
      <h5 className="font-bold text-xl">price</h5>
    </div>
  );
};

export default BsProductCard;

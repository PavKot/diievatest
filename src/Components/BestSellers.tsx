import React from "react";
import BsProductCard from "./BsProductCard";

const BestSellers = () => {
  return (
    <section className="pt-[40px] container mx-auto">
      <div className="container">
        <h1 className="text-[24px] font-normal">Бест селери</h1>
      </div>
      <div className="container grid lg:grid-cols-3 grid-rows-2 mt-[30px] gap-y-20 pb-10">
        <BsProductCard />
        <BsProductCard />
        <BsProductCard />
        <BsProductCard />
      </div>
    </section>
  );
};

export default BestSellers;

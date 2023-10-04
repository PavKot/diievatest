import React from "react";
import { BsSortUp, BsSortDown } from "react-icons/bs";
import productData from "../Data/Data";
import ProductCard from "./ProductCard";

const GoodsSection = () => {
  return (
    <>
      <div className="flex justify-between container mx-auto">
        <div>
          <p className="text-[#7B7B7B] font-roboto text-[14px]">
            DIIEVA / Каталог / Все{" "}
          </p>
          <p className="text-[15px] font-bold font-roboto pt-[11px]">ВСЕ</p>
        </div>
        <div className="flex gap-10">
          <button className="flex items-center gap-3">
            Сортувати <BsSortUp className="text-[24px]" />
          </button>
        </div>
      </div>
      <div className="container md:grid grid-cols-3 mx-auto gap-10 pb-[100px] flex flex-col">
        {Object.values(productData).map(
          (product: {
            collectionName: string;
            image: string;
            imageHover: string;
            name: string;
            price: string;
          }) => (
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              imageHover={product.imageHover}
            />
          )
        )}
      </div>
    </>
  );
};

export default GoodsSection;

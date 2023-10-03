import React from "react";
import ProductCard from "./ProductCard";

interface Props {
  collectionName: string;
  image1: string;
  image1hover: string;
  name1: string;
  price1: string;
  image2: string;
  image2hover: string;
  name2: string;
  price2: string;
  image3: string;
  image3hover: string;
  name3: string;
  price3: string;
}

const HomeCollectionSection: React.FC<Props> = ({
  collectionName,
  image1,
  image1hover,
  name1,
  price1,
  image2,
  image2hover,
  name2,
  price2,
  image3,
  image3hover,
  name3,
  price3,
}: Props) => {
  return (
    <section className="pt-[40px] max-w-[300px] sm:container mx-auto">
      <div className="">
        <h1 className="text-[20px] font-normal font-roboto">
          {collectionName}
        </h1>
      </div>
      <div className="container flex justify-between mt-[40px] lg:flex-row flex-col">
        <ProductCard
          name={name1}
          price={price1}
          image={image1}
          imageHover={image1hover}
        />
        <ProductCard
          name={name2}
          price={price2}
          image={image2}
          imageHover={image2hover}
        />
        <ProductCard
          name={name3}
          price={price3}
          image={image3}
          imageHover={image3hover}
        />
      </div>
    </section>
  );
};

export default HomeCollectionSection;

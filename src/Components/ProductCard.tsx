import React, { useState } from "react";

interface Props {
  name: string;
  price: string;
  image: string;
  imageHover: string;
}

const ProductCard: React.FC<Props> = ({
  name,
  price,
  image,
  imageHover,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="mx-auto lg:mx-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isHovered ? imageHover : image}
        alt="product-card"
        className="cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-75"
      />
      <h5 className="font-normal text-l pt-[16px] font-roboto">{name}</h5>
      <h5 className="font-normal text-l pt-[16px] font-roboto">{price}</h5>
    </div>
  );
};

export default ProductCard;

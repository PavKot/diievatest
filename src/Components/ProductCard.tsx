import { type } from "os";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  price: string;
  image: string;
  imageHover: string;
  link: string;
  type: string;
}

const ProductCard: React.FC<Props> = ({
  name,
  price,
  image,
  imageHover,
  link,
  type,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={link}>
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
    </Link>
  );
};

export default ProductCard;

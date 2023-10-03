import React from "react";
import catalogtype1 from "../Assets/catalogtype1.png";
import catalogtype2 from "../Assets/catalogtype2.png";
import { Link } from "react-router-dom";

const CatalogTypesSection = () => {
  return (
    <div className="flex mt-[80px] justify-between flex-col md:flex-row">
      <Link to="/catalog">
        <img
          src={catalogtype1}
          alt="Костюми"
          className="md:w-[99%] w-100% object-cover"
        />
      </Link>
      <Link to="/catalog">
        <img src={catalogtype2} alt="Корсети" className="md:w-[99%] " />
      </Link>
    </div>
  );
};

export default CatalogTypesSection;

import React from "react";
import catalogtype1 from "../Assets/catalogtype1.png";
import catalogtype2 from "../Assets/catalogtype2.png";
import { Link } from "react-router-dom";

const CatalogTypesSection = () => {
  return (
    <div className="flex mt-[80px] justify-between flex-col md:flex-row gap-5">
      <div className="md:w-[50%] w-full overflow-hidden">
        <Link to="">
          <img
            src={catalogtype1}
            alt="Костюми"
            className="md:w-[100%] w-100% object-cover h-full hover:scale-105 transition duration-300 ease-in-out"
          />
        </Link>
      </div>
      <div className="md:w-[50%] w-full overflow-hidden">
        <Link to="">
          <img
            src={catalogtype2}
            alt="Корсети"
            className="md:w-[100%] hover:scale-105 transition duration-300 ease-in-out"
          />
        </Link>
      </div>
    </div>
  );
};

export default CatalogTypesSection;

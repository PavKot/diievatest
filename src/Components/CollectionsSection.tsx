import React from "react";
import collection1 from "../Assets/collection1.png";
import smallcollection1 from "../Assets/smallcollection1.png";

const CollectionsSection = () => {
  return (
    <div className="flex justify-between container mx-auto pb-[200px] flex-col md:flex-row">
      <div>
        <h4 className="font-roboto text-[16px] font-bold">
          Winter - Fall 23 DIIEVA collection
        </h4>
      </div>
      <div>
        <img src={collection1} alt="Winter - Fall 23 DIIEVA collection" />
      </div>
      <div className="max-w-[400px] pl-[20px] md:pl-0">
        <h4 className="font-roboto text-[20px] font-bold">FW 2023 Drop Fall</h4>
        <p className="pt-[80px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p className="pt-[45px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p className="pt-[45px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <img
          src={smallcollection1}
          alt="Winter - Fall 23 DIIEVA collection"
          className="pt-[45px]"
        />
        <img
          src={smallcollection1}
          alt="Winter - Fall 23 DIIEVA collection"
          className="pt-[20px]"
        />
        <img
          src={smallcollection1}
          alt="Winter - Fall 23 DIIEVA collection"
          className="pt-[20px]"
        />
        <img
          src={smallcollection1}
          alt="Winter - Fall 23 DIIEVA collection"
          className="pt-[20px]"
        />
      </div>
    </div>
  );
};

export default CollectionsSection;

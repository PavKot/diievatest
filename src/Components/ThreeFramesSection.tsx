import React from "react";
import threeframe1 from "../Assets/threeframe1.png";
import threeframe2 from "../Assets/threeframe2.png";
import threeframe3 from "../Assets/threeframe3.png";

const ThreeFramesSection = () => {
  return (
    <div className="flex mt-[80px] justify-center md:flex-row flex-col">
      <img src={threeframe1} alt="frame1" className="md:w-[33%] w-[100%]" />
      <img
        src={threeframe2}
        alt="frame2"
        className="md:ml-[20px] md:w-[33%] w-[100%]"
      />
      <img
        src={threeframe3}
        alt="frame3"
        className="md:ml-[20px] md:w-[33%] w-[100%]"
      />
    </div>
  );
};

export default ThreeFramesSection;

import React from "react";
import smallframe1 from "../Assets/smallframe1.png";
import smallframe2 from "../Assets/smallframe2.png";
import smallframe3 from "../Assets/smallframe3.png";
import smallframe4 from "../Assets/smallframe4.png";
import smallframe5 from "../Assets/smallframe5.png";

const SmallFramesSection = () => {
  return (
    <div className="flex mt-[80px] justify-center pb-10 md:flex-row flex-col">
      <img src={smallframe1} alt="frame1" className="md:w-[20%]" />
      <img src={smallframe2} alt="frame2" className="md:ml-[20px] md:w-[20%]" />
      <img src={smallframe3} alt="frame2" className="md:ml-[20px] md:w-[20%]" />
      <img src={smallframe4} alt="frame2" className="md:ml-[20px] md:w-[20%]" />
      <img src={smallframe5} alt="frame2" className="md:ml-[20px] md:w-[20%]" />
    </div>
  );
};

export default SmallFramesSection;

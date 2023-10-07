import React from "react";
import smallframe1 from "../Assets/smallframe1.png";
import smallframe2 from "../Assets/smallframe2.png";
import smallframe3 from "../Assets/smallframe3.png";
import smallframe4 from "../Assets/smallframe4.png";
import smallframe5 from "../Assets/smallframe5.png";
import smallframe6 from "../Assets/smallframe6.png";

const SmallFramesSection = () => {
  return (
    <div className="flex mt-[80px] justify-center pb-10 md:flex-row flex-col">
      <img src={smallframe1} alt="frame1" className="md:w-[18%]" />
      <img src={smallframe2} alt="frame2" className="md:ml-[20px] md:w-[18%]" />
      <img src={smallframe3} alt="frame3" className="md:ml-[20px] md:w-[18%]" />
      <img src={smallframe4} alt="frame4" className="md:ml-[20px] md:w-[18%]" />
      <img src={smallframe5} alt="frame5" className="md:ml-[20px] md:w-[18%]" />
      <img src={smallframe6} alt="frame6" className="md:ml-[20px] md:w-[18%]" />
    </div>
  );
};

export default SmallFramesSection;

import React from "react";
import frame1 from "../Assets/frame1.png";
import frame2 from "../Assets/frame2.png";

const FramesSection = () => {
  return (
    <div className="flex mt-[80px] flex-col md:flex-row gap-5">
      <div className="md:w-[50%] w-full overflow-hidden">
        <img
          src={frame1}
          alt="frame1"
          className="md:w-[100%] w-100% hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      <div className="md:w-[50%] w-full overflow-hidden">
        <img
          src={frame2}
          alt="frame2"
          className="md:w-[100%] hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default FramesSection;

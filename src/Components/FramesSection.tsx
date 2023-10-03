import React from "react";
import frame1 from "../Assets/frame1.png";
import frame2 from "../Assets/frame2.png";

const FramesSection = () => {
  return (
    <div className="flex mt-[80px] justify-center flex-col md:flex-row">
      <img
        src={frame1}
        alt="frame1" /* zoom into image on hover */
        className="md:w-[55%] w-100% hover:scale-105 transition duration-300 ease-in-out"
      />

      <img
        src={frame2}
        alt="frame2"
        className="md:ml-[20px] md:w-[55%] hover:scale-105 transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default FramesSection;

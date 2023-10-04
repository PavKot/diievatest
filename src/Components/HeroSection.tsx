import React from "react";
import heroImg from "../Assets/heroImg.png";
import heroImgNew from "../Assets/heroImgNew.png";
import banner from "../Assets/banner.png";

const HeroSection = () => {
  return (
    <>
      <div className="banner absolute left-0 right-0 mx-auto top-[25vh]">
        <img src={banner} alt="" className="mx-auto" />
      </div>
      <section className="w-[100%]">
        <img src={heroImgNew} alt="Hero Image" className="w-[100%]" />
      </section>
    </>
  );
};

export default HeroSection;

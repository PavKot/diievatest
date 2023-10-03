import React from "react";
import heroImg from "../Assets/heroImg.png";
import heroImgNew from "../Assets/heroImgNew.png";

const HeroSection = () => {
  return (
    <section className="w-[100%]">
      <img src={heroImgNew} alt="Hero Image" className="w-[100%]" />
    </section>
  );
};

export default HeroSection;

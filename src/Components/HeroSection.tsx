import React from "react";
import heroImg from "../Assets/heroImg.png";
import heroImgNew from "../Assets/heroImgNew.png";
import banner from "../Assets/banner.png";

const HeroSection = () => {
  return (
    <>
      <div className="banner fixed left-0 right-0 mx-auto top-[25vh] z-[999]">
        <a href="https://instagram.com/diieva_ua">
          <img src={banner} alt="" className="mx-auto" />
        </a>
      </div>
      <section className="w-[100%]">
        <img src={heroImgNew} alt="Hero Image" className="w-[100%]" />
      </section>
    </>
  );
};

export default HeroSection;

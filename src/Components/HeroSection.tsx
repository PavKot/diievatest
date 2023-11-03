import React from "react";
import heroImg from "../Assets/heroImg.png";
import heroImgNew from "../Assets/heroImgNew.png";
import banner from "../Assets/banner.png";
import bannermob from "../Assets/bannermob.png";
import heroBig1 from "../Assets/heroBig1.png";
import heroBig2 from "../Assets/heroBig2.png";
import heroSmall1 from "../Assets/heroSmall1.png";
import heroSmall2 from "../Assets/heroSmall2.png";
import heroSmall3 from "../Assets/heroSmall3.png";
import heroSmall4 from "../Assets/heroSmall4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Autoplay,
  EffectFlip,
  EffectCube,
  EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const HeroSection = () => {
  return (
    <>
      <div className="banner fixed left-0 right-0 mx-auto top-[25vh] z-[999] hidden md:hidden">
        <a href="https://www.instagram.com/diieva.brand/">
          <img src={banner} alt="" className="mx-auto" />
        </a>
      </div>
      <div className="banner fixed left-0 right-0 mx-auto top-[25vh] z-[999] hidden md:hidden">
        <a href="https://www.instagram.com/diieva.brand/">
          <img src={bannermob} alt="" className="mx-auto" />
        </a>
      </div>
      <section className="w-full">
        <div className="flex flex-col">
          <div className="flex w-full max-w-full flex-col md:flex-row">
            <div className="w-[100%] md:w-[50%]">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[EffectFade, Autoplay]}
              >
                <SwiperSlide>
                  <img src={heroSmall1} alt="" className="w-[100%]" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={heroSmall3} alt="" className="w-[100%]" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-[100%] md:w-[50%]">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                effect="flip"
                loop={true}
                modules={[EffectFlip, Autoplay]}
              >
                <SwiperSlide>
                  <img src={heroSmall2} alt="" className="w-[100%]" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={heroSmall4} alt="" className="w-[100%]" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="flex">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[EffectCreative, Autoplay]}
            >
              <SwiperSlide>
                <img src={heroBig1} alt="" className="w-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={heroBig2} alt="" className="w-full" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

import React, { useState, useEffect } from "react";
import heroBig1 from "../Assets/heroBig1.png";
import heroBig2 from "../Assets/heroBig2.png";
import heroSmall1 from "../Assets/heroSmall1.png";
import heroSmall2 from "../Assets/heroSmall2.png";
import heroSmall3 from "../Assets/heroSmall3.png";
import heroSmall4 from "../Assets/heroSmall4.png";

const HeroSection = () => {
  const [heroImages, setHeroImages] = useState([
    { big: heroBig1, small1: heroSmall1, small2: heroSmall2 },
    { big: heroBig2, small1: heroSmall3, small2: heroSmall4 },
  ]);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages]);

  const currentHero = heroImages[currentHeroIndex];

  return (
    <>
      <section className="w-full">
        <div className="flex flex-col">
          <div className="flex w-full max-w-full">
            <img src={currentHero.small1} alt="" className="w-[50%]" />
            <img src={currentHero.small2} alt="" className="w-[50%]" />
          </div>
          <div className="flex">
            <img src={currentHero.big} alt="" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

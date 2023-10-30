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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images before starting the animation
  useEffect(() => {
    const imageUrls = heroImages
      .map((hero) => Object.values(hero))
      .reduce((acc, val) => acc.concat(val), [])
      .filter(Boolean) as string[];

    const imagePromises = imageUrls.map((imageUrl) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch(() => {
        console.error("Image preloading failed.");
      });
  }, [heroImages]);

  useEffect(() => {
    if (!imagesLoaded) {
      return; // Don't start the animation until all images are loaded
    }

    const interval = setInterval(() => {
      setCurrentHeroIndex(
        (prevIndex) => (prevIndex + 1) % (heroImages.length * 2)
      );
    }, 3000); // Total transition time for all images

    return () => clearInterval(interval);
  }, [heroImages, imagesLoaded]);

  const currentHero = heroImages[currentHeroIndex % 2];

  const transitionTime = 1000; // Faster transition time
  const delaySmall1 = 0;
  const delayHeroBig = transitionTime;
  const delaySmall2 = transitionTime * 2;

  return (
    <>
      <section className="w-full">
        <div className="flex flex-col">
          <div className="flex w-full max-w-full">
            <img
              src={currentHero.small2}
              alt=""
              className="w-[50%]"
              style={{
                transition: `opacity ${transitionTime}ms ease-in-out`,
                opacity: currentHeroIndex % 2 === 0 ? 1 : 0,
              }}
            />
            <img
              src={currentHero.small1}
              alt=""
              className="w-[50%]"
              style={{
                transition: `opacity ${transitionTime}ms ease-in-out`,
                opacity: currentHeroIndex % 2 === 1 ? 1 : 0,
              }}
            />
          </div>
          <div className="flex">
            <img
              src={currentHeroIndex % 2 === 0 ? heroBig1 : heroBig2}
              alt=""
              className="w-full"
              style={{
                transition: `opacity ${transitionTime}ms ease-in-out`,
                opacity: 1,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

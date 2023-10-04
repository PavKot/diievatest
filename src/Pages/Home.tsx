import React from "react";
import HeroSection from "../Components/HeroSection";
import card1 from "../Assets/card1.png";
import card1hover from "../Assets/card1hover.png";
import card2 from "../Assets/card2.png";
import card2hover from "../Assets/card2hover.png";
import card3 from "../Assets/card3.png";
import card3hover from "../Assets/card3hover.png";
import card4 from "../Assets/card4.png";
import card4hover from "../Assets/card4hover.png";
import card5 from "../Assets/card5.png";
import card5hover from "../Assets/card5hover.png";
import card6 from "../Assets/card6.png";
import card6hover from "../Assets/card6hover.png";
import card7 from "../Assets/card7.png";
import card7hover from "../Assets/card7hover.png";
import card8 from "../Assets/card8.png";
import card8hover from "../Assets/card8hover.png";
import card9 from "../Assets/card9.png";
import card9hover from "../Assets/card9hover.png";
import BestSellers from "../Components/BestSellers";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import FramesSection from "../Components/FramesSection";
import HomeCollectionSection from "../Components/HomeCollectionSection";
import ThreeFramesSection from "../Components/ThreeFramesSection";
import SmallFramesSection from "../Components/SmallFramesSection";
import VideoPreloader from "../Components/VideoPreloader";

const Home = () => {
  return (
    <>
      <VideoPreloader />
      <NavBar />

      <HeroSection />
      <HomeCollectionSection
        collectionName="Одяг"
        image1={card1}
        image1hover={card1hover}
        name1="Жакет з вовни / Бежевий"
        link1="/good1"
        price1="Price"
        image2={card2}
        image2hover={card2hover}
        name2="Корсет з кісточками \ Темно - зелений "
        link2="/good2"
        price2="Price"
        image3={card3}
        link3="/good3"
        image3hover={card3hover}
        name3="Пальто чорне"
        price3="Price"
      />

      <FramesSection />
      <HomeCollectionSection
        collectionName="FW 2023 Drop Fall"
        image1={card4}
        link1="/good1"
        image1hover={card4hover}
        name1="Костюм на шнурівці / Синій "
        price1="Price"
        image2={card5}
        image2hover={card5hover}
        name2="Брюки палаццо бежевий з вовни"
        price2="Price"
        link2="/good2"
        image3={card6}
        image3hover={card6hover}
        name3="Кроп-жакет \ Темно-зелений"
        price3="Price"
        link3="/good3"
      />
      <HomeCollectionSection
        collectionName="FW 2023 Drop Fall"
        image1={card7}
        image1hover={card7hover}
        link1="/good1"
        name1="Кюлоти  з завищеною талією \ Cині "
        price1="Price"
        image2={card8}
        image2hover={card8hover}
        name2="Бомбер"
        link2="/good2"
        price2="Price"
        image3={card9}
        image3hover={card9hover}
        name3="Костюм / Чорний"
        price3="Price"
        link3="/good3"
      />
      <ThreeFramesSection />
      <SmallFramesSection />
      <Footer />
    </>
  );
};

export default Home;

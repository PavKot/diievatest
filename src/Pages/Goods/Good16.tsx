import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good16_1 from "../../Assets/good16_1.png";
import good16_2 from "../../Assets/good16_2.png";
import good16_3 from "../../Assets/good16_3.png";
import good16_4 from "../../Assets/good16_4.png";
import good16_5 from "../../Assets/good16_5.png";

const Good16 = () => {
  return (
    <>
      <NavBar />
      <GoodLayout
        name="Костюм з кроп-жакетом \ темно-зелений "
        image1={good16_1}
        image2={good16_2}
        image3={good16_3}
        image4={good16_4}
        image5={good16_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Костюми /
        Кроп - жакет"
      />
      <Footer />
    </>
  );
};

export default Good16;

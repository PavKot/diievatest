import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good3_1 from "../../Assets/good3_1.png";
import good3_2 from "../../Assets/good3_2.png";
import good3_3 from "../../Assets/good3_3.png";
import good3_4 from "../../Assets/good3_4.png";
import ScrollToTop from "../../Components/ScrollToTop";

const Good3 = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Бомбер вовняний"
        image1={good3_1}
        image2={good3_2}
        image3={good3_3}
        image4={good3_4}
        image5="none"
        price="12 900"
        path="DIIEVA /
        Каталог /
        Верхній одяг / 
        Бомбер"
      />
      <Footer />
    </>
  );
};

export default Good3;

import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good2_1 from "../../Assets/good2_1.png";
import good2_2 from "../../Assets/good2_2.png";
import good2_3 from "../../Assets/good2_3.png";
import good2_4 from "../../Assets/good2_4.png";
import ScrollToTop from "../../Components/ScrollToTop";

const Good2 = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Пальто прямого крою \ Сіре"
        image1={good2_1}
        image2={good2_2}
        image3={good2_3}
        image4={good2_4}
        image5="none"
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Верхній одяг / 
        Пальто"
      />
      <Footer />
    </>
  );
};

export default Good2;

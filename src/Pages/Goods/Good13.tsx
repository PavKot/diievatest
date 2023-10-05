import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good13_1 from "../../Assets/good13_1.png";
import good13_2 from "../../Assets/good13_2.png";
import good13_3 from "../../Assets/good13_3.png";
import good13_4 from "../../Assets/good13_4.png";
import good13_5 from "../../Assets/good13_5.png";
import ScrollToTop from "../../Components/ScrollToTop";

const Good13 = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Кроп-жакет \ Темно-зелений"
        image1={good13_1}
        image2={good13_2}
        image3={good13_3}
        image4={good13_4}
        image5={good13_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Жакети /
        Кроп - жакет Темно - зелений"
      />
      <Footer />
    </>
  );
};

export default Good13;

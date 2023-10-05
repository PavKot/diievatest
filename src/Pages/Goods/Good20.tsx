import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good20_1 from "../../Assets/good20_1.png";
import good20_2 from "../../Assets/good20_2.png";
import good20_3 from "../../Assets/good20_3.png";
import good20_4 from "../../Assets/good20_4.png";
import good20_5 from "../../Assets/good20_5.png";
import ScrollToTop from "../../Components/ScrollToTop";

const Good20 = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Корсет з кісточками \ Молочний "
        image1={good20_1}
        image2={good20_2}
        image3={good20_3}
        image4={good20_4}
        image5={good20_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Корсети /
        Корсет з кісточками Молочний"
      />
      <Footer />
    </>
  );
};

export default Good20;

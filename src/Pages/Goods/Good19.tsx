import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good19_1 from "../../Assets/good19_1.png";
import good19_2 from "../../Assets/good19_2.png";
import good19_3 from "../../Assets/good19_3.png";
import good19_4 from "../../Assets/good19_4.png";
import good19_5 from "../../Assets/good19_5.png";
import ScrollToTop from "../../Components/ScrollToTop";

const Good19 = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Корсет з кісточками \ Темно - зелений"
        image1={good19_1}
        image2={good19_2}
        image3={good19_3}
        image4={good19_4}
        image5={good19_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Корсети /
        Корсет з кісточками Темно - зелений"
      />
      <Footer />
    </>
  );
};

export default Good19;

import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good9_1 from "../../Assets/good9_1.png";
import good9_2 from "../../Assets/good9_2.png";
import good9_3 from "../../Assets/good9_3.png";
import good9_4 from "../../Assets/good9_4.png";
import good9_5 from "../../Assets/good9_5.png";
import ScrollToTop from "../../Components/ScrollToTop";

const Good9 = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Жакет з вовни \ Бежевий "
        image1={good9_1}
        image2={good9_2}
        image3={good9_3}
        image4={good9_4}
        image5={good9_5}
        price="9 550"
        path="DIIEVA /
        Каталог /
        Жакети /
        Жакет з вовни Бежевий"
      />
      <Footer />
    </>
  );
};

export default Good9;

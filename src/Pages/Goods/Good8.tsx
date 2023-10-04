import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good8_1 from "../../Assets/good8_1.png";
import good8_2 from "../../Assets/good8_2.png";
import good8_3 from "../../Assets/good8_3.png";
import good8_4 from "../../Assets/good8_4.png";
import good8_5 from "../../Assets/good8_5.png";

const Good8 = () => {
  return (
    <>
      <NavBar />
      <GoodLayout
        name="Жакет на шнурівці \ Синій  "
        image1={good8_1}
        image2={good8_2}
        image3={good8_3}
        image4={good8_4}
        image5={good8_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Жакети /
        Жакет на шнурівці Синій"
      />
      <Footer />
    </>
  );
};

export default Good8;

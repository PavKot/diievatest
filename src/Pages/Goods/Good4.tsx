import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good4_1 from "../../Assets/good4_1.png";
import good4_2 from "../../Assets/good4_2.png";
import good4_3 from "../../Assets/good4_3.png";
import good4_4 from "../../Assets/good4_4.png";
import good4_5 from "../../Assets/good4_5.png";

const Good4 = () => {
  return (
    <>
      <NavBar />
      <GoodLayout
        name="Брюки палаццо з вовни \ Сині "
        image1={good4_1}
        image2={good4_2}
        image3={good4_3}
        image4={good4_4}
        image5={good4_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Верхній одяг / 
        Бомбер"
      />
      <Footer />
    </>
  );
};

export default Good4;

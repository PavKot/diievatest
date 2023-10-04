import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good10_1 from "../../Assets/good10_1.png";
import good10_2 from "../../Assets/good10_2.png";
import good10_3 from "../../Assets/good10_3.png";
import good10_4 from "../../Assets/good10_4.png";
import good10_5 from "../../Assets/good10_5.png";

const Good10 = () => {
  return (
    <>
      <NavBar />
      <GoodLayout
        name="Жакет з вовни \ Темно - синій "
        image1={good10_1}
        image2={good10_2}
        image3={good10_3}
        image4={good10_4}
        image5={good10_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Жакети /
        Жакет з вовни Синій"
      />
      <Footer />
    </>
  );
};

export default Good10;

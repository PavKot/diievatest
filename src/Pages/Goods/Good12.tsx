import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good12_1 from "../../Assets/good12_1.png";
import good12_2 from "../../Assets/good12_2.png";
import good12_3 from "../../Assets/good12_3.png";
import good12_4 from "../../Assets/good12_4.png";
import good12_5 from "../../Assets/good12_5.png";

const Good12 = () => {
  return (
    <>
      <NavBar />
      <GoodLayout
        name="Костюм з вовни \ Бежевий "
        image1={good12_1}
        image2={good12_2}
        image3={good12_3}
        image4={good12_4}
        image5={good12_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Костюми /
        Жакет з вовни Бежевий"
      />
      <Footer />
    </>
  );
};

export default Good12;

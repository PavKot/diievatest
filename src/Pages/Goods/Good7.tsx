import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good7_1 from "../../Assets/good7_1.png";
import good7_2 from "../../Assets/good7_2.png";
import good7_3 from "../../Assets/good7_3.png";
import good7_4 from "../../Assets/good7_4.png";
import good7_5 from "../../Assets/good7_5.png";

const Good7 = () => {
  return (
    <>
      <NavBar />
      <GoodLayout
        name="Брюки завужені \ Чорні "
        image1={good7_1}
        image2={good7_2}
        image3={good7_3}
        image4={good7_4}
        image5={good7_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Костюми /
        Брюки завужені Чорні"
      />
      <Footer />
    </>
  );
};

export default Good7;

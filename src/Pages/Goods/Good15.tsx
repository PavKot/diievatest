import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good15_1 from "../../Assets/good15_1.png";
import good15_2 from "../../Assets/good15_2.png";
import good15_3 from "../../Assets/good15_3.png";
import good15_4 from "../../Assets/good15_4.png";
import good15_5 from "../../Assets/good15_5.png";

const Good15 = () => {
  return (
    <>
      <NavBar />
      <GoodLayout
        name="Костюм з вовни \ Темно- Синій  "
        image1={good15_1}
        image2={good15_2}
        image3={good15_3}
        image4={good15_4}
        image5={good15_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Костюми /
        Костюм з вовни"
      />
      <Footer />
    </>
  );
};

export default Good15;

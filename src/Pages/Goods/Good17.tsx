import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good17_1 from "../../Assets/good17_1.png";
import good17_2 from "../../Assets/good17_2.png";
import good17_3 from "../../Assets/good17_3.png";
import good17_4 from "../../Assets/good17_4.png";
import good17_5 from "../../Assets/good17_5.png";

const Good17 = () => {
  return (
    <>
      <NavBar />
      <GoodLayout
        name="Костюм на шнурівці \ Синій "
        image1={good17_1}
        image2={good17_2}
        image3={good17_3}
        image4={good17_4}
        image5={good17_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Костюми /
        Костюм на шнурівці"
      />
      <Footer />
    </>
  );
};

export default Good17;
import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good6_1 from "../../Assets/good6_1.png";
import good6_2 from "../../Assets/good6_2.png";
import good6_3 from "../../Assets/good6_3.png";
import good6_4 from "../../Assets/good6_4.png";
import good6_5 from "../../Assets/good6_5.png";

const Good6 = () => {
  return (
    <>
      <NavBar />
      <GoodLayout
        name="Кюлоти  з завищеною талією \ Cині "
        image1={good6_1}
        image2={good6_2}
        image3={good6_3}
        image4={good6_4}
        image5={good6_5}
        price="PRICE"
        path="DIIEVA /
        Каталог /
        Брюки /
        Кюлоти з завищеною талією Сині"
      />
      <Footer />
    </>
  );
};

export default Good6;
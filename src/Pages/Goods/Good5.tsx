import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good5_1 from "../../Assets/good5_1.png";
import good5_2 from "../../Assets/good5_2.png";
import good5_3 from "../../Assets/good5_3.png";
import good5_4 from "../../Assets/good5_4.png";
import good5_5 from "../../Assets/good5_5.png";
import ScrollToTop from "../../Components/ScrollToTop";

const Good5 = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Брюки палаццо з вовни \ Бежеві "
        image1={good5_1}
        image2={good5_2}
        image3={good5_3}
        image4={good5_4}
        image5={good5_5}
        price="5 350"
        path="DIIEVA /
        Каталог /
        Брюки /
        Брюки палаццо з вовни Бежеві"
      />
      <Footer />
    </>
  );
};

export default Good5;

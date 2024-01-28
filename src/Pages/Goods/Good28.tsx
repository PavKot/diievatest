import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good28_1 from "../../Assets/good28_1.png";
import good21_2 from "../../Assets/good21_2.png";
import good21_3 from "../../Assets/good21_3.png";
import good21_4 from "../../Assets/good21_4.png";
import good21_5 from "../../Assets/good19_5.png";
import good_white from "../../Assets/good_white.png";
import ScrollToTop from "../../Components/ScrollToTop";
import black from "../../Assets/black.png";
import milk from "../../Assets/milk.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good28: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Чорна Силянка"
        image1={good28_1}
        image2={good_white}
        image3={good_white}
        image4={good_white}
        image5={good_white}
        price="1950"
        path="DIIEVA /
        Каталог /
        Аксесуари /
        Силянка"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={black}
        colorName="Чорний"
        details1Name="Чорна силянка"
        details1Desc="Силянка в двох кольорах – чорний та прозорий. Матеріал: чеський бісер та срібної фурнітури з брендованою підвіскою.  Застібка має подовжувач.           
        "
        details2First=""
        details2Second=""
        details2Third=""
        details3First="none"
        details4First="none"
      />
      <Footer />
    </>
  );
};

export default Good28;

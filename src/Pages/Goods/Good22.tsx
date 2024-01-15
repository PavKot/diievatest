import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good22_1 from "../../Assets/good22_1.png";
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

const Good22: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Стрічковий ґердан"
        image1={good22_1}
        image2={good_white}
        image3={good_white}
        image4={good_white}
        image5={good_white}
        price="2700"
        path="DIIEVA /
        Каталог /
        Аксесуари /
        Стрічковий ґердан"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={black}
        colorName="Чорний"
        details1Name="Стрічковий ґердан"
        details1Desc="Стрічковий гердан з підвісками, виконаний на бавовняній стрічці, зав'язується позаду бантиком. 
        Виконаний з чеського бісеру, червоних та чорних намистин з чеського скла та скляруса."
        details2First="Довжина регулюється"
        details2Second="Ширина стрічки 2.5см"
        details2Third=""
        details3First="none"
        details4First="none"
      />
      <Footer />
    </>
  );
};

export default Good22;

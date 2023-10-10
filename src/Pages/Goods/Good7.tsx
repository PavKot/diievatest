import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good7_1 from "../../Assets/good7_1.png";
import good7_2 from "../../Assets/good7_2.png";
import good7_3 from "../../Assets/good7_3.png";
import good7_4 from "../../Assets/good7_4.png";
import good7_5 from "../../Assets/good7_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import black from "../../Assets/black.png";
interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good7: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Брюки завужені \ Чорні "
        image1={good7_1}
        image2={good7_2}
        image3={good7_3}
        image4={good7_4}
        image5={good7_5}
        price="3600"
        path="DIIEVA /
        Каталог /
        Костюми /
        Брюки завужені Чорні"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={black}
        colorName="Чорний"
        details1Name="Брюки завужені чорні"
        details1Desc="Чорні завужені брюки середньої посадки ззаду на ризинці. Прострочена центральна складка. Модель має бічні кишені, застібаєтся з переду на блискавку та один гудзик."
        details2First="45% віскоза"
        details2Second="30% поліестер"
        details2Third="25% шерсть"
        details3First="none"
        details4First="none"
      />
      <Footer />
    </>
  );
};

export default Good7;

import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good2_1 from "../../Assets/good2_1.png";
import good2_2 from "../../Assets/good2_2.png";
import good2_3 from "../../Assets/good2_3.png";
import good2_4 from "../../Assets/good2_4.png";
import ScrollToTop from "../../Components/ScrollToTop";
import grey from "../../Assets/grey.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good2: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Пальто прямого крою \ Сіре"
        image1={good2_1}
        image2={good2_2}
        image3={good2_3}
        image4={good2_4}
        image5="none"
        price="11900"
        path="DIIEVA /
        Каталог /
        Верхній одяг / 
        Пальто"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={grey}
        colorName="Сірий"
        details1Name="Пальто прямого крою сіре"
        details1Desc="Сіре пальто прямого крою з рукавом реглан. Має відкладний комір з широкими лацканами та класичну двобортну застібку з металевими гудзиками. Модель доповнює накладні кишені . Шов  рукава виведено на перед та прикрашено чорною вовняною ниткою, по краях виробу оздоблено прошивкою в колір тканини. Пальто на підкладці з утеплювачем SIimtex. "
        details2First="60% вовна / wool"
        details2Second="35% нейлон / nylon"
        details2Third="5% еластан / elastane"
        details3First="none"
        details4First="100% поліестер / polyester"
      />
      <Footer />
    </>
  );
};

export default Good2;

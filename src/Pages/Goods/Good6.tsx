import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good6_1 from "../../Assets/good6_1.png";
import good6_2 from "../../Assets/good6_2.png";
import good6_3 from "../../Assets/good6_3.png";
import good6_4 from "../../Assets/good6_4.png";
import good6_5 from "../../Assets/good6_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import blue from "../../Assets/blue.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good6: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Кюлоти  з завищеною талією \ Cині "
        image1={good6_1}
        image2={good6_2}
        image3={good6_3}
        image4={good6_4}
        image5={good6_5}
        price="4300"
        path="DIIEVA /
        Каталог /
        Брюки /
        Кюлоти з завищеною талією Сині"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={blue}
        colorName="Синій"
        details1Name="Колоти"
        details1Desc="Сині кюлоти з  завищеною талією. Модель має акцентний трикутний пояс,  доповнений фурнітурою. Прямого крою , прострочена центральна складка, довжина виробу вище щиколоток. Дві бокові кишені, потайна застібка з боку."
        details2First="40% вовна"
        details2Second="40% акрил"
        details2Third="20% віскоза"
        details3First="100% льон"
        details4First="100% віскоза"
      />
      <Footer />
    </>
  );
};

export default Good6;

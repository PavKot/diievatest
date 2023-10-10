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
        details1Name="Жакет"
        details1Desc="Жакет темно-синій виготовлений з італійської костюмної вовни дизайну ялинка. Силует жакету приталений за допомогою акцентних виточок , які з'єднуються українською традиційною вишивкою в техніці Полтавське змережування. Модель з втачним  рукавом та розрізом з низу який доповнює ручна вишивка. Виріб однобортний з асиметричним відкладеним лацканом. Застібаєтся на один гудзик спереду."
        details2First="100% вовна"
        details2Second=""
        details2Third=""
        details3First="100% льон"
        details4First="100% віскоза"
      />
      <Footer />
    </>
  );
};

export default Good6;

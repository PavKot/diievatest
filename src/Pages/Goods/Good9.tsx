import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good9_1 from "../../Assets/good9_1.png";
import good9_2 from "../../Assets/good9_2.png";
import good9_3 from "../../Assets/good9_3.png";
import good9_4 from "../../Assets/good9_4.png";
import good9_5 from "../../Assets/good9_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import beige from "../../Assets/beige.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good9: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Жакет з вовни \ Бежевий "
        image1={good9_1}
        image2={good9_2}
        image3={good9_3}
        image4={good9_4}
        image5={good9_5}
        price="9550"
        path="DIIEVA /
        Каталог /
        Жакети /
        Жакет з вовни Бежевий"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={beige}
        colorName="Бежевий"
        details1Name="Жакет бежевий з вовни"
        details1Desc="Жакет  бежевий виготовлений з італійської костюмної вовни дизайну градієнтний меланж. Силует жакету приталений за допомогою акцентних виточок , які з'єднуються українською традиційною вишивкою в техніці Полтавське змережування. Модель з втачним  рукавом та розрізом з низу який доповнює ручна вишивка. Виріб однобортний з асиметричним відкладеним лацканом. Застібаєтся на один гудзик спереду."
        details2First="100% вовна"
        details2Second=""
        details2Third=""
        details3First="100% льон"
        details4First="Штапель"
      />
      <Footer />
    </>
  );
};

export default Good9;

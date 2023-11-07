import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good15_1 from "../../Assets/good15_1.png";
import good15_2 from "../../Assets/good15_2.png";
import good15_3 from "../../Assets/good15_3.png";
import good15_4 from "../../Assets/good15_4.png";
import good15_5 from "../../Assets/good15_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import blue from "../../Assets/blue.png";
import beige from "../../Assets/beige.png";
interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good15: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Костюм з вовни \ Темно- Синій  "
        image1={good15_1}
        image2={good15_2}
        image3={good15_3}
        image4={good15_4}
        image5={good15_5}
        price="14900"
        path="DIIEVA /
        Каталог /
        Костюми /
        Костюм з вовни"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={blue}
        colorName="Синій"
        color2Img={beige}
        color2Name="Бежевий"
        color2Link="/goods/12"
        details1Name="Жакет + Брюки палаццо"
        details1Desc="Жакет темно-синій виготовлений з італійської костюмної вовни дизайну ялинка. Силует жакету приталений за допомогою акцентних виточок , які з'єднуються українською традиційною вишивкою в техніці Полтавське змережування. Модель з втачним  рукавом та розрізом з низу який доповнює ручна вишивка. Виріб однобортний з асиметричним відкладеним лацканом. Застібаєтся на один гудзик спереду. Брюки палаццо темно- сині з італійської костюмної вовни дизайну ялинка. Розроблені з низькою посадкою та вільний крій . Модель має бічні кишені, потайна застібка з боку."
        details2First="100 % вовна"
        details2Second=""
        details2Third=""
        details3First="100% льон"
        details4First="100% віскоза"
      />
      <Footer />
    </>
  );
};

export default Good15;

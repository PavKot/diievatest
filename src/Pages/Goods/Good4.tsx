import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good4_1 from "../../Assets/good4_1.png";
import good4_2 from "../../Assets/good4_2.png";
import good4_3 from "../../Assets/good4_3.png";
import good4_4 from "../../Assets/good4_4.png";
import good4_5 from "../../Assets/good4_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import blue from "../../Assets/blue.png";
import beige from "../../Assets/beige.png";
interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good4: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Брюки палаццо з вовни \ Сині "
        image1={good4_1}
        image2={good4_2}
        image3={good4_3}
        image4={good4_4}
        image5={good4_5}
        price="5350"
        path="DIIEVA /
        Каталог /
        Верхній одяг / 
        Бомбер"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={blue}
        colorName="Синій"
        color2Img={beige}
        color2Name="Бежевий"
        color2Link="/goods/5"
        details1Name="Брюки палаццо"
        details1Desc="Брюки палаццо темно- сині з італійської костюмної вовни дизайну ялинка. Розроблені з низькою посадкою та вільний крій . Модель має бічні кишені, потайна застібка  з боку ."
        details2First="100 % вовна"
        details2Second=""
        details2Third=""
        details3First="none"
        details4First="none"
      />
      <Footer />
    </>
  );
};

export default Good4;

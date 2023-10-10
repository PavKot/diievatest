import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good16_1 from "../../Assets/good16_1.png";
import good16_2 from "../../Assets/good16_2.png";
import good16_3 from "../../Assets/good16_3.png";
import good16_4 from "../../Assets/good16_4.png";
import good16_5 from "../../Assets/good16_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import green from "../../Assets/green.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good16: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Костюм з кроп-жакетом \ темно-зелений "
        image1={good16_1}
        image2={good16_2}
        image3={good16_3}
        image4={good16_4}
        image5={good16_5}
        price="11900"
        path="DIIEVA /
        Каталог /
        Костюми /
        Кроп - жакет"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={green}
        colorName="Зелений"
        details1Name="Кроп-жакет темно-зелений"
        details1Desc="Темно - зелений вкорочений прямий жакет з асиметричним дизайном.  Модель має комір стійку , вільний донизу силует і підкреслені плечі. Рукав доповнений розрізом який з'єднується  традиційною української технікою Полтавським змережуванням в тон основної тканини. Виріб виконаний з костюмної тканини з додаванням вовни. Комфорт до тіла забезпечує підклад зі 100% віскози. Застібається жакет на кнопку."
        details2First="70% поліестер"
        details2Second="20% віскоза"
        details2Third="10% вовна"
        details3First="100% льон"
        details4First="100% віскоза"
      />
      <Footer />
    </>
  );
};

export default Good16;

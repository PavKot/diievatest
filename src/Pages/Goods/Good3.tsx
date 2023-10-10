import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good3_1 from "../../Assets/good3_1.png";
import good3_2 from "../../Assets/good3_2.png";
import good3_3 from "../../Assets/good3_3.png";
import good3_4 from "../../Assets/good3_4.png";
import ScrollToTop from "../../Components/ScrollToTop";
import black from "../../Assets/black.png";
interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good3: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Бомбер вовняний"
        image1={good3_1}
        image2={good3_2}
        image3={good3_3}
        image4={good3_4}
        image5="none"
        price="12900"
        path="DIIEVA /
        Каталог /
        Верхній одяг / 
        Бомбер"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={black}
        colorName="Чорний"
        details1Name="Бомбер вовняний"
        details1Desc="Бомбер виготовлений з вовняної тканини  та має утеплювач Slimtex який забезпечить тепло і комфорт.  Виріб має зручні закриті основною тканиною  резинки на подолі , манжетах та горловині.  Модель має бокові кишені . Дизайн виробу прикрашає ручна червона вишивка. Застібаєтся з спереду на блискавку та вшиті магніти."
        details2First="40 % вовна"
        details2Second="40 % акрил"
        details2Third="20 % віскоза"
        details3First="none"
        details4First="100% віскоза"
      />
      <Footer />
    </>
  );
};

export default Good3;

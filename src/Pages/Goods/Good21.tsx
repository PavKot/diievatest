import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good21_1 from "../../Assets/good21_1.png";
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

const Good21: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Корсетна сукня"
        image1={good21_1}
        image2={good21_2}
        image3={good21_3}
        image4={good21_4}
        image5={good_white}
        price="9700"
        path="DIIEVA /
        Каталог /
        Сукні /
        Корсетна сукня"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={black}
        colorName="Чорний"
        details1Name="Сукня"
        details1Desc="Чорна корсетна сукня приталеного силуета, довжина – міді. Модель на брителях з фігурним вирізом. Особливість сукні – витончений топ бюстьє декорований бісером ручної роботи. Сукня застібається блискавкою, має розріз позаду.         "
        details2First="63% поліестер"
        details2Second="35% віскоза"
        details2Third="2% еластан"
        details3First="none"
        details4First="none"
      />
      <Footer />
    </>
  );
};

export default Good21;

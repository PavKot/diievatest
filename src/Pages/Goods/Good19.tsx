import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good19_1 from "../../Assets/good19_1.png";
import good19_2 from "../../Assets/good19_2.png";
import good19_3 from "../../Assets/good19_3.png";
import good19_4 from "../../Assets/good19_4.png";
import good19_5 from "../../Assets/good19_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import green from "../../Assets/green.png";
import milk from "../../Assets/milk.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good19: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Корсет з кісточками \ Темно - зелений"
        image1={good19_1}
        image2={good19_2}
        image3={good19_3}
        image4={good19_4}
        image5={good19_5}
        price="4300"
        path="DIIEVA /
        Каталог /
        Корсети /
        Корсет з кісточками Темно - зелений"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={green}
        colorName="Зелений"
        color2Img={milk}
        color2Name="Молочний"
        color2Link="/goods/20"
        details1Name="Корсет"
        details1Desc="Темно - зелений корсет з кісточками виготовлений з котонової тканини. Застібка на шнурку по спинці, виконана із основної тканини з металевими люверсами. Модель з фігурними шльовками які з'єднані з основним  корсетом ручною вишивкою яка виконана  технікою Подільське змережування."
        details2First="40% вовна"
        details2Second="40% акрил"
        details2Third="20% віскоза"
        details3First="100% льон"
        details4First="none"
      />
      <Footer />
    </>
  );
};

export default Good19;

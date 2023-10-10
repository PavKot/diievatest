import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good20_1 from "../../Assets/good20_1.png";
import good20_2 from "../../Assets/good20_2.png";
import good20_3 from "../../Assets/good20_3.png";
import good20_4 from "../../Assets/good20_4.png";
import good20_5 from "../../Assets/good20_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import green from "../../Assets/green.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good20: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Корсет з кісточками \ Молочний "
        image1={good20_1}
        image2={good20_2}
        image3={good20_3}
        image4={good20_4}
        image5={good20_5}
        price="4300"
        path="DIIEVA /
        Каталог /
        Корсети /
        Корсет з кісточками Молочний"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={green}
        colorName="Зелений"
        details1Name="Корсет"
        details1Desc="Молочний корсет з кісточками виготовлений з котонової тканини. Застібка на шнурку по спинці, виконана із основної тканини з металевими люверсами. Модель з фігурними шльовками які з'єднані з основним  корсетом ручною вишивкою яка виконана  технікою Подільське змережування. "
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

export default Good20;

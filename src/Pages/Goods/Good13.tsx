import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good13_1 from "../../Assets/good13_1.png";
import good13_2 from "../../Assets/good13_2.png";
import good13_3 from "../../Assets/good13_3.png";
import good13_4 from "../../Assets/good13_4.png";
import good13_5 from "../../Assets/good13_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import green from "../../Assets/green.png";
interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good13: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Кроп-жакет \ Темно-зелений"
        image1={good13_1}
        image2={good13_2}
        image3={good13_3}
        image4={good13_4}
        image5={good13_5}
        price="7900"
        path="DIIEVA /
        Каталог /
        Жакети /
        Кроп - жакет Темно - зелений"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={green}
        colorName="Зелений"
      />
      <Footer />
    </>
  );
};

export default Good13;

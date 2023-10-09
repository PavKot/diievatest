import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good10_1 from "../../Assets/good10_1.png";
import good10_2 from "../../Assets/good10_2.png";
import good10_3 from "../../Assets/good10_3.png";
import good10_4 from "../../Assets/good10_4.png";
import good10_5 from "../../Assets/good10_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import blue from "../../Assets/blue.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good10: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Жакет з вовни \ Темно - синій "
        image1={good10_1}
        image2={good10_2}
        image3={good10_3}
        image4={good10_4}
        image5={good10_5}
        price="9550"
        path="DIIEVA /
        Каталог /
        Жакети /
        Жакет з вовни Синій"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={blue}
        colorName="Синій"
      />
      <Footer />
    </>
  );
};

export default Good10;

import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good18_1 from "../../Assets/good18_1.png";
import good18_2 from "../../Assets/good18_2.png";
import good18_3 from "../../Assets/good18_3.png";
import good18_4 from "../../Assets/good18_4.png";
import good18_5 from "../../Assets/good18_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import black from "../../Assets/black.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good18: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Костюм з Жакетом двобортним \ Чорний  "
        image1={good18_1}
        image2={good18_2}
        image3={good18_3}
        image4={good18_4}
        image5={good18_5}
        price="11500"
        path="DIIEVA /
        Каталог /
        Костюми /
        Костюм з Жакетом двобортним Чорним"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={black}
        colorName="Чорний"
      />
      <Footer />
    </>
  );
};

export default Good18;

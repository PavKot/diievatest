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
      />
      <Footer />
    </>
  );
};

export default Good15;

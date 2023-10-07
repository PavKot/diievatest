import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good17_1 from "../../Assets/good17_1.png";
import good17_2 from "../../Assets/good17_2.png";
import good17_3 from "../../Assets/good17_3.png";
import good17_4 from "../../Assets/good17_4.png";
import good17_5 from "../../Assets/good17_5.png";
import ScrollToTop from "../../Components/ScrollToTop";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good17: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Костюм на шнурівці \ Синій "
        image1={good17_1}
        image2={good17_2}
        image3={good17_3}
        image4={good17_4}
        image5={good17_5}
        price="13000"
        path="DIIEVA /
        Каталог /
        Костюми /
        Костюм на шнурівці"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
      />
      <Footer />
    </>
  );
};

export default Good17;

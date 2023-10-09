import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good1_1 from "../../Assets/good1_1.png";
import good1_2 from "../../Assets/good1_2.png";
import good1_3 from "../../Assets/good1_3.png";
import good1_4 from "../../Assets/good1_4.png";
import good1_5 from "../../Assets/good1_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import { useState } from "react";
import green from "../../Assets/green.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good1: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Спідниця міді з асиметричним розрізом \
        Темно - зелена "
        image1={good1_1}
        image2={good1_2}
        image3={good1_3}
        image4={good1_4}
        image5={good1_5}
        price="4000"
        path="DIIEVA / Каталог / Спідниці / Спідниця міді з асемитричним розрізом"
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

export default Good1;

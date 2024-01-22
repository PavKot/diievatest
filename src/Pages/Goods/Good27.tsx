import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good27_1 from "../../Assets/good27_1.png";
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

const Good27: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Червоний котильйон"
        image1={good27_1}
        image2={good_white}
        image3={good_white}
        image4={good_white}
        image5={good_white}
        price="2500"
        path="DIIEVA /
        Каталог /
        Аксесуари /
        Червоний котильйон"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={black}
        colorName="Чорний"
        details1Name="Червоний котильйон"
        details1Desc="Мінімалістичний червоний котильйон в техніці де кожна бісеринка пришивається в ручну. 
        Аксесуар є універсальним завдяки зручному срібному замку. Можна використовувати як моносережку, підвіску та на шлевку в одязі. 
        Виконаний з японського бісеру Miyuki Delica зі срібною фурнітурою та брендованою підвіскою . В комплекті  вощений бавовняний шнур.           
        "
        details2First="Довжина виробу - 6 см."
        details2Second="Ширина виробу 4 см."
        details2Third=""
        details3First="none"
        details4First="none"
      />
      <Footer />
    </>
  );
};

export default Good27;

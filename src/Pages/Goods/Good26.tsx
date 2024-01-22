import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good26_1 from "../../Assets/good26_1.png";
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

const Good26: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Чорний котильйон"
        image1={good26_1}
        image2={good_white}
        image3={good_white}
        image4={good_white}
        image5={good_white}
        price="2500"
        path="DIIEVA /
        Каталог /
        Аксесуари /
        Чорний котильйон"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={black}
        colorName="Чорний"
        details1Name="Чорний котильйон"
        details1Desc="Чорний монохромний котильйон з авторським візерунком у автентичному стилі. В котильйоні поєднали матовий та глянцевий бісер. В основі візерунку - Ромб та Зоря, які разом символізують родючість Землі та гармонійність Всесвіту.
        Виконаний з японського бісеру Miyuki Delica. В комплекті  вощений бавовняний шнурок та срібна брендована підвіска.        
        "
        details2First="Довжина виробу - 7,5 см."
        details2Second="Ширина виробу 4,5 см."
        details2Third="Довжина шнурка 1м"
        details3First="none"
        details4First="none"
      />
      <Footer />
    </>
  );
};

export default Good26;

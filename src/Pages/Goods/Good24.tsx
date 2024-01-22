import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good24_1 from "../../Assets/good24_1.png";
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

const Good24: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Стрічковий ґердан"
        image1={good24_1}
        image2={good_white}
        image3={good_white}
        image4={good_white}
        image5={good_white}
        price="2500"
        path="DIIEVA /
        Каталог /
        Аксесуари /
        Золотий ґердан"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={black}
        colorName="Чорний"
        details1Name="Ґердан рожевий"
        details1Desc=" Ґердан ніжно рожевого кольору  в монохромній гамі. В автентичному стилі з авторським узором. Зорі на візерунку символізують гармонійність та впорядкованість Всесвіту.
        Виконаний з японського бісеру Miyuki Delica зі срібною фурнітурою та брендованою підвіскою. Застібка має подовжувач.        
        "
        details2First="Довжина виробу - 32 см. "
        details2Second="Ширина виробу 2,1 см."
        details2Third="Довжина подовжувача 4,5 см."
        details3First="none"
        details4First="none"
      />
      <Footer />
    </>
  );
};

export default Good24;

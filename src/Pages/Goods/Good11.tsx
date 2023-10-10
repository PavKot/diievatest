import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good11_1 from "../../Assets/good11_1.png";
import good11_2 from "../../Assets/good11_2.png";
import good11_3 from "../../Assets/good11_3.png";
import good11_4 from "../../Assets/good11_4.png";
import good11_5 from "../../Assets/good11_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import black from "../../Assets/black.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good11: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Жакет двобортний \ Чорний "
        image1={good11_1}
        image2={good11_2}
        image3={good11_3}
        image4={good11_4}
        image5={good11_5}
        price="7900"
        path="DIIEVA /
        Каталог /
        Костюми /
        Жакет двобортний"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={black}
        colorName="Чорний"
        details1Name="Жакет двобортний чорний"
        details1Desc="Чорний двобортний жакет без лацканів. Силует прямого крою нижче лінії бедра, в комплекті їде чорний пояс. Виріб доповнений накладними кишенями з асиметричним акцентом червоної вишивки. Традиційна українська вишивка яка виконана технікою Подільське змережування. Рукав втачний зі шліцею під гудзики. Застібаєтся на два гудзики з переду."
        details2First="45% віскоза"
        details2Second="30% поліестер"
        details2Third="25% шерсть"
        details3First="none"
        details4First="100% віскоза"
      />
      <Footer />
    </>
  );
};

export default Good11;

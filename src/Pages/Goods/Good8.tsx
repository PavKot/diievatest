import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good8_1 from "../../Assets/good8_1.png";
import good8_2 from "../../Assets/good8_2.png";
import good8_3 from "../../Assets/good8_3.png";
import good8_4 from "../../Assets/good8_4.png";
import good8_5 from "../../Assets/good8_5.png";
import ScrollToTop from "../../Components/ScrollToTop";
import blue from "../../Assets/blue.png";

interface Props {
  cart: any;
  setCart: (cart: any) => void;
  addToCart: (item: any) => void;
}

const Good8: React.FC<Props> = ({ cart, setCart, addToCart }) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodLayout
        name="Жакет на шнурівці \ Синій  "
        image1={good8_1}
        image2={good8_2}
        image3={good8_3}
        image4={good8_4}
        image5={good8_5}
        price="8700"
        path="DIIEVA /
        Каталог /
        Жакети /
        Жакет на шнурівці Синій"
        addToCart={addToCart}
        setCart={setCart}
        cart={cart}
        colorImg={blue}
        colorName="Синій"
        details1Name="Жакет"
        details1Desc="Синій жакет на шнурівці з двох боків на лінії талії. Вільний крій виробу надає комфорт та свободу, завдяки шнурівці можна підкреслити лінію талії та зробити трендовий силует. 
        Шнур виконаний з основної тканини.
        Дизайн доповнює традиційна українська вишивка яка виконана технікою Подільське змережування. Рукав втачний зі шліцею під гудзики. Однобортний жакет має відкладений комір з лацканами, застібаєтся на один гудзик спереду."
        details2First="40% вовна"
        details2Second="40% акрил"
        details2Third="20% віскоза"
        details3First="100% льон"
        details4First="100% віскоза"
      />
      <Footer />
    </>
  );
};

export default Good8;

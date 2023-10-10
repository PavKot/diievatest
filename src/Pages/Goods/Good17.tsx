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
import blue from "../../Assets/blue.png";

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
        colorImg={blue}
        colorName="Синій"
        details1Name="Жакет"
        details1Desc="Синій жакет на шнурівці з двох боків на лінії талії. Вільний крій виробу надає комфорт та свободу, завдяки шнурівці можна підкреслити лінію талії та зробити трендовий силует. 
        Шнур виконаний з основної тканини.
        Дизайн доповнює традиційна українська вишивка яка виконана технікою Подільське змережування. Рукав втачний зі шліцею під гудзики. Однобортний жакет має відкладений комір з лацканами, застібаєтся на один гудзик спереду. "
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

export default Good17;

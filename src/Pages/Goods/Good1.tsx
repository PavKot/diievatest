import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import GoodLayout from "../../Components/GoodLayout";
import good1_1 from "../../Assets/good1_1.png";
import good1_2 from "../../Assets/good1_2.png";
import good1_3 from "../../Assets/good1_3.png";
import good1_4 from "../../Assets/good1_4.png";
import good1_5 from "../../Assets/good1_5.png";

const Good1 = () => {
  return (
    <>
      <NavBar />
      <GoodLayout
        name="Спідниця міді з асиметричним розрізом \
        Темно - зелена "
        image1={good1_1}
        image2={good1_2}
        image3={good1_3}
        image4={good1_4}
        image5={good1_5}
        price="PRICE"
        path="DIIEVA / Каталог / Спідниці / Спідниця міді з асемитричним розрізом"
      />
      <Footer />
    </>
  );
};

export default Good1;

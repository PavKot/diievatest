import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ContactsSection from "../Components/ContactsSection";
import GoodsSection from "../Components/GoodsSection";
import ScrollToTop from "../Components/ScrollToTop";

const Goods = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <GoodsSection />
      <Footer />
    </>
  );
};

export default Goods;

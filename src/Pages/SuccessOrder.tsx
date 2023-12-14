import React from "react";
import VideoPreloader from "../Components/VideoPreloader";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import SuccessSection from "../Components/SuccessSection";
import SuccessOrderSection from "../Components/SuccessOrderSection";

const SuccessOrder = () => {
  return (
    <>
      <VideoPreloader />
      <NavBar />
      <SuccessOrderSection />
      <Footer />
    </>
  );
};

export default SuccessOrder;

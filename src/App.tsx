import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./Pages/Contacts";
import Catalog from "./Pages/Catalog";
import VideoPreloader from "./Components/VideoPreloader";
import Collections from "./Pages/Collections";
import Goods from "./Pages/Goods";
import Good from "./Pages/Good";
import Good1 from "./Pages/Goods/Good1";
import Good2 from "./Pages/Goods/Good2";
import Good3 from "./Pages/Goods/Good3";
import Good4 from "./Pages/Goods/Good4";
import Good5 from "./Pages/Goods/Good5";
import Good6 from "./Pages/Goods/Good6";
import Good7 from "./Pages/Goods/Good7";
import Good8 from "./Pages/Goods/Good8";
import Good9 from "./Pages/Goods/Good9";
import Good10 from "./Pages/Goods/Good10";
import Good11 from "./Pages/Goods/Good11";
import Good12 from "./Pages/Goods/Good12";
import Good13 from "./Pages/Goods/Good13";
import Good15 from "./Pages/Goods/Good15";
import Good16 from "./Pages/Goods/Good16";
import Good17 from "./Pages/Goods/Good17";
import Good18 from "./Pages/Goods/Good18";
import Good19 from "./Pages/Goods/Good19";
import Good20 from "./Pages/Goods/Good20";
import Good21 from "./Pages/Goods/Good21";
import AboutUs from "./Pages/AboutUs";
import TestGood1 from "./Pages/Goods/TestGood1";
import Success from "./Pages/Success";
import ProcessOrder from "./Pages/ProcessOrder";
import SuccessOrder from "./Pages/SuccessOrder";
import Good22 from "./Pages/Goods/Good22";
import Good23 from "./Pages/Goods/Good23";
import Good24 from "./Pages/Goods/Good24";
import Good25 from "./Pages/Goods/Good25";
import Good26 from "./Pages/Goods/Good26";
import Good27 from "./Pages/Goods/Good27";
import Good28 from "./Pages/Goods/Good28";

interface Product {
  name: string;
  price: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
}

function App() {
  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log(updatedCart);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/contacts" element={<About />} />
          <Route path="/customers" element={<Contacts />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/goods/:category" element={<Goods />} />
          <Route path="/good" element={<Good />} />
          <Route path="/process-order" element={<ProcessOrder />} />
          <Route path="/successOrder" element={<SuccessOrder />} />
          <Route
            path="/goods/1"
            element={
              <Good1 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/2"
            element={
              <Good2 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/3"
            element={
              <Good3 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/4"
            element={
              <Good4 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/5"
            element={
              <Good5 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/6"
            element={
              <Good6 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/7"
            element={
              <Good7 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/8"
            element={
              <Good8 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/9"
            element={
              <Good9 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/10"
            element={
              <Good10 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/11"
            element={
              <Good11 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/12"
            element={
              <Good12 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/13"
            element={
              <Good13 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/15"
            element={
              <Good15 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/16"
            element={
              <Good16 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/17"
            element={
              <Good17 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/18"
            element={
              <Good18 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/19"
            element={
              <Good19 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/20"
            element={
              <Good20 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/21"
            element={
              <Good21 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/22"
            element={
              <Good22 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/23"
            element={
              <Good23 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/24"
            element={
              <Good24 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/25"
            element={
              <Good25 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/26"
            element={
              <Good26 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/27"
            element={
              <Good27 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/28"
            element={
              <Good28 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
          <Route
            path="/goods/testGood"
            element={
              <TestGood1 cart={cart} setCart={setCart} addToCart={addToCart} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

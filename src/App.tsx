import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
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
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/contacts" element={<About />} />
          <Route path="/customers" element={<Contacts />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="/good" element={<Good />} />
          <Route path="/goods/1" element={<Good1 />} />
          <Route path="/goods/2" element={<Good2 />} />
          <Route path="/goods/3" element={<Good3 />} />
          <Route path="/goods/4" element={<Good4 />} />
          <Route path="/goods/5" element={<Good5 />} />
          <Route path="/goods/6" element={<Good6 />} />
          <Route path="/goods/7" element={<Good7 />} />
          <Route path="/goods/8" element={<Good8 />} />
          <Route path="/goods/9" element={<Good9 />} />
          <Route path="/goods/10" element={<Good10 />} />
          <Route path="/goods/11" element={<Good11 />} />
          <Route path="/goods/12" element={<Good12 />} />
          <Route path="/goods/13" element={<Good13 />} />
          <Route path="/goods/15" element={<Good15 />} />
          <Route path="/goods/16" element={<Good16 />} />
          <Route path="/goods/17" element={<Good17 />} />
          <Route path="/goods/18" element={<Good18 />} />
          <Route path="/goods/19" element={<Good19 />} />
          <Route path="/goods/20" element={<Good20 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

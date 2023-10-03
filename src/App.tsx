import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./Pages/Contacts";
import Catalog from "./Pages/Catalog";
import VideoPreloader from "./Components/VideoPreloader";
import Collections from "./Pages/Collections";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

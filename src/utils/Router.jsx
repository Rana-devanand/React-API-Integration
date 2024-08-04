import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import Services from "../Components/Services";
import Products from "../Components/Products";

function Router() {
  return (
    <nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </nav>
  );
}

export default Router;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/home.jsx";
import PageProdutos from "../pageProdutos/pageProdutos.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DigitalStore" element={<Home />} />
        <Route path="/Produtos" element={<PageProdutos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

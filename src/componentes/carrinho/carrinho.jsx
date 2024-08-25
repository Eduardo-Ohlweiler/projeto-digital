import { useState } from "react";
import { Header } from "../Header/index.jsx";
import "./carrinho.css";
import GlobalStyle from "../../style/global";
import Footer from "../Footer/index.jsx";
import AuthProvider from "../produtosContext/ProdutosContext";

function Carrinho() {
  return (
    <div className="carrinho">
      <AuthProvider>
        <GlobalStyle />
        <Header />
        <h1>Estrutura carrinho aqui</h1>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default Carrinho;

import { useState } from "react";
import { Header } from "../Header/index.jsx";
import "./styles.css";
import GlobalStyle from "../../style/global";
import Produtos from "../Produtos/index.jsx";
import Footer from "../Footer/index.jsx";
import AuthProvider from "../produtosContext/ProdutosContext";

function Home() {
  return (
    <div className="home">
      <AuthProvider>
        <GlobalStyle />
        <Header />
        <Produtos />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default Home;

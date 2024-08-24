import { Header } from "../Header/index.jsx";
import "./styles.css";
import GlobalStyle from "../../style/global";
import Footer from "../Footer/index.jsx";
import AuthProvider from "../produtosContext/ProdutosContext";

function PageProdutos() {
  return (
    <div className="produto">
      <AuthProvider>
        <GlobalStyle />
        <Header />
        <h1>produtos aqui</h1>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default PageProdutos;

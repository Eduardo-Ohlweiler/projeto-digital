import { Header } from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import FilterButton from "./pageFilter.jsx";
import FilterMenu from "../filtermenu/menufilter.jsx";
import "./styles.css";
import GlobalStyle from "../../style/global.jsx";
import Produtos from "../Produtos/index.jsx";
import AuthProvider from "../produtosContext/ProdutosContext";

function PageProdutos() {
  return (
    <div id="App">
      <FilterMenu />
      <AuthProvider>
        <GlobalStyle />
        <Header />
        <section className="grid">
          <section class="container8 ">
            <div className="flex8">
              <h1>
                Resultados para "tenis" <span>- 389 produtos</span>
              </h1>
            </div>
          </section>

          <FilterButton />
          <div className="produtos">
            <Produtos />
          </div>
        </section>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default PageProdutos;

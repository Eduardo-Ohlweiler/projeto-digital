import { Card } from "../Card";
import "./index.css";

function Produtos() {
  return (
    <>
      <section className="sectionProdutos">
        <div>
          <h3>Produtos em alta</h3>
          <button>Ver todos</button>
        </div>
        <div>
          <ul className="ulCard">
            <Card />
          </ul>
        </div>
      </section>
    </>
  );
}

export default Produtos;

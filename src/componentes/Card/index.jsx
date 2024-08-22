import { useContext } from "react"
import { AuthContext } from "../produtosContext/ProdutosContext"
import "./index.css"

export const Card = (product) => {
    const {products, addProduct} = useContext(AuthContext);

    return (
        <>
            {products.map((product, index) => (
                
                <li id="liCard">
                    <button id="cardButton"
                    onClick={() => addProduct(product.id)}
                    key={product.id}
                    type="submit" >
                        <div>
                            <img className="imagem" src= {product.image} />
                        </div>
                        <div className="palavras">
                            <small className="smallCard">{product.produto}</small>
                            <p className="modeloCard">{product.modelo}</p>
                            <p className="cardPrice">R$: {product.preco}</p>
                        </div>
                    </button>                   
                </li> 
            ))}
        </>
    )
}



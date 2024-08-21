import { useContext } from "react"
import { AuthContext } from "../produtosContext/ProdutosContext"

export const Card = (product) => {
    const {products, addProduct} = useContext(AuthContext);

    return (
        <>
            {products.map((product) => (
                <li>
                    <div className="image">
                        <img src={require(`assets/img/${product.image}`)}alt="imagem do produto" />
                    </div>
                    
                </li>
            ))} 
        </>
    )
}



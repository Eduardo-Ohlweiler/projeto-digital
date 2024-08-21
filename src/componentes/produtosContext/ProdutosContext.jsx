import { createContext, useEffect, useState } from "react";
import { Data } from "../../database/products";
import { toast } from "react-toastify";

//criado para usar a função do createContext
export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    
    //armazenar os produtos
    const [products, setProducts] = useState([]);

    //armazenar produtos do carrinho
    const [currentSale, setCurrentSale] = useState([]);

    useEffect(() => {
        setProducts(Data)
    }, []);

    //pesquisar produtos
    const pesquisarProdutos = (value) => {
        if(!value) {
            setProducts(Data);
            return;
        }
    const produtosFiltrados = products.filter((elemento) =>
        elemento.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(produtosFiltrados);
    };

    const addProduct = (productId) => {
        //verificar se o produto ja ta no carrinho
        const product = currentSale.find(
            (elementoNoCarrinho) => elementoNoCarrinho.id === productId
        );
        //se não tiver eu adiciono, se tiver incremento

        if(product) {
            const newProduct = currentSale.map((elementoNoCarrinho) => {
                if (elementoNoCarrinho.id === productId) {
                    elementoNoCarrinho.amount += 1;
                }
                return elementoNoCarrinho;
            });
            setCurrentSale(newProduct);
            toast.dismiss();
            toast.dismiss();
            toast.success('Produto adicionado com sucesso')
        } else {
            //verificando se existe no carrinho
            const product = products.filter((item) => item.id === productId);
            const currentProduct = {...product[0], amount: 1};
            setCurrentSale([...currentSale, currentProduct]);
            toast.success("Produto adicionado com sucesso")
        }
    };

    return (
        <AuthContext.Provider
            value={{
                products,
                pesquisarProdutos,
                addProduct,
                setCurrentSale,
                currentSale,
                setProducts
            }}
        > {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import { Data } from "../../database/products";
import { toast } from "react-toastify";

//criado para usar a função do createContext
export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    
    //armazenar os produtos
    const [products, setProducts] = useState([]);
    //armazenar produtos filtrados
    const [filteredProducts, setFilteredProducts] = useState([]);

    //armazenar produtos do carrinho
    const [currentSale, setCurrentSale] = useState([]);

    useEffect(() => {
        setProducts(Data);
        setFilteredProducts(Data);
    }, []);
    

    //pesquisar produtos
    const pesquisarProdutos = (value) => {
        if (!value) {
            setFilteredProducts(Data);
            return;
        }
        const searchValue = String(value).toLowerCase();
        const produtosFiltrados = Data.filter((elemento) =>
            elemento.modelo.toLowerCase().includes(searchValue)
        );
        setFilteredProducts(produtosFiltrados);
    };

    
    //adicionar produtos e verificar se o produto já está no carrinho
    const addProduct = (productId) => {
        const product = currentSale.find(
            (elementoNoCarrinho) => elementoNoCarrinho.id === productId
        );
        //se não tiver, adiciona; se tiver, incrementa

        if(product) {
            const newProduct = currentSale.map((elementoNoCarrinho) => {
                if (elementoNoCarrinho.id === productId) {
                    elementoNoCarrinho.amount += 1;
                }
                return elementoNoCarrinho;
            });
            setCurrentSale(newProduct);
            toast.dismiss();
            toast.success('Produto adicionado com sucesso');
        } else {
            //verificando se existe no carrinho
            const product = products.find((item) => item.id === productId);
            const currentProduct = {...product, amount: 1};
            setCurrentSale([...currentSale, currentProduct]);
            toast.success("Produto adicionado com sucesso");
        }
    };

    return (
        <AuthContext.Provider
            value={{
                products: filteredProducts, // Usa produtos filtrados no componente
                pesquisarProdutos,
                addProduct,
                setCurrentSale,
                currentSale,
                setProducts
            }}
        > 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

import logo from '../../assets/img/Logo_Digital_College.png';
import search from "../../assets/img/Icone_Search.png";
import carrinho from "../../assets/img/Carrinho.png";
import menuicon from "../../assets/img/menuicon.jpeg"
import "./index.css"
import { useContext } from 'react';
import { AuthContext } from '../produtosContext/ProdutosContext';


export const Header = () => {
    const  menuNavegacao = [
        "Home",
        "Produtos",
        "Categorias",
        "Meus pedidos"
    ];

    const { pesquisarProdutos  } = useContext(AuthContext);

    return (
        <header>
            <section className='menuPesquisa' >
                <ul>
                    <li id='botaomenu' ><button><img src={menuicon} alt="" /></button></li>
                    <li><img className='logoo' src={logo} alt="logo_digital" /></li>
                    <li className='campoPesquisa'>
                        <form action="">
                            <input
                            onChange={(e) => pesquisarProdutos(e)}
                            type="text" placeholder='Pesquisar produto...'/>
                            <button type="submit" className= "lupa"><img src={search} alt="lupa" /></button>
                        </form>
                    </li>

                    <li id='cadastro' ><a href="#">Cadastre-se</a></li>
                    <li><button className='entrar' type='submit'>Entrar</button></li>
                    <img className='carrinho' src={carrinho} alt=""/>
                </ul>
                 
                      
            </section>
            <section className='navSection' >
                <ul>
                    {menuNavegacao.map((item, index) => (
                        <li key={index}>
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </header>
    )
    
}
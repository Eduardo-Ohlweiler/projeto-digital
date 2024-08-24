import logoBranco from "../../assets/img/Logo_Branca_Digital_College.png";
import insta from "../../assets/img/Icone_Insta.png";
import face from "../../assets/img/Icone_Facebook.png";
import twiter from "../../assets/img/Icone_X.png";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <section className="info">
        <ul className="apresentacao">
          <li>
            <h2>
              <img src={logoBranco} alt="logo digital branca" />
            </h2>
          </li>
          <li>
            {" "}
            <p>
              Diuly Moreira <br />
              Eduardo Rodrigo Ohlweiler <br />
              Fernando Marques <br />
              Neto Castro <br />
              Everton silva
            </p>
          </li>
          <li className="rsociais">
            <a href="#">
              <img src={insta} alt="logo insta" />
            </a>
            <a href="#">
              <img src={face} alt="logo face" />
            </a>
            <a href="#">
              <img src={twiter} alt="logo X" />
            </a>
          </li>
        </ul>

        <ul className="informacao">
          <li>
            <h3>Informação</h3>
          </li>
          <li>
            <a href="#">Sobre Drip Store</a>
          </li>
          <li>
            <a href="#">Segurança</a>
          </li>
          <li>
            <a href="#">Wishlist</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Trabalhe conosco</a>
          </li>
          <li>
            <a href="#">Meus pedidos</a>
          </li>
        </ul>

        <ul className="categorias">
          <li>
            <h3>Categorias</h3>
          </li>
          <li>
            <a href="#">Camisetas</a>
          </li>
          <li>
            <a href="#">Calças</a>
          </li>
          <li>
            <a href="#">Bonés</a>
          </li>
          <li>
            <a href="#">Headphones</a>
          </li>
          <li>
            <a href="#">Tênis</a>
          </li>
        </ul>

        <ul className="contato">
          <li>
            <h3>Contato</h3>
          </li>
          <li>
            Av. Santos Dumont, 1510 - 1 <br />
            andar - Aldeota, Fortaleza - <br />
            CE, 60150-161
          </li>
          <li>(85) 3051-3411</li>
        </ul>
      </section>

      <section className="final">
        <hr className="linha" />
        <p>@ 2022 Digital College</p>
      </section>
    </footer>
  );
};

export default Footer;

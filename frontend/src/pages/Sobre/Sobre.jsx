import "./Sobre.css";
import init from "../../assets/sobre-icon.png"
import initSobre from "../../assets/img1-sobre.png"
import tratorIcon from "../../assets/trator-icon-sobre.png"
import imgSobre from "../../assets/img2-sobre.png"
import vacaIcon from "../../assets/vaca-icon-sobre.png"
import imgSobre3 from "../../assets/img3-sobre.png"
import sobreImg from "../../assets/sobre-img.png"
import separador from "../../assets/separador-sobre.png"
import separadorLeft from "../../assets/separador-sobre-left.png"
import { NavLink } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <section className="container-sobre-init">
        <div className="init-text">
          <h1 className="title-init">QUEM SOMOS</h1>
          <p className="init-descri">
            Seu primeiro passo para o universo da agropecuária
          </p>
          <NavLink to="/register">
            <button className="btn-cadastro">Cadastre-se</button>
          </NavLink>
        </div>
        <div className="init-img">
          <div className="agronomia">
            <img className="icon-img" src={init} alt="" />
            <img className="back-img" src={initSobre} alt="" />
          </div>
          <div className="trator">
            <img
              className="icon-img"
              src={tratorIcon}
              alt=""
            />
            <img className="back-img" src={imgSobre} alt="" />
          </div>
          <div className="pecuaria">
            <img
              className="icon-img"
              src={vacaIcon}
              alt=""
            />
            <img className="back-img" src={imgSobre3} alt="" />
          </div>
        </div>
      </section>

      <section className="container-sobre">
        <div className="sobre-text">
          <h3 className="sobre-title">
            Sobre a <span>AgroTech</span>
          </h3>
          <p className="sobre-intro">
            Mais do que uma plataforma agropecuária, estamos aqui para que você
            se sinta cada vez mais intregado ao mercado rural.
          </p>
          <p className="sobre-histo">
            A AgroTech é uma empresa fundada por uma família de agricultores
            preocupada com as mudanças negativas na agricultura ao longo dos
            anos. Inicialmente, a equipe era composta por apenas cinco pessoas,
            mas eles se dedicaram a desenvolver tecnologias inovadoras para
            ajudar os agricultores e pecuaristas a produzir alimentos de maneira
            mais eficiente e sustentável.
          </p>
        </div>
        <div className="sobre-img">
          <img src={sobreImg} alt="" />
        </div>
        <div className="separador">
          <img src={separador} alt="" />
        </div>
      </section>

      <section className="container-cultivo">
        <div className="cultivo-text">
          <h3 className="cultivo-title">
            <span>AgroTech</span> no Cultivo
          </h3>
          <div className="cultivo-list">
            <div className="list list-one">
              <span className="number">1</span>
              <p className="text">
                Nos preocupamos com a sustentabilidade ambiental na pecuária,
                buscando soluções que reduzam o consumo de recursos naturais.
              </p>
            </div>
            <div className="list list-two">
              <span className="number">2</span>
              <p className="text">
                Nos preocupamos com a sustentabilidade ambiental na pecuária,
                buscando soluções que reduzam o consumo de recursos naturais.
              </p>
            </div>
            <div className="list list-tree">
              <span className="number">3</span>
              <p className="text">
                Nos preocupamos com a sustentabilidade ambiental na pecuária,
                buscando soluções que reduzam o consumo de recursos naturais.
              </p>
            </div>
            <div className="list list-four">
              <span className="number">4</span>
              <p className="text">
                Nos preocupamos com a sustentabilidade ambiental na pecuária,
                buscando soluções que reduzam o consumo de recursos naturais.
              </p>
            </div>
            <div className="list list-five">
              <span className="number">5</span>
              <p className="text">
                Nos preocupamos com a sustentabilidade ambiental na pecuária,
                buscando soluções que reduzam o consumo de recursos naturais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="separador-left">
        <img src={separadorLeft} alt="" />
      </div>
      <section className="container-pecuaria">
        <div className="pecuaria-text">
          <h3 className="pecuaria-title">
            <span>AgroTech</span> no Pecuária
          </h3>
          <div className="pecuaria-list">
            <div className="list list-one">
              <span className="number">1</span>
              <p className="text">
                Nos preocupamos com a sustentabilidade ambiental na pecuária,
                buscando soluções que reduzam o consumo de recursos naturais.
              </p>
            </div>
            <div className="list list-two">
              <span className="number">2</span>
              <p className="text">
                Nos preocupamos com a sustentabilidade ambiental na pecuária,
                buscando soluções que reduzam o consumo de recursos naturais.
              </p>
            </div>
            <div className="list list-tree">
              <span className="number">3</span>
              <p className="text">
                Nos preocupamos com a sustentabilidade ambiental na pecuária,
                buscando soluções que reduzam o consumo de recursos naturais.
              </p>
            </div>
            <div className="list list-four">
              <span className="number">4</span>
              <p className="text">
                Nos preocupamos com a sustentabilidade ambiental na pecuária,
                buscando soluções que reduzam o consumo de recursos naturais.
              </p>
            </div>
            <div className="list list-five">
              <span className="number">5</span>
              <p className="text">
                Nos preocupamos com a sustentabilidade ambiental na pecuária,
                buscando soluções que reduzam o consumo de recursos naturais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;

import "./Home.css";
import init from "../../assets/home-init.png"
import wave from "../../assets/onda.png"
import descriImg from "../../assets/descri-img.png"
import planta from "../../assets/planta.png"
import vaca from "../../assets/vaca.png"
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <>
      <section className="container container-init">
        <div className="text">
          <h1 className="title">O setor que promove a economia do Brasil!</h1>
          <p className="subtitle-init">
            Sua plataforma digital Agro tem tudo num só lugar: agronegócio,
            pecuaria e mercado
          </p>
          <NavLink to="/register">
            <button className="btn-cadastro">Cadastre-se</button>
          </NavLink>
        </div>
        <div className="img-home-init">
          <img src={init} alt="lucas"/>
        </div>
        <div className="division-init">
          <img className="wave" src={wave} alt="Lucas"/>
        </div>
      </section>

      <section className="container container-descri">
        <div className="descri-text">
          <h3 className="subtitle">
            Nascemos do campo e evoluimos para atender sua fazenda de ponta a
            ponta
          </h3>
          <p className="text-descri">
            AgroTech é o aplicativo de gestão rural que já está presente na
            rotina de mais de 4.700 propriedades. Ele cruza dados agrícolas,
            pecuários e financeiros de maneira assertiva, ajudando você a tomar
            decisões mais rentáveis.
          </p>
        </div>
        <div className="descri-img">
          <img src={descriImg} alt="lucas"/>
        </div>
      </section>

      <section className="container container-gestao">
        <div className="gestao-title">
          <h3 className="subtitle-gestao">
            Informações sobre os mais <span>diversos métodos</span> de cultivo e
            gestão da sua fazenda em um só lugar!
          </h3>
          <p>Conheça nosso portifólio:</p>
        </div>
        <div className="gestao-img">
          <div className="card card-agronomia">
            <img src={planta} />
            <p className="card-title">Agronomia</p>
            <p className="card-text">
              sementes, culturas, insumos, e muito mais
            </p>
          </div>
          <div className="card card-pecuaria">
            <img src={vaca} />
            <p className="card-title">Pecuária</p>
            <p className="card-text">
              sementes, culturas, insumos, e muito mais
            </p>
          </div>
        </div>
      </section>

      <section className="container-five">
        <div className="five-title">
          <h3 className="subtitle-five">
            Informações sobre os mais <span>diversos métodos</span> de cultivo e
            gestão da sua fazenda em um só lugar!
          </h3>
          <p>Conheça nosso portifólio:</p>
        </div>
        <div className="five-img">
          <div className="card card-agronomia agro1">
            <img src={planta} />
            <p className="card-title">Agronomia</p>
            <p className="card-text">
              sementes, culturas, insumos, e muito mais
            </p>
          </div>
          <div className="card card-agronomia agro2">
            <img src={planta} />
            <p className="card-title">Agronomia</p>
            <p className="card-text">
              sementes, culturas, insumos, e muito mais
            </p>
          </div>
          <div className="card card-agronomia agro3">
            <img src={planta} />
            <p className="card-title">Agronomia</p>
            <p className="card-text">
              sementes, culturas, insumos, e muito mais
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

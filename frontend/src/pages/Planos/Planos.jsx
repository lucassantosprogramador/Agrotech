import "./Plano.css"
import divison from "../../assets/divisor.png"

const Planos = () => {
  return (
    <>
      <section className="container-planos">
        <div className="plano-init">
          <h1 className="init-title">Inscreva-se</h1>
          <img className="division-plano" src={divison} alt="divisor"/>
          <p className="init-descri">Conheça alguns dos planos disponíveis</p>
        </div>

        <div className="planos">
          <div className="plano-container plano-padrao">
            <h3 className="plano-title">Padrão</h3>
            <ul className="plano-list">
              <li>Previsão do tempo mais detallhada</li>
              <li>Alertas sobre o mercado</li>
              <li>Acesso a especialistas da agricultura através do suporte </li>
              <li>Previsão do tempo mais detalhada</li>
            </ul>

            <div className="plano-preco">
              <p>Até 12x de</p>
              <h1>R$ 39</h1>
              <p>à vista R$468</p>
              <button className="btn-comprar">Padrão</button>
            </div>
          </div>
          <div className="plano-container plano-mensal">
            <h3 className="plano-title">Mensal</h3>
            <ul className="plano-list">
              <li>Previsão do tempo mais detallhada</li>
              <li>Alertas sobre o mercado</li>
              <li>Acesso a especialistas da agricultura através do suporte </li>
              <li>Previsão do tempo mais detalhada</li>
            </ul>
            <div className="plano-preco">
              <p>Até 12x de</p>
              <h1>R$ 39</h1>
              <p>à vista R$468</p>
              <button className="btn-comprar">Assinar Mensal</button>
            </div>
          </div>
          <div className="plano-container plano-anual">
            <h3 className="plano-title">Anual</h3>
            <ul className="plano-list">
              <li>Previsão do tempo mais detallhada</li>
              <li>Alertas sobre o mercado</li>
              <li>Acesso a especialistas da agricultura através do suporte </li>
              <li>Previsão do tempo mais detalhada</li>
            </ul>
            <div className="plano-preco">
              <p>Até 12x de</p>
              <h1>R$ 120</h1>
              <p>à vista R$1440</p>
              <button className="btn-comprar">Assinar Anual</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Planos;

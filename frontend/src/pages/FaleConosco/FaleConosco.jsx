import "./FaleConosco.css";
import contatoImg from '../../assets/icon-contato.png'

const FaleConosco = () => {
  return (
    <>
      <section className="container-init-contato">
        <div className="init-contato">
          <img className="init-img-contato" src={contatoImg} alt="contato"/>
          <p className="subtitle-contato">Olá, como podemos ajudar?</p>
          <input
            type="text"
            name="text"
            className="input"
            placeholder="Digite aqui o que você procura?"
          />
        </div>
      </section>

      <section className="container-duvidas">
        <h3>Saiba mais...</h3>
        <h3 className="subtitle-duvidas">Esclareça suas dúvidas</h3>
      </section>
    </>
  );
};

export default FaleConosco;

import "./Auth.css";

//components
import { Link } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//redux
import { register, reset } from "../../slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Message from "../../components/Message";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user);

    dispatch(register(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <>
      <section className="container-cadastro">
        <div className="cadastro-text">
          <h1>
            Cadastre-se
            <p className="division"></p>
            <p>e saiba mais:</p>
          </h1>
          <form onSubmit={handleSubmit} className="cadastro-input"s>
            <input
              className="username-input inputs"
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name || ""}
            />
            <input
              className="email-input inputs"
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email || ""}
            />
            <input
              className="password-input inputs"
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""}
            />
            <input
              className="confirmPassword-input inputs"
              type="password"
              placeholder="Confirme sua senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword || ""}
            />
            
            <span className="span-login">
              Já tem uma conta?
              <Link to="/login">Clique aqui</Link>
            </span>
            {!loading && <input type="submit" className="btn-cadastrar" value="Cadastrar" />}
            {loading && <input type="submit" className="btn-cadastrar" value="Aguarde..." disabled />}
            {error && <Message msg={error} type="error" />}
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

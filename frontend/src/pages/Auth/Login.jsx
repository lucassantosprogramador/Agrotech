import "./Auth.css";
import { ToastContainer, toast } from "react-toastify";
import  imgLogin  from "../../assets/icon-cadastro.png";

//components
import { Link } from "react-router-dom";
import Message from "../../components/Message";

//hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//redux
import { login, reset } from "../../slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));

    if (password.length < 8) {
      toast.error(
        "A senha do usuário deve conter mais de 8 caracteres.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email é obrigatório", toastOptions);
      return false;
    }
    console.log(user);
    return false;
  };

  //clean input
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <>
      <section className="container-login">
        <div className="login-text">
          <h1>
            Login
            <p className="division"></p>
            <p>forneça seus dados:</p>
          </h1>
          <form onSubmit={(e) => handleSubmit(e)} className="login-input">
            <input
              className="username-input inputs"
              type="text"
              placeholder="Nome"
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
            <button type="submit" className="btn-login">
              Entrar
            </button>

            <span className="span-login">
              Não tem uma conta?
              <Link to="/register">Clique aqui</Link>
            </span>
          </form>
        </div>

        <div className="login-img">
          <img src={imgLogin} alt="img" />
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;

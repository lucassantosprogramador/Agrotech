import "./NavBar.css";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import userImg from "../assets/user.png";
import sairImg from "../assets/sair.png";
import configImg from "../assets/configuracao.png";

import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";

//redux
import { logout, reset } from "../slices/authSlice";

const Header = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

  return (
    <div>
      <header className="container-menu">
        <nav className="menu">
          <NavLink to="/">
            <img src={logo} className="logo"/>
          </NavLink>
          <ul className="nav-menu">
            {auth ? (
              <>
                <li>
                  <NavLink to="/publi">Publicação</NavLink>
                </li>
                <li>
                  <NavLink to="/faleConosco">Fale Conosco</NavLink>
                </li>
                {user && (
                  <li>
                    <NavLink to={`/users/${user._id}`}>
                      <img className="userimg" src={userImg} alt="User" />
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/profile">
                    <img className="userimg" src={configImg} alt="User" />
                  </NavLink>
                </li>
                <li>
                  <span onClick={handleLogout}>
                    <img className="userimg" src={sairImg} alt="User" />
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/planos">Planos</NavLink>
                </li>
                <li>
                  <NavLink to="/sobre">Sobre</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Cadastro</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

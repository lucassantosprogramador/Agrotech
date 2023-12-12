import "./App.css";

//router

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Register from "./pages/Auth/Register";
import Sobre from "./pages/Sobre/Sobre";
import Planos from "./pages/Planos/Planos";
import FaleConosco from "./pages/FaleConosco/FaleConosco";

//hooks
import { useAuth } from "./hooks/useAuth";
import EditProfile from "./pages/EditProfile/EditProfile";
import Profile from "./pages/Profile/Profile";
import Publi from "./pages/Publi/Publi";
function App() {
  const { auth, loading } = useAuth;

  if (loading) {
    return <p>Carregando</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faleConosco" element={<FaleConosco />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/publi" element={<Publi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

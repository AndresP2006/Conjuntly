import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Administrador from "../pages/administrador/Administrador";
import Porteria from "../pages/porteria/Porteria";
import Usuario from "../pages/usuarios/Usuario";
import Notificaciones from "../pages/notificaciones/Notificaciones";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      //Crear Usuario y recuperar contraseña
      <Route path="/CreateUser" element={"/"} />
      <Route path="/RecoverKey" element={"/"} />
      //Usuario
      <Route path="/Usuario" element={<Usuario />} />
      <Route path="/UserNotific" element={<Notificaciones />} />
      //Administrador
      <Route path="/Administrador" element={<Administrador />} />
      //Porteria
      <Route path="/Porteria" element={<Porteria />} />
    </Routes>
  );
}

export default AppRoutes;

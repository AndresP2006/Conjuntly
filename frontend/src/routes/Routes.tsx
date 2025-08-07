import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      //Crear Usuario y recuperar contraseña
      <Route path="/CreateUser" element={"/"} />
      <Route path="/RecoverKey" element={"/"} />
      //Usuario
      <Route path="/User" element={"/"} />
      <Route path="/UserNotific" element={"/"} />
      //Administrador
      <Route path="/Amind" element={"/"} />
    </Routes>
  );
}

export default AppRoutes;

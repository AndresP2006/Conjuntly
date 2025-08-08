import { useState, useEffect } from "react";

function HeaderAdmin() {
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const nombre = localStorage.getItem("usuario");
    if (nombre) setUsuario(nombre);
  }, []);
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-lg">Bienvenido, {usuario}</h1>
    </header>
  );
}

export default HeaderAdmin;

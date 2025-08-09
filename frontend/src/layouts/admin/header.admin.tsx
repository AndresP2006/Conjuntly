import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HeaderAdmin({ Titulo }: { Titulo: string }) {
  const [usuario, setUsuario] = useState("Usuario");
  const navigate = useNavigate();

  useEffect(() => {
    const nombre = localStorage.getItem("usuario");
    setUsuario(nombre && nombre.length > 0 ? nombre : "Usuario no encontrado");
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-4xl font-bold">{Titulo}</h1>

      <div className="flex items-center gap-6">
        <h2 className="text-lg font-bold">Bienvenido, {usuario}</h2>

        <button
          onClick={handleLogout}
          className="bg-red-700 rounded-2xl font-bold px-4 py-2 hover:bg-red-500 transition"
        >
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
}

export default HeaderAdmin;

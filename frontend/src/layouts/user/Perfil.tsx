import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

function ManiUser() {
  const [usuario, setUsuario] = useState("usuario");
  //   const navegate = useNavigate();

  useEffect(() => {
    const nombre = localStorage.getItem("usuario");
    setUsuario(nombre && nombre.length > 0 ? nombre : "Usuario no encontrado");
  }, []);
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg w-72 min-h-[600px]  flex flex-col gap-10 items-center">
      <div className="flex flex-col items-center">
        <img
          src="https://i.pinimg.com/736x/68/80/07/688007906b540c10e6a168eea8d223ee.jpg"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-2xl object-cover mb-6 shadow-md"
        />
        <h2 className="text-xl font-bold">{usuario}</h2>
        <p className="text-base text-gray-500 mb-8">Residente</p>
      </div>

      <button className="w-full cursor-pointer py-3 mb-3 rounded-2xl bg-yellow-200 hover:bg-yellow-300 font-medium transition-colors">
        Información
      </button>
      <button className="w-full py-3 mb-3 rounded-2xl bg-gray-200 hover:bg-gray-300 font-medium transition-colors cursor-pointer">
        Apartamento
      </button>
      <button className="w-full cursor-pointer py-3 rounded-2xl bg-gray-200 hover:bg-gray-300 font-medium transition-colors">
        Cerrar Sesión
      </button>
    </div>
  );
}

export default ManiUser;

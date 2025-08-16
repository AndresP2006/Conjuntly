import { useState, useEffect } from "react";
import httpService from "../../services/httpService";
import { Link } from "react-router";
import type { PersonaUsuarioAPI } from "../../@types/People";

const Roles = [
  { id: 1, rol: "Administrador" },
  { id: 2, rol: "Guardia" },
  { id: 3, rol: "Residente" },
];

// import { useNavigate } from "react-router-dom";

function ManiUser() {
  const [usuario, setUsuario] = useState("usuario");
  const [datos, setDatos] = useState<PersonaUsuarioAPI | null>(null);
  //   const navegate = useNavigate();

  async function MostrarDatosUsuario(usuario: string) {
    const { data } = await httpService.ResidenteUsuario(usuario);
    setDatos(data);
  }

  useEffect(() => {
    const nombre = localStorage.getItem("usuario");
    setUsuario(nombre && nombre.length > 0 ? nombre : "Usuario no encontrado");
    MostrarDatosUsuario(String(nombre));
  }, []);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg w-72 min-h-[600px]  flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center">
        <img
          src={datos?.Pe_Perfil}
          alt="Foto de perfil"
          className="w-50 h-60 rounded-2xl object-cover mb-6 shadow-md"
        />
        <h2 className="text-xl font-bold">{usuario}</h2>
        <p className="text-base text-gray-500 mb-8">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              datos?.Ro_id === 1
                ? "bg-purple-200 text-purple-800"
                : datos?.Ro_id === 2
                ? "bg-blue-200 text-blue-800"
                : "bg-green-200 text-green-800"
            }`}
          >
            {Roles.find((r) => r.id === datos?.Ro_id)?.rol}
          </span>
        </p>
      </div>

      <button className="w-full cursor-pointer py-3 mb-3 rounded-2xl bg-gray-300 hover:bg-gray-200 font-medium transition-colors">
        Información
      </button>
      <button className="w-full py-3 mb-3 rounded-2xl bg-gray-300 hover:bg-gray-200 font-medium transition-colors cursor-pointer">
        <Link to={"/Apartamento"}>Registrar Visitas</Link>
      </button>
      <button className="w-full cursor-pointer py-3 rounded-2xl bg-gray-300 hover:bg-red-200 font-medium transition-colors">
        <Link to={"/"}>Cerrar Sesión</Link>
      </button>
    </div>
  );
}

export default ManiUser;

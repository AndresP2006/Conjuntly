import React, { useState } from "react";
import { showSuccess, showAlert } from "../../utils/Alertas";
import Icons from "../../utils/Icons";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

function LoginForm() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [loading, setLoading] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const navegate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await authService.Login(usuario, contraseña);

      // Si llegamos aquí es porque todo salió bien
      showSuccess(data.message + " " + usuario);
      setUsuario("");
      setContraseña("");

      // Redirigir según rol
      if (data.usuario.Ro_id === 1) {
        navegate("/Administrador");
      } else if (data.usuario.Ro_id === 2) {
        navegate("/Porteria");
      } else if (data.usuario.Ro_id === 3) {
        navegate("/Usuario");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showAlert(error.message || "Ocurrió un error inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Imagen lateral */}
      <div className="w-full md:w-1/2">
        <img
          src="/src/assets/img/LoginForm.jpg"
          alt="Decoración moderna"
          className="w-full max-h-[400px] object-cover rounded-lg shadow-sm"
        />
      </div>

      {/* Formulario */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
          Inicio de Sesión
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usuario
            </label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative w-full">
            <input
              type={mostrar ? "text" : "password"}
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setMostrar(!mostrar)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500"
            >
              {mostrar ? <Icons.mostrar /> : <Icons.ocultar />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-medium transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                Cargando...
              </div>
            ) : (
              "Ingresar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

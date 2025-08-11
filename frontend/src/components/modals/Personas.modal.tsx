import Icons from "../../utils/Icons";
import Apartamentos from "../select/Apartamentos";
import type { Rol, PersonaData } from "../../@types/People";
import React, { useState, useEffect } from "react";
import httpService from "../../services/httpService";
import authService from "../../services/authService";
import { showSuccess, showError, showAlert } from "../../utils/Alertas";

type ModalFormProps = {
  onClose?: () => void;
  onSuccess?: () => void;
};

export default function PersonaModal({ onClose, onSuccess }: ModalFormProps) {
  const [mostrar, setMostrar] = useState(false);
  const [rol, setRol] = useState<Rol[]>([]);
  const [formPersona, setFormPersona] = useState({
    document: "",
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    apartamento: "",
    usuario: "",
    contraseña: "",
    rol: "",
  });

  useEffect(() => {
    async function Roles() {
      try {
        const roles = await httpService.Roles();
        setRol(roles);
      } catch (e) {
        console.error(e);
      }
    }
    Roles();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormPersona((prev) => ({ ...prev, [name]: value }));
  };
  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const persona: PersonaData = {
      Pe_id: Number(formPersona.document),
      Pe_nombre: formPersona.nombre,
      Pe_apellidos: formPersona.apellido,
      Pe_telefono: Number(formPersona.telefono || 0),
      Us_id: Number(formPersona.document),
      Ap_id: Number(formPersona.apartamento),
      usuario: {
        Us_id: Number(formPersona.document),
        Us_usuario: formPersona.usuario,
        Us_contrasena: formPersona.contraseña,
        Us_correo: formPersona.correo || undefined,
        Ro_id: Number(formPersona.rol),
        estado: "activo",
      },
    };

    try {
      const result = await authService.CraerPersona(persona);

      if (!result || !result.code) {
        showError("Respuesta inesperada del servidor");
        return;
      }

      switch (result.code) {
        case "USER_CREDENTIALS_MISSING":
        case "PERSON_CREDENTIALS_MISSING":
        case "USER_ALREADY_EXISTS":
        case "USER_CREATION_FAILED":
        case "PERSON_CREATION_FAILED":
          showAlert(result.message);
          break;

        case "SUCCESS":
          showSuccess(result.message);
          setMostrar(false);
          if (onSuccess) onSuccess(); // 🔹 Llama a la función de éxito
          onClose?.();
          break;

        default:
          showError("Error desconocido: " + result.message);
      }
    } catch (err) {
      showError("No se pudo crear: " + err);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-400/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-7 right-6 text-3xl text-gray-600 hover:text-red-900 cursor-pointer"
          aria-label="Cerrar modal"
        >
          <Icons.cerrar />
        </button>
        <h2 className="text-2xl font-bold mb-4">Formulario de Residente</h2>
        <form onSubmit={handelSubmit}>
          {/* DATOS DE RESIDENTE */}
          <fieldset className="border border-gray-300 p-4 flex rounded-md max-w-xl mx-auto">
            <legend className="px-2 font-semibold text-gray-700">
              Datos Residenciales
            </legend>

            <div className="flex w-full gap-6">
              <div className="flex flex-col gap-4 flex-grow">
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="document"
                      className="mb-1 font-medium text-gray-600"
                    >
                      Documento:
                    </label>
                    <input
                      type="text"
                      id="document"
                      name="document"
                      value={formPersona.document}
                      onChange={handleChange}
                      placeholder="Documento"
                      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="nombre"
                      className="mb-1 font-medium text-gray-600"
                    >
                      Nombre:
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formPersona.nombre}
                      onChange={handleChange}
                      placeholder="Nombre"
                      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>
                <div className="flex  gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="apellido"
                      className="mb-1 font-medium text-gray-600"
                    >
                      Apellido:
                    </label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      value={formPersona.apellido}
                      onChange={handleChange}
                      placeholder="Apellido"
                      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="telefono"
                      className="mb-1 font-medium text-gray-600"
                    >
                      Teléfono:
                    </label>
                    <input
                      type="text"
                      id="telefono"
                      name="telefono"
                      value={formPersona.telefono}
                      onChange={handleChange}
                      placeholder="Teléfono"
                      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="correo"
                      className="mb-1 font-medium text-gray-600"
                    >
                      Correo:
                    </label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formPersona.correo}
                      onChange={handleChange}
                      placeholder="Correo"
                      className="border w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>
              </div>

              {/* Columna derecha: botón foto */}
              <div className="flex items-center">
                <img src="/src/assets/img/perfil.jpg" alt="" />
              </div>
            </div>
          </fieldset>

          {/* DATOS DE APARTAMENTO */}
          <fieldset className="border border-gray-300 p-4 flex rounded-md max-w-xl mx-auto">
            <legend className="px-2 font-semibold text-gray-700">
              Apartamento
            </legend>
            <Apartamentos
              value={formPersona.apartamento}
              onchange={(aptoId: string) =>
                setFormPersona({ ...formPersona, apartamento: aptoId })
              }
            />
          </fieldset>

          {/* DATOS DE USUARIO */}
          <fieldset className="border border-gray-300 p-4 flex rounded-md max-w-xl mx-auto">
            <legend className="px-2 font-semibold text-gray-700">
              Datos de Usuario
            </legend>
            <div className="flex w-full gap-6">
              {/* Usuario */}
              <div className="flex flex-col w-1/3">
                <label
                  htmlFor="usuario"
                  className="mb-1 font-medium text-gray-600"
                >
                  Usuario:
                </label>
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  value={formPersona.usuario}
                  onChange={handleChange}
                  placeholder="Usuario"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Contraseña */}
              <div className="flex flex-col w-1/3">
                <label
                  htmlFor="contraseña"
                  className="mb-1 font-medium text-gray-600"
                >
                  Contraseña:
                </label>
                <div className="relative w-full">
                  <input
                    type={mostrar ? "text" : "password"}
                    id="contraseña"
                    name="contraseña"
                    value={formPersona.contraseña}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <button
                    type="button"
                    onClick={() => setMostrar(!mostrar)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500"
                  >
                    {mostrar ? <Icons.mostrar /> : <Icons.ocultar />}
                  </button>
                </div>
              </div>

              {/* Rol */}
              <div className="flex flex-col w-1/3">
                <label htmlFor="rol" className="mb-1 font-medium text-gray-600">
                  Rol:
                </label>
                <select
                  name="rol"
                  id="rol"
                  value={formPersona.rol}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option value="">Roles</option>
                  {rol.map((e, i) => (
                    <option key={i} value={e.Ro_id}>
                      {e.Ro_tipo}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          <div className="flex justify-center gap-4 mt-6">
            <button
              type="submit"
              className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

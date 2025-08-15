import { useState, useEffect } from "react";
import type { PersonaUsuarioAPI } from "../../@types/People";
import httpService from "../../services/httpService";
import Icons from "../../utils/Icons";

const Roles = [
  { id: 1, rol: "Administrador" },
  { id: 2, rol: "Guardia" },
  { id: 3, rol: "Residente" },
];

function Datos() {
  const [edit, setEdit] = useState(false);
  const [datos, setDatos] = useState<PersonaUsuarioAPI | null>(null);

  async function MostrarDatosUsuario(user: string) {
    const { data } = await httpService.ResidenteUsuario(user);
    setDatos(data);
  }

  function toggleEdit() {
    setEdit(!edit);
  }

  useEffect(() => {
    const nombre = localStorage.getItem("usuario");
    MostrarDatosUsuario(String(nombre));
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 flex-1 shadow">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Información Personal</h2>
        <span className="material-icons cursor-pointer text-3xl">
          {Icons.Notification()}
        </span>
      </div>

      {/* Grid con todos los campos */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Nombre</label>
          <input
            disabled={!edit}
            value={datos?.Pe_nombre || ""}
            onChange={(e) => setDatos({ ...datos!, Pe_nombre: e.target.value })}
            className={`rounded-xl p-2 w-full ${
              edit ? "bg-white border border-gray-300" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="font-semibold">Apellido</label>
          <input
            disabled={!edit}
            value={datos?.Pe_apellidos || ""}
            onChange={(e) =>
              setDatos({ ...datos!, Pe_apellidos: e.target.value })
            }
            className={`rounded-xl p-2 w-full ${
              edit ? "bg-white border border-gray-300" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="font-semibold">Correo</label>
          <input
            disabled={!edit}
            value={datos?.Us_correo || ""}
            onChange={(e) => setDatos({ ...datos!, Us_correo: e.target.value })}
            className={`rounded-xl p-2 w-full ${
              edit ? "bg-white border border-gray-300" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="font-semibold">Teléfono</label>
          <input
            disabled={!edit}
            value={datos?.Pe_telefono || ""}
            onChange={(e) =>
              setDatos({ ...datos!, Pe_telefono: e.target.value })
            }
            className={`rounded-xl p-2 w-full ${
              edit ? "bg-white border border-gray-300" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="font-semibold">Usuario</label>
          <input
            disabled={!edit}
            value={datos?.Us_usuario || ""}
            onChange={(e) =>
              setDatos({ ...datos!, Us_usuario: e.target.value })
            }
            className={`rounded-xl p-2 w-full ${
              edit ? "bg-white border border-gray-300" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="font-semibold">Rol</label>
          <select
            disabled={!edit}
            value={datos?.Ro_id || ""}
            onChange={(e) =>
              setDatos({ ...datos!, Ro_id: Number(e.target.value) })
            }
            className={`rounded-xl p-2 w-full ${
              edit ? "bg-white border border-gray-300" : "bg-gray-100"
            }`}
          >
            <option value="">Seleccione</option>
            {Roles.map((r) => (
              <option key={r.id} value={r.id}>
                {r.rol}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold">Documento</label>
          <input
            disabled={!edit}
            value={datos?.Pe_id || ""}
            className={`rounded-xl p-2 w-full ${
              edit ? "bg-white border border-gray-300" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="font-semibold">Apartamento</label>
          <input
            disabled={!edit}
            value={datos?.Ap_numero || ""}
            className={`rounded-xl p-2 w-full ${
              edit ? "bg-white border border-gray-300" : "bg-gray-100"
            }`}
          />
        </div>
      </div>

      {/* Botón */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={toggleEdit}
          className={`px-6 py-2 rounded-full border border-black transition-colors ${
            edit
              ? "bg-green-100 hover:bg-green-200"
              : "bg-yellow-100 hover:bg-yellow-200"
          }`}
        >
          {edit ? "Guardar" : "Editar"}
        </button>
      </div>
    </div>
  );
}

export default Datos;

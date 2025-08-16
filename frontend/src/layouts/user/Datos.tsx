import { useState, useEffect } from "react";
import type { PersonaUsuarioAPI } from "../../@types/People";
import httpService from "../../services/httpService";
import Icons from "../../utils/Icons";
import OpenModal from "../../components/boton/OpenModal";
import PersonaModal from "../../components/modals/Personas.modal";

const Roles = [
  { id: 1, rol: "Administrador" },
  { id: 2, rol: "Guardia" },
  { id: 3, rol: "Residente" },
];

interface Apartamento {
  Pe_id: number;
  Pe_nombre: string;
  Pe_apellidos: string;
  Pe_telefono: string;
  Ap_numero: number;
}
function Datos() {
  const [edit, setEdit] = useState(false);
  const [datos, setDatos] = useState<PersonaUsuarioAPI | null>(null);
  const [original, setOriginal] = useState<PersonaUsuarioAPI | null>(null);
  const [apartamento, setApartamento] = useState<Apartamento[]>([]);

  async function MostrarDatosUsuario(user: string) {
    const { data } = await httpService.ResidenteUsuario(user);
    setDatos(data);
    setOriginal(data);
  }

  function toggleEdit() {
    setEdit(!edit);
  }

  function CancelarEdit() {
    setDatos(original);
    setEdit(false);
  }

  async function ApartametnoResidente(torre: string) {
    const { data } = await httpService.ApartamentoResidentes(torre);
    setApartamento(data);
  }

  useEffect(() => {
    const nombre = localStorage.getItem("usuario");
    MostrarDatosUsuario(String(nombre));
  }, []);

  useEffect(() => {
    if (datos?.Ap_numero) {
      ApartametnoResidente(String(datos.Ap_numero));
    }
  }, [datos?.Ap_numero]);

  return (
    <div className="bg-white rounded-2xl p-6 flex-1 shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Información Personal</h2>
        <span className="material-icons cursor-pointer text-3xl">
          {Icons.Notification()}
        </span>
      </div>

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

      <div className="mt-6 flex justify-center gap-4">
        {edit ? (
          <>
            <button
              className={`px-6 py-2 rounded-full border font-bold border-black transition-colors ${
                edit
                  ? "bg-green-100 hover:bg-green-200"
                  : "bg-yellow-100 hover:bg-yellow-200"
              }`}
            >
              Enviar
            </button>
            <button
              onClick={CancelarEdit}
              className={`px-6 py-2 rounded-full border font-bold text-white border-black transition-colors bg-red-500 hover:bg-red-300`}
            >
              Cancelar
            </button>
          </>
        ) : (
          <button
            onClick={toggleEdit}
            className={`px-6 py-2 rounded-full border border-black transition-colors ${
              edit
                ? "bg-green-100 hover:bg-green-200"
                : "bg-yellow-100 hover:bg-yellow-200"
            }`}
          >
            Editar
          </button>
        )}
      </div>
      <h2 className="font-bold">Residentes del mismo apartamento</h2>
      <div className="mt-6 max-h-40 overflow-y-auto rounded-lg border border-gray-300">
        <table className="min-w-full border-collapse text-center">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="p-2 font-bold">Documento</th>
              <th className="p-2 font-bold">Nombre y Apellido</th>
              <th className="p-2 font-bold">Teléfono</th>
              <th className="p-2 font-bold">Apartamento</th>
              <th className="p-2 font-bold">Información</th>
            </tr>
          </thead>
          <tbody>
            {apartamento.map((i, e) => (
              <tr key={e} className="border-t">
                <td className="p-2">{i.Pe_id}</td>
                <td className="p-2">
                  {i.Pe_nombre} {i.Pe_apellidos}
                </td>
                <td className="p-2">{i.Pe_telefono}</td>
                <td className="p-2">{i.Ap_numero}</td>
                <td>
                  <OpenModal
                    clases="cursor-pointer hover:text-blue-300"
                    title="Mostrar"
                    icons={Icons.mostrar}
                    modal={<PersonaModal id={String(i.Pe_id)} />}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Datos;

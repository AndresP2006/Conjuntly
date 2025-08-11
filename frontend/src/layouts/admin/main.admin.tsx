import { useState, useEffect } from "react";
import OpenModal from "../../components/boton/OpenModal";
import httpService from "../../services/httpService";
import Icons from "../../utils/Icons";
import PersonaModal from "../../components/modals/Personas.modal";
import type { Rol, Dato } from "../../@types/People";

function MainContent() {
  const [datos, setDatos] = useState<Dato[]>([]);
  const [roles, setRoles] = useState<Rol[]>([]);
  const [filtroRol, setFiltroRol] = useState("#");
  const [buscar, setBuscar] = useState("");

  async function fectData() {
    try {
      const people = await httpService.Residentes();
      const rol = await httpService.Roles();
      setDatos(people);
      setRoles(rol);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fectData();
  }, []);
  const datosFiltrados = datos.filter((d) => {
    const coincideRol =
      filtroRol === "#" ||
      (filtroRol === "inactivo" && d.estado === "inactivo") ||
      String(d.Ro_tipo).toLowerCase() ===
        roles.find((r) => r.Ro_id === Number(filtroRol))?.Ro_tipo.toLowerCase();

    const coincideBusqueda =
      buscar.trim() === "" ||
      d.Pe_nombre.toLowerCase().includes(buscar.toLowerCase()) ||
      d.Pe_apellidos.toLowerCase().includes(buscar.toLowerCase()) ||
      d.Us_usuario.toLowerCase().includes(buscar.toLowerCase()) ||
      d.Us_correo.toLowerCase().includes(buscar.toLowerCase()) ||
      String(d.Pe_id).includes(buscar);

    return coincideRol && coincideBusqueda;
  });

  return (
    <div>
      <div className="p-3 flex items-center justify-between rounded-lg shadow-sm bg-white">
        <div className="flex items-center gap-3">
          {/* <img
            src="#"
            alt="Perfil"
            className="w-10 h-10 rounded-full border border-gray-300 object-cover"
          /> */}
          <h1 className="font-bold text-2xl text-gray-800">
            <Icons.usuario /> RESIDENTES
          </h1>
        </div>
        <div className="flex gap-3">
          <OpenModal
            texto="+"
            clases="bg-green-600 cursor-pointer hover:bg-green-700 active:scale-95 transition-all duration-200 font-bold text-2xl rounded-2xl px-5 py-2 text-white"
            title="Agregar Residente"
            modal={
              <PersonaModal
                onSuccess={() => {
                  fectData();
                }}
              />
            }
          />
          <div className="relative w-52">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full border rounded-2xl p-3 pl-10"
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Icons.buscar />
            </span>
          </div>
          <div>
            <select
              name="roles"
              id=""
              className="w-full border rounded-2xl p-3 pl-5"
              value={filtroRol}
              onChange={(e) => setFiltroRol(e.target.value)}
            >
              <option value="#">Roles</option>
              {roles.map((e, i) => (
                <option key={i} value={e.Ro_id}>
                  {e.Ro_tipo}
                </option>
              ))}
              <option value="inactivo">Inactivo</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="p-2 font-bold">DOCUMENTO</th>
              <th className="p-2 font-bold">NOMBRE</th>
              <th className="p-2 font-bold">APELLIDO</th>
              <th className="p-2 font-bold">CORREO</th>
              <th className="p-2 font-bold">ESTADO</th>
              <th className="p-2 font-bold">APARTAMENTO</th>
              <th className="p-2 font-bold">USUARIO</th>
              <th className="p-2 font-bold">CONTACTO</th>
              <th className="p-2 font-bold">Rol</th>
              <th className="p-2 font-bold">ACCION</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.length === 0 ? (
              <tr>
                <td colSpan={10} className="p-6 text-center">
                  <p className="bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded-xl shadow-md font-bold text-xl inline-block">
                    🚫 No se encontraron datos
                  </p>
                </td>
              </tr>
            ) : (
              datosFiltrados.map((e: Dato, i) => (
                <tr key={i}>
                  <td className="p-2">{e.Pe_id}</td>
                  <td className="p-2">{e.Pe_nombre}</td>
                  <td className="p-2">{e.Pe_apellidos}</td>
                  <td className="p-2 max-w-[150px] truncate">{e.Us_correo}</td>
                  <td
                    className={`p-2 font-bold ${
                      e.estado === "activo" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {e.estado}
                  </td>
                  <td className="p-2">{e.Ap_numero}</td>
                  <td className="p-2">{e.Us_usuario}</td>
                  <td className="p-2">{e.Pe_telefono}</td>
                  <td className="p-2">{e.Ro_tipo}</td>
                  <td>
                    <OpenModal
                      clases="cursor-pointer hover:text-blue-300"
                      title="Mostrar"
                      icons={Icons.mostrar}
                    />
                    <button className="cursor-pointer hover:text-red-300">
                      {<Icons.eliminar />}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainContent;

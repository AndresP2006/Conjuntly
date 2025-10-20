import Icons from "../../utils/Icons";

function RegistrosUsuario() {
  return (
    <div className="bg-white rounded-2xl p-6 flex-1 shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Registro de Visitas</h2>
        <span className="material-icons cursor-pointer text-3xl">
          {Icons.Notification()}
        </span>
      </div>
      {/* Iformacion de apartamento y torre  */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-bold text-xl">Torre</label>
          <input
            type="text"
            className="rounded-xl font-bold text-zinc-400 p-2 w-full bg-gray-100"
            disabled
            value={"A"}
          />
        </div>
        <div>
          <label className="font-bold text-xl">Apartamento</label>
          <input
            type="text"
            className="rounded-xl font-bold text-zinc-400 p-2 w-full bg-gray-100"
            disabled
            value={"100"}
          />
        </div>
      </div>
      {/* Tabla de registro */}
      <div>
        <div className="grid grid-cols-2 gap-4">
          <h2 className="font-bold mt-6">Permiso de visitas Registradas</h2>
          <button>{Icons.Habrir()}</button>
        </div>

        <div className="mt-2 max-h-40 overflow-y-auto rounded-lg border border-b-gray-300">
          <table className="min-w-full border-collapse text-center">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="p-2 font-bold">Documento</th>
                <th className="p-2 font-bold">Nombre y Apellido</th>
                <th className="p-2 font-bold">Teléfono</th>
                <th className="p-2 font-bold">Estado</th>
                <th className="p-2 font-bold">Información</th>
              </tr>
            </thead>
            <tbody>
              <tr>{/* Informacion  no terminada */}</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RegistrosUsuario;

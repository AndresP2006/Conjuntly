import SolicitudVisitas from "../../components/tablas/SolicitudVisitas";
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
      <br />
      <br />
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Permisos de Visitas</h2>
          <span className="material-icons cursor-pointer text-3xl border-2 bg-gray-300 ">
            {Icons.Habrir()}
          </span>
        </div>

        <SolicitudVisitas></SolicitudVisitas>
      </div>
    </div>
  );
}

export default RegistrosUsuario;

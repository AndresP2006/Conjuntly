import SolicitudVisitas from "../../components/tablas/SolicitudVisitas";

function ControlVisitas() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Controles de Visitas y Paquetes</h2>
      </div>

      <div className="grid grid-cols-2 gap-6 w-full ">
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Entregar Paquete</label>
          <div className="flex gap-3 w-full">
            <input
              type="text"
              className="rounded-xl p-2 flex-1 bg-white border border-gray-300 w-full"
              placeholder="Documento de residente"
            />
            <button className="bg-red-500 cursor-pointer text-white font-bold hover:bg-red-400 rounded-full px-6">
              BUSCAR
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full ">
          <label className="font-semibold">Salida de visitas</label>
          <div className="flex gap-3 w-full">
            <input
              type="text"
              className="rounded-xl p-2 flex-1 bg-white border border-gray-300 w-full"
              placeholder="Documento de Visitante"
            />
            <button className="bg-red-500 cursor-pointer text-white font-bold hover:bg-red-400 rounded-full px-6">
              SALIDA
            </button>
          </div>
        </div>
      </div>
      <br />
      <SolicitudVisitas />
    </div>
  );
}

export default ControlVisitas;

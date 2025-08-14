// import React from "react";

function Datos() {
  return (
    <div className="bg-white rounded-2xl p-6 flex-1 shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Información Personal</h2>
        <span className="material-icons cursor-pointer">notifications</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Nombre</label>
          <input
            value="Andres"
            disabled
            className="bg-gray-100 rounded-xl p-2 w-full"
          />
        </div>
        <div>
          <label className="font-semibold">Apellido</label>
          <input
            value="Pereira"
            disabled
            className="bg-gray-100 rounded-xl p-2 w-full"
          />
        </div>

        <div className="col-span-2">
          <label className="font-semibold">Correo</label>
          <input
            value="pereirapuelloandresdavid@gmail.com"
            disabled
            className="bg-gray-100 rounded-xl p-2 w-full"
          />
        </div>

        <div>
          <label className="font-semibold">Teléfono</label>
          <input
            value="3202116434"
            disabled
            className="bg-gray-100 rounded-xl p-2 w-full"
          />
        </div>
        <div>
          <label className="font-semibold">Usuario</label>
          <input
            value="Andres2006"
            disabled
            className="bg-gray-100 rounded-xl p-2 w-full"
          />
        </div>
      </div>

      <div className="mt-6">
        <button className="bg-yellow-100 px-6 py-2 rounded-full border border-black">
          Editar
        </button>
      </div>
    </div>
  );
}

export default Datos;

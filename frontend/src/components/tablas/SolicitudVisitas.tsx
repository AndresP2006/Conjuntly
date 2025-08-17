// import React from 'react'

function SolicitudVisitas() {
  return (
    <div className="mt-2 max-h-90 overflow-y-auto rounded-lg border border-gray-300">
      <table className="min-w-full border-collapse text-center">
        <thead className="bg-gray-100 sticky top-0">
          <tr>
            <th className="p-2 font-bold">Documento</th>
            <th className="p-2 font-bold">Nombre</th>
            <th className="p-2 font-bold">Apellido</th>
            <th className="p-2 font-bold">Fecha de entrada</th>
            <th className="p-2 font-bold">Hora de entrada</th>
            <th className="p-2 font-bold">Hora de salida</th>
            <th className="p-2 font-bold">Departamento</th>
            <th className="p-2 font-bold">Permitir</th>
          </tr>
        </thead>
        <tbody>{/* Datos de el residente */}</tbody>
      </table>
    </div>
  );
}

export default SolicitudVisitas;

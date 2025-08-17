import { useState, useEffect } from "react";
import httpService from "../../services/httpService";

function Contador() {
  const [conteo, setConteo] = useState("");

  async function ConatorVisitas() {
    const total = await httpService.ContadorVisitas();
    setConteo(total);
  }

  useEffect(() => {
    ConatorVisitas();
  }, []);
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg w-72 min-h-[600px] flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-4xl">Visitantes</h2>
        <br />
        <div className="w-50 h-60 rounded-2xl mb-6 shadow-md flex items-center justify-center bg-gray-100">
          <p className="text-9xl font-bold">{conteo}</p>
        </div>
      </div>
      <button className="w-full font-bold text-center cursor-pointer p-3 rounded-2xl bg-gray-300 hover:bg-red-200 transition-colors">
        + VISITAS
      </button>
      <button className="w-full cursor-pointer p-3 rounded-2xl bg-gray-300 hover:bg-red-200 font-bold text-center transition-colors">
        + PAQUETES
      </button>
    </div>
  );
}

export default Contador;

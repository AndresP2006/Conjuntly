import { useState, useEffect } from "react";
import httpService from "../../services/httpService";

interface Edificio {
  To_letra: string;
}

interface Apartamento {
  Ap_numero: number;
}

function Apartamentos() {
  const [torres, setTorres] = useState<Edificio[]>([]);
  const [torreSeleccionada, setTorreSeleccionada] = useState<string>("");
  const [apartamentos, setApartamentos] = useState<Apartamento[]>([]);
  const [apartamentoSeleccionado, setApartamentoSeleccionado] =
    useState<string>("");

  useEffect(() => {
    async function cargarTorres() {
      try {
        const res = await httpService.Torres();
        if (res && Array.isArray(res.data)) {
          setTorres(res.data);
        } else {
          console.error("Formato inesperado en torres:", res);
          setTorres([]);
        }
      } catch (error) {
        console.error("Error cargando torres:", error);
      }
    }
    cargarTorres();
  }, []);

  useEffect(() => {
    if (!torreSeleccionada) {
      setApartamentos([]);
      setApartamentoSeleccionado("");
      return;
    }
    async function cargarApartamentos() {
      try {
        const res = await httpService.Apartamento(torreSeleccionada);
        if (res && Array.isArray(res.data)) {
          setApartamentos(res.data);
          setApartamentoSeleccionado("");
        } else {
          console.error("Formato inesperado en apartamentos:", res);
          setApartamentos([]);
        }
      } catch (error) {
        console.error("Error cargando apartamentos:", error);
        setApartamentos([]);
      }
    }
    cargarApartamentos();
  }, [torreSeleccionada]);
  console.log(apartamentos);

  return (
    <div className="flex space-x-6 items-center">
      <div className="flex flex-col">
        <label htmlFor="select-torre" className="mb-1 font-semibold">
          Torres:
        </label>
        <select
          id="select-torre"
          value={torreSeleccionada}
          onChange={(e) => setTorreSeleccionada(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="">-- Seleccione --</option>
          {torres.map((t) => (
            <option key={t.To_letra} value={t.To_letra}>
              Torre {t.To_letra}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="select-apartamento" className="mb-1 font-semibold">
          Apartamentos:
        </label>
        <select
          id="select-apartamento"
          value={apartamentoSeleccionado}
          onChange={(e) => setApartamentoSeleccionado(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
          disabled={apartamentos.length === 0}
        >
          <option value="">-- Seleccione --</option>
          {apartamentos.map((a) => (
            <option key={a.Ap_numero} value={a.Ap_numero.toString()}>
              Apartamento {a.Ap_numero}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Apartamentos;

import { useState, useEffect } from "react";

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const FormatoHora = (fecha: Date) => {
    const hora = fecha.getHours().toString().padStart(2, "0");
    const minuto = fecha.getMinutes().toString().padStart(2, "0");
    const segundos = fecha.getSeconds().toString().padStart(2, "0");

    return (
      <p>
        {hora}:{minuto}:{segundos}
      </p>
    );
  };
  return (
    <button className="bg-amber-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-amber-300 transition">
      {FormatoHora(hora)}
    </button>
  );
}

export default Reloj;

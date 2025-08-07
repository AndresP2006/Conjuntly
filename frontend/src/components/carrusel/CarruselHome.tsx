import { useState, useEffect } from "react";

const imagenes = [
  "/src/assets/img/depa1.jpg",
  "/src/assets/img/depa2.jpg",
  "/src/assets/img/depa3.jpg",
];

function CarruselHome() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
      <img
        src={imagenes[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-64 object-cover transition duration-700 ease-in-out"
      />

      {/* Indicadores opcionales */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {imagenes.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarruselHome;

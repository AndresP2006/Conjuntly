import Reloj from "../components/Reloj/Reloj";

function HeaderHome() {
  return (
    <div className="relative bg-[url('/src/assets/img/HeaderHome.jpg')] bg-cover bg-center h-auto text-white rounded-b-lg p-6 overflow-hidden">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Contenido principal */}
      <div className="relative z-10 animate-fade-in">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-3xl">
              Control de <span className="text-amber-400">Acceso</span>
            </h1>
          </div>

          <ul className="flex gap-6 text-lg font-bold">
            <li className="hover:text-amber-400 cursor-pointer">HOGAR</li>
            <li className="hover:text-amber-400 cursor-pointer">NOSOTROS</li>
            <li className="hover:text-amber-400 cursor-pointer">CONTACTO</li>
          </ul>

          <div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-3xl hover:bg-red-400 cursor-pointer font-bold transition">
              Subscribe
            </button>
          </div>
        </nav>

        <div className="mt-12">
          <div className="flex gap-5 items-center">
            {/* Botón con ícono */}
            <button className="flex items-center gap-2 bg-amber-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-amber-300 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 17a1 1 0 01-1 1H6a1 1 0 01-1-1V6h6v11zM13 6h3a1 1 0 011 1v9a1 1 0 01-1 1h-3V6z" />
              </svg>
              Tecnología
            </button>
            <Reloj />
          </div>

          <div className="mt-8">
            <p className="text-white text-5xl font-serif max-w-4xl text-start">
              Donde termina el caos, comienza el conjunto.
            </p>
            <p className="text-white text-lg mt-2 font-light">
              Seguridad, lógica y estructura en cada acceso.
            </p>
          </div>
        </div>
      </div>

      {/* Animación CSS */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default HeaderHome;

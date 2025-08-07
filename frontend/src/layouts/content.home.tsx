import CarruselHome from "../components/carrusel/CarruselHome";
import LoginForm from "../components/Login/LoginForm";

function ContentHome() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      {/* Carrusel */}
      <div className="mb-10">
        <CarruselHome />
      </div>

      {/* Sección de bienvenida */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenido a tu espacio de desarrollo
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Aquí puedes probar ideas, mejorar tus proyectos y mantener todo
          organizado sin complicaciones.
        </p>
      </section>

      {/* Tarjetas con contenido */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Componentes útiles
          </h2>
          <p className="text-gray-500">
            Botones, tablas, formularios... todo lo que necesitas para armar tu
            interfaz sin reinventar la rueda.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Diseño claro
          </h2>
          <p className="text-gray-500">
            Estilos limpios con Tailwind, bien organizados y fáciles de
            mantener. Nada de enredos visuales.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Buen rendimiento
          </h2>
          <p className="text-gray-500">
            Código optimizado, carga rápida y estructura ordenada para que todo
            funcione sin dolores de cabeza.
          </p>
        </div>
      </section>
      <LoginForm />
    </div>
  );
}

export default ContentHome;

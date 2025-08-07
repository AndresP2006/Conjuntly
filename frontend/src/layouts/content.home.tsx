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
          CONTROL DE ACCESO
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Control de Acceso es una aplicación web moderna diseñada para
          gestionar y visualizar el acceso de usuarios a diferentes áreas o
          recursos dentro de un sistema. Construida con una arquitectura modular
          y un enfoque visualmente atractivo, la interfaz combina funcionalidad
          robusta con una experiencia de usuario intuitiva.
        </p>
      </section>

      {/* Tarjetas con contenido */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            ✨ Características principales
          </h2>
          <p className="text-gray-500 whitespace-pre-line text-justify">
            - Panel dinámico de usuarios con opciones para editar, eliminar,
            mostrar u ocultar accesos mediante íconos interactivos. <br /> -
            Diseño responsivo con efectos visuales como fondos en pixel art,
            overlays y transiciones suaves que enriquecen la experiencia. <br />{" "}
            - Gestión de roles y permisos con validación de autenticación y
            rutas protegidas.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            🧰 Tecnologías utilizadas
          </h2>
          <p className="text-gray-500 whitespace-pre-line text-justify">
            - React + TypeScript para una UI declarativa y tipada. <br /> -
            Tailwind CSS para estilos rápidos y consistentes. <br /> -
            Express.js en el backend para manejo de sesiones, autenticación y
            APIs. <br /> - Font Awesome para íconos semánticos y visuales.{" "}
            <br /> - React Router con layouts limpios y rutas protegidas.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            🎯 Objetivo
          </h2>
          <p className="text-gray-500 whitespace-pre-line text-justify">
            Ofrecer una solución elegante y eficiente para controlar el acceso
            de usuarios, combinando seguridad, claridad visual y facilidad de
            uso. <br /> Ideal para entornos administrativos, educativos o
            empresariales donde la gestión de permisos es clave. <br /> Código
            optimizado, carga rápida y estructura ordenada para que todo
            funcione sin dolores de cabeza.
          </p>
        </div>
      </section>
      <LoginForm />
    </div>
  );
}

export default ContentHome;

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-9xl font-extrabold text-yellow-400 drop-shadow-lg">
        404
      </h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        Página no encontrada
      </h2>
      <p className="mt-2 text-lg text-gray-600 text-center max-w-md">
        Lo sentimos, la página que buscas no existe o fue movida.
      </p>

      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg transition-all duration-200"
      >
        Volver al inicio
      </a>
    </div>
  );
}

export default NotFound;

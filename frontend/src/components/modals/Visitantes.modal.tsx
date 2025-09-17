import Icons from "../../utils/Icons";

type ModalFormVisita = {
  onClose?: () => void;
  onSuccess?: () => void;
};

function VisitantesModal({ onClose }: ModalFormVisita) {
  return (
    <div
      className="fixed inset-0 bg-gray-400/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-7 right-6 text-3xl text-gray-600 hover:text-red-900 cursor-pointer"
          aria-label="Cerrar modal"
        >
          <Icons.cerrar />
        </button>
        <h2 className="text-2xl font-bold mb-4">Ingreso de Visitantes</h2>
        <form>
          {/* DATOS DE VISITANTE */}
          <fieldset className="border border-black p-4 flex rounded-md max-w-xl mx-auto">
            <legend className="px-2 font-semibold text-gray-700">
              Datos de Visitante
            </legend>
            <div className="flex w-full gap-6">
              <div className="flex flex-col gap-4 flex-grow">
                <div className="flex gap-4 ">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="document"
                      className="mb-1 font-medium text-gray-600"
                    >
                      Documento
                    </label>
                    <input
                      type="text"
                      id="document"
                      name="document"
                      placeholder="Documento"
                      className="border w-64 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="nombre"
                      className="mb-1 font-medium text-gray-600"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre"
                      className="border w-67 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>
                <div className="flex  gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="apellido"
                      className="mb-1 font-medium text-gray-600"
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      placeholder="Apellido"
                      className="border w-64 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="telefono"
                      className="mb-1 font-medium text-gray-600"
                    >
                      Teléfono
                    </label>
                    <input
                      type="text"
                      id="telefono"
                      name="telefono"
                      placeholder="Teléfono"
                      className="border w-67 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>
                <div className="flex gap-4 "></div>
              </div>
            </div>
          </fieldset>

          {/* MOTIVOS DE VISITAS  */}
          <fieldset className="border border-black p-4 flex rounded-md max-w-xl mx-auto">
            <legend className="px-2 font-semibold text-gray-700">
              Motivos de visitas
            </legend>
            <div className="flex flex-col w-full">
              <label
                htmlFor="motivo"
                className="mb-1 font-medium text-gray-600"
              >
                Motivos
              </label>
              <textarea
                id="motivo"
                name="motivo"
                placeholder="Motivo de Visita"
                className="border w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
          </fieldset>

          {/* DATOS DE APARTAMENTO */}
          <fieldset className="border border-black p-4 flex rounded-md max-w-xl mx-auto">
            <legend className="px-2 font-semibold text-gray-700">
              Apartamento
            </legend>
          </fieldset>

          {/* DATOS DE USUARIO */}
        </form>
      </div>
    </div>
  );
}

export default VisitantesModal;

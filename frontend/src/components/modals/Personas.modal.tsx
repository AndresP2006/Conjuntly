import Icons from "../../utils/Icons";
import Apartamentos from "../select/Apartamentos";

// import React, { useState } from "react";

type ModalFormProps = {
  onClose?: () => void;
};

export default function PersonaModal({ onClose }: ModalFormProps) {
  //   const [formPersona, setFormPersona] = useState({});
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
        <h2 className="text-2xl font-bold mb-4">Formulario de Residente</h2>
        <form action="">
          <fieldset className="border border-gray-300 p-4 flex rounded-md max-w-xl mx-auto">
            <legend className="px-2 font-semibold text-gray-700">
              Datos Residenciales
            </legend>

            <div className="flex w-full gap-6">
              {/* Columna izquierda: inputs en columna */}
              <div className="flex flex-col gap-4 flex-grow">
                <div className="flex flex-col">
                  <label
                    htmlFor="documento"
                    className="mb-1 font-medium text-gray-600"
                  >
                    Documento:
                  </label>
                  <input
                    type="text"
                    id="documento"
                    name="documento"
                    placeholder="Documento"
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div className="flex  gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="nombre"
                      className="mb-1 font-medium text-gray-600"
                    >
                      Nombre:
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre"
                      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="nombre"
                      className="mb-1 font-medium text-gray-600"
                    >
                      Apellido:
                    </label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      placeholder="Apellido"
                      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>
              </div>

              {/* Columna derecha: botón foto */}
              <div className="flex items-center">
                <label
                  htmlFor="file-input"
                  className="cursor-pointer text-center font-bold"
                >
                  {"Fotografia"}
                  <div className="bg-orange-500 rounded-full p-4 hover:bg-orange-600 transition text-3xl text-white flex items-center justify-center">
                    <Icons.foto />
                  </div>
                </label>
                <input type="file" id="file-input" className="hidden" />
              </div>
            </div>
          </fieldset>
          <fieldset className="border border-gray-300 p-4 flex rounded-md max-w-xl mx-auto">
            <legend className="px-2 font-semibold text-gray-700">
              Datos de Usuario
            </legend>
            <Apartamentos />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

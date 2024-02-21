import React from 'react';
import { SiXdadevelopers } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import FontAndBackend from "./../../../assets/back and front.png";
import Studio from "./../../../assets/estudio.jpg";
import "./BackFront.css";

const BackFront = () => {
  return (
    <>
      <section className="pb-20 bg-gray-800 -mt-24 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mt-32 pt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-500"
              >
                <span className='img-developer'><MdDeveloperMode /></span>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Lenguajes del Frontend y del Backend
              </h3>
              <p
                className="text-lg font-light leading-relaxed mt-4 mb-4 text-white"
              >
                Son esenciales en el desarrollo de software. En el Frontend, herramientas como HTML, CSS y JavaScript permiten la creación de interfaces de usuario interactivas y atractivas. En el Backend, lenguajes como Python, Java o Node.js gestionan la lógica y la interacción con la base de datos, garantizando un funcionamiento fluido y eficiente del sistema.
              </p>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-900"
              >
                <img
                  alt="..."
                  src={FontAndBackend}
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 bottom-component"
        >
        </div>
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src={Studio}
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div
                  className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-500 mt-3"
                >
                  <span className='img-developer'><SiXdadevelopers /></span>
                </div>
                <h3 className="text-3xl font-semibold">FrontEnd/BackEnd</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  No existe una sola diferencia entre el desarrollo del backend y el frontend, sino una serie de tecnologías, herramientas utilizadas, habilidades requeridas y lenguajes implementados que los hacen totalmente independientes entre sí. Por supuesto, trabajan juntos para obtener el mismo producto final: un sitio web o una aplicación web; sin embargo, eso descarta las complejidades que entrañan los procesos de desarrollo del backend y del frontend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BackFront;

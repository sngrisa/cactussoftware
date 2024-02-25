import React from 'react';
import "./Functions.css";
import Feature from './feature/Feature';
import { SiStudyverse } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { GiWorld } from "react-icons/gi";

const Functions = () => {

  let features =
    [
      {
        id: 1,
        title: "Estudio",
        desc: "La tecnología se está humanizando desde su diseño y las empresas que estén preparadas para ello serán las que tengan éxito en el futuro.",
        icon: <SiStudyverse />
      },
      {
        id: 2,
        title: "Visión",
        desc: "La armonía entre las personas, la tecnología y las empresas está sometida a presiones que generan cambios en la sociedad.",
        icon: <FaEye />
      },
      {
        id: 3,
        title: "Proyectos",
        desc: "La disrupción desafía la gestión del riesgo y la resiliencia en la transformación acelerada de las organizaciones.",
        icon: <GrProjects />
      },
    ];

  return (
    <>
      <div className="feature-1 py-6 md:py-12 bg-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex -mx-4">
            <div className="px-4 text-center md:w-10/12 xl:w-8/12 mx-auto">
              <h1 className="mb-4 text-3xl font-medium">Visión, Pasión y Compromiso</h1>
              <p className="mb-4 text-xl">Cactus Software nació de la necesidad de fusionar la excelencia tecnológica con la creatividad sin límites. Este espacio se concibió como un ecosistema donde desarrolladores, innovadores y entusiastas de la tecnología pueden colaborar, aprender y crear juntos.</p>
            </div>
          </div>

          <div className="md:flex md:-mx-4 mt-12 md:pt-4">
            {
              features.map((feature) => {
                return (<Feature cardDetails={feature} key={feature.id} />)
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Functions;

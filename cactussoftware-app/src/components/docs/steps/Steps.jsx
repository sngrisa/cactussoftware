import React from 'react';
import "./Steps.css";
import Step from './step/Step';
import Planning from "./../../../assets/card_dash/plan.jpg";
import Despliege from "./../../../assets/card_dash/despliege.jpg";
import Mantenimiento from "./../../../assets/card_dash/mantenimiento.jpg";
import Pruebas from "./../../../assets/card_dash/pruebas.png";
import Desarrollo from "./../../../assets/card_dash/desarrollo.png";


const Steps = () => {

  let steps =
    [
      {
        id: 1,
        title: "Planificación",
        items: [
          "Definición de objetivos, requisitos y el alcance",
          "Estimación de recursos y de los plazos."
        ],
        img: Planning
      },
      {
        id: 2,
        title: "Desarrollo",
        items: [
          "Escritura del código y aplicación de las funcionalidades.",
          "Uso de metodologías ágiles o enfoques iterativos."
        ],
        img: Desarrollo
      },
      {
        id: 3,
        title: "Pruebas",
        items: [
          "Verificación y corrección de errores.",
          "Evaluación del sistema completo para garantizar que cumple con los requisitos."
        ],
        img: Pruebas
      },
      {
        id: 4,
        title: "Despliege",
        items: [
          "Preparación de la infraestructura de producción.",
          "Implementación del software en el entorno de producción."
        ],
        img: Despliege
      },
      {
        id: 5,
        title: "Mantenimiento",
        items: [
          "Monitoreo, corrección de errores y soporte continuo.",
          "Corrección de errores y lanzamiento de actualizaciones."
        ],
        img: Mantenimiento
      },
    ];

  return (
    <>
      <div className='bg-gray-800'>
        <div className="container container-steps text-white">
          <h1 className="h1-large mb-5 mt-30 text-white">Implementación </h1>
          <p className="p-large mb-8">Un proyecto de desarrollo de software implica varias fases clave para garantizar el éxito y la entrega de un producto funcional y de calidad. Aquí están las fases comunes en el ciclo de vida de implementación de software</p>
        </div>
        <div className="cards-1">
          <div className="container px-4 sm:px-8 xl:px-4">
            {
              steps.map((step, idx) => {
                return (<Step key={idx} cardDetails={step} />)
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Steps;

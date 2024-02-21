import React from 'react';
import "./Techs.css";
import Tech from './tech/Tech';
import { DiJava } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaAngular } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { SiDotnet } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";

const Techs = () => {
  let database =
    [
      {
        id: 1,
        title: "Mysql",
        desc: "Es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos de código abierto más popular del mundo,",
        imgUrl: <SiMysql />
      },
      {
        id: 2,
        title: "PostgreSQL",
        desc: "Es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto, publicado bajo la licencia PostgreSQL,​ similar a la BSD o la MIT.",
        imgUrl: <BiLogoPostgresql />
      },
      {
        id: 3,
        title: "Mongo DB",
        desc: "Es un sistema de base de datos NoSQL, orientado a documentos y de código abierto, adecuada para su uso en producción y con múltiples funcionalidades.",
        imgUrl: <SiMongodb />
      }
    ];
  let frameworks =
    [
      {
        id: 1,
        title: "Angular",
        desc: "Es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.",
        imgUrl: <FaAngular />
      },
      {
        id: 2,
        title: "React",
        desc: "Es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.",
        imgUrl: <FaReact />
      },
      {
        id: 3,
        title: "Vue.js",
        desc: "Es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página.",
        imgUrl: <FaVuejs />
      },
      {
        id: 4,
        title: "Spring Boot",
        desc: "Es un framework para el desarrollo de aplicaciones y contenedor de inversión de control, de código abierto para la plataforma Java.",
        imgUrl: <SiSpring />
      },
      {
        id: 5,
        title: "Laravel",
        desc: "Es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5, PHP 7 y PHP 8. Su filosofía es desarrollar código PHP de forma elegante y simple, evitando el 'código espagueti'",
        imgUrl: <TbBrandLaravel />
      },
      {
        id: 6,
        title: "Django",
        desc: "Es un framework de desarrollo web de código abierto, escrito en Python, que respeta el patrón de diseño conocido como modelo–vista–controlador (MVC).",
        imgUrl: <DiDjango />
      },
      {
        id: 7,
        title: ".NET Framework",
        desc: "Es un framework de Microsoft que hace un énfasis en la transparencia de redes, con independencia de plataforma de hardware y que permite un rápido desarrollo de aplicaciones.",
        imgUrl: <SiDotnet />
      },
      {
        id: 8,
        title: "Express.js",
        desc: "Es un entorno de trabajo para aplicaciones web para el programario Node.js, de código abierto y con licencia MIT. Se utiliza para desarrollar aplicaciones web y APIs.",
        imgUrl: <SiExpress />
      },
    ];

  let programmingLanguages =
    [
      {
        id: 1,
        title: "Java",
        desc: "Es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems. Su sintaxis deriva en gran medida de C y C++, pero tiene menos utilidades de bajo nivel que cualquiera de ellos.",
        imgUrl: <DiJava />
      },
      {
        id: 2,
        title: "JavaScript",
        desc: "Es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.",
        imgUrl: <DiJavascript1 />
      },
      {
        id: 3,
        title: "TypeScript",
        desc: "Es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.",
        imgUrl: <BiLogoTypescript />
      },
      {
        id: 4,
        title: "Python",
        desc: "Es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código. Es un lenguaje interpretado, dinámico y multiplataforma.",
        imgUrl: <FaPython />
      },
    ];
  return (
    <>
      <div className='bg-gray-800'>
        <div className="container container-steps text-white">
          <h1 className="h1-large mb-5 mt-30 text-white">Lenguajes de programación </h1>
          <p className="p-large mb-8">Un lenguaje con reglas gramaticales bien definidas que proporciona a una persona, en este caso el programador, la capacidad y habilidad de escribir (o programar) una serie de instrucciones o secuencias de órdenes en forma de algoritmos con el fin de controlar el comportamiento físico o lógico de un sistema informático, para que de esa manera se puedan obtener diversas clases de datos o ejecutar determinadas tareas. A todo este conjunto de órdenes escritas mediante un lenguaje de programación se le denomina programa informático.</p>
        </div>
        <div className="cards-1">
          <div className="container px-4 sm:px-8 xl:px-4">
            {
              programmingLanguages.map((techCard, idx) => {
                return (<Tech key={idx} cardDetails={techCard} />)
              })
            }
          </div>
        </div>
        <div className="container text-white text-center">
          <h1 className="h1-large mb-2 text-white">Frameworks </h1>
          <p className="p-large mb-8"> Es una estructura conceptual y tecnológica de asistencia definida, normalmente, con artefactos o módulos concretos de software, que puede servir de base para la organización y desarrollo de software. Típicamente, puede incluir soporte de programas, bibliotecas, y un lenguaje interpretado, entre otras herramientas, para así ayudar a desarrollar y unir los diferentes componentes de un proyecto.</p>
        </div>
        <div className="cards-1">
          <div className="container px-4 sm:px-8 xl:px-4">
            {
              frameworks.map((techCard, idx) => {
                return (<Tech key={idx} cardDetails={techCard} />)
              })
            }
          </div>
        </div>
        <div className="container text-white text-center">
          <h1 className="h1-large mb-2 text-white">Base de datos </h1>
          <p className="p-large mb-8">Es un conjunto de datos estructurados que pertenecen a un mismo contexto y, en cuanto a su función, se utiliza para administrar de forma electrónica grandes cantidades de información.</p>
        </div>
        <div className="cards-1">
          <div className="container px-4 sm:px-8 xl:px-4">
            {
              database.map((techCard, idx) => {
                return (<Tech key={idx} cardDetails={techCard} />)
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Techs;

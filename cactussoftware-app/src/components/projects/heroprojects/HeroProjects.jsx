import React from 'react';
import "./HeroProjects.css";

const HeroProjects = () => {
  return (
    <>
      <section className="relative pt-10 background-projects">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-10">
            <div className="text-center pb-12 md:pb-16">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Sumérgete en un mundo de código y diseño, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">donde cada línea escrita es un paso hacia el futuro. </span></h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-white mb-8" data-aos="zoom-y-out" data-aos-delay="150">En esta sección encontrarás una selección cuidadosamente curada de proyectos que representan nuestra pasión por la excelencia técnica y la satisfacción del cliente. Cada proyecto es más que una simple pieza de software; es el resultado de un proceso creativo que fusiona la visión con la habilidad técnica.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroProjects

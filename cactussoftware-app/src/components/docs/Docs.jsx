import React from "react";
import "./Docs.css";
import Cards from "./cards/Cards";
import { LuBringToFront } from "react-icons/lu";
import { IoFootsteps } from "react-icons/io5";
import { GiTechnoHeart } from "react-icons/gi";

const Docs = () => {
  let cards =
    [
      {
        id: 1,
        title: "Backend y Front-end",
        desc: "Conceptos del desarrollo de ambas caras de una aplicación web",
        url: "/backfront",
        icon: <LuBringToFront />,
      },
      {
        id: 2,
        title: "Implementación",
        desc: "Pasos para la implementación de un proyecto de desarrollo",
        url: "/steps",
        icon: <IoFootsteps />,
      },
      {
        id: 3,
        title: "Conceptos",
        desc: "Conceptos y ejemplos de las herramientas más implementadas al dia de hoy",
        url: "/tech",
        icon: <GiTechnoHeart />,
      }
    ]
  return (
    <>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-height">
        <div className="absolute top-0 w-full h-full bg-center bg-cover background-docs">
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  <div className='p-1 text-5xl text-center text-white'>Dev<span className='text-blue-500 font-extrabold'>Hub</span> </div>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Centro de información
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden height-page">
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {
              cards.map((infoCard, idx) => {
                return (<Cards key={idx} infoCard={infoCard} />)
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Docs;

import React from 'react';
import Member from './member/Member';
import BrianGalli from "./../../../assets/foto.jpg";
import SantiagoGrisa from "./../../../assets/foto2.jpg";
import AgustinGalli from "./../../../assets/foto3.jpg";
import DanielParra from "./../../../assets/foto4.jpg";
import Anonimus from "./../../../assets/foto5.jpg";
import JohnatanJara from "./../../../assets/foto6.jpg";
import IaraSelene from "./../../../assets/foto7.jpg";

const Team = () => {
  let members =
    [
      {
        id: 1,
        name: "Brian Galli",
        work: "Presidente e Ingeniero de Software",
        imgMember: BrianGalli,
        email: "briangalli1993@gmail.com",
        likenid: "https://ar.linkedin.com/in/briangalli-dev",
      },
      {
        id: 2,
        name: "Santiago Nicolás Grisafi",
        work: "Desarrollador Full Stack",
        imgMember: SantiagoGrisa,
        email: "santiagongrisafi@gmail.com",
        likenid: "https://www.linkedin.com/in/santiago-grisafi/",
      },
      {
        id: 3,
        name: "Agustín Galli",
        work: "Director ejecutivo - Ciberseguridad",
        imgMember: AgustinGalli,
        email: "",
        likenid: "",
      },
      {
        id: 4,
        name: "Daniel Parra",
        work: "Infraestructura",
        imgMember: DanielParra,
        email: "",
        likenid: "",
      },
      {
        id: 5,
        name: "Johnatan Jara",
        work: "Director de Operaciones",
        imgMember: JohnatanJara,
        email: "",
        likenid: "",
      },
      /* {
          id: 6,
          name: "Lucas Ayala",
          work: "Vicepresidente de producción",
          imgMember: Anonimus,
          email: "",
          likenid: "",
      },
      {
          id: 7,
          name: "Marcelo Alcorde",
          work: "Estratega Seo",
          imgMember: Anonimus,
          email: "",
          likenid: "",
      },
      {
          id: 8,
          name: "Marcelo Bettini",
          work: "Diseñador - Desarrollador",
          imgMember: Anonimus,
          email: "",
          likenid: "",
      }, */
      {
        id: 9,
        name: "Iara Selene",
        work: "Desarrolladora de Contenido",
        imgMember: IaraSelene,
        email: "",
        likenid: "",
      },
    ]
  return (
    <>
      <section
        id="team"
        className="overflow-hidden bg-gray-800 pb-12 pt-20  lg:pb-[90px] lg:pt-[120px]"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Nuestro equipo de trabajo
                </span>
                <h2
                  className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px]"
                >
                  Acerca del Equipo de Trabajo
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  ¡Bienvenido a nuestro equipo! En Cactus Software, creemos firmemente en el poder de la colaboración y el trabajo en equipo para alcanzar grandes metas. Aquí en esta página, queremos presentarte a las personas que hacen posible nuestro éxito y compartir un poco sobre quiénes somos.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">
            {
              members.map((member) => {
                return (<Member member={member} key={member.id} />)
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Team;

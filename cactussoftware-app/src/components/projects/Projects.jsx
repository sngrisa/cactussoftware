import React from 'react';
import "./Projects.css";
import HeroProjects from './heroprojects/HeroProjects';
import ProjectDejavu from './projectDejavu/ProjectDejavu';
import AstraGames from './astraGames/AstraGames';
import CoinCactus from './coinCactus/CoinCactus';
import ScreenFilm from './screenFilm/ScreenFilm';

const Projects = () => {
  let projects =
    [
      {
        id: 1,
        title: "Dejavu",
        desc: "Es un framework de código abierto que facilita la creación de sitios web receptivos y estilizados. Proporciona un sistema de rejilla flexible, componentes prediseñados y soporte para JavaScript, permitiendo a los desarrolladores crear interfaces de usuario modernas de manera rápida y sencilla.",
      },
      {
        id: 2,
        title: "Astra Games",
        desc: "Sumérgete en un mundo lleno de aventuras, desafíos y entretenimiento sin límites. Desde juegos clásicos hasta las últimas novedades en la industria, nuestra plataforma ofrece una amplia selección de títulos para jugadores de todas las edades y gustos.",
      },
      {
        id: 3,
        title: "Moneda Cactus",
        desc: "Bienvenido a nuestra plataforma de criptomonedas, donde la revolución financiera está al alcance de tu mano.Nuestra plataforma te ofrece acceso a un mundo de oportunidades financieras descentralizadas, donde puedes comprar, vender e intercambiar una amplia variedad de criptomonedas con facilidad y seguridad.",
      },
      {
        id: 4,
        title: "ScreenFilm",
        desc: "Descubre ScreenFilm: Tu destino para series, películas y desarrollo cinematográfico. Sumérgete en un mundo de entretenimiento sin límites. ¡Bienvenido a donde el cine cobra vida!",
      },
    ];
  return (
    <>
      <HeroProjects />
      <ProjectDejavu dejavuProject={projects[0]} />
      <AstraGames astraGames={projects[1]} />
      <CoinCactus coinBase={projects[2]} />
      <ScreenFilm ScreenFilm={projects[3]} />
    </>
  )
}

export default Projects;

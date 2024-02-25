import React from 'react';
import "./News.css";
import NewCard from './new/New';
import Angular from "./../../../assets/angular_17.png";
import Flutter from "./../../../assets/flutter.png";
import Next from "./../../../assets/next.png";


const News = () => {
  let newsArray =
    [
      {
        id: 1,
        title: "Flutter y la revolucion de desarrollo de Aplicaciones Móviles!",
        imgUrl: Flutter,
        desc: "Con una combinación única de rendimiento, versatilidad y estética atractiva, Flutter continúa redefiniendo las expectativas en la creación de experiencias móviles de alta calidad.",
        date: "30/03/2023",
      },
      {
        id: 2,
        title: "El nuevo marco de Angular 17!",
        imgUrl: Angular,
        desc: "Con mejoras substanciales y nuevas características, Angular 17 promete impulsar aún más la eficiencia y la calidad en el desarrollo de aplicaciones web.",
        date: "02/04/2023",
      },
      {
        id: 3,
        title: "Algunas cosas sobre Next.js!",
        imgUrl: Next,
        desc: "Next.js ha redefinido el paradigma del desarrollo web React al ofrecer una combinación única de simplicidad y potencia.",
        date: "21/05/2023",
      },
    ]
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-gray-800 lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary text-gray-300">
                  Novedades
                </span>
                <h2
                  className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
                >
                  Últimas noticias
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Las últimas noticias referidas al mundo del desarrollo
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {
              newsArray.map((newCard, idx) => {
                return (<NewCard newCard={newCard} key={idx} />)
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default News;

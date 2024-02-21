import React from 'react';
import "./Cards.css";

const Cards = ({ infoCard }) => {
  return (
    <>
      <div className="w-full md:w-4/12 px-4 text-center card-docs">
        <a href={infoCard.url}>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div
                className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                <span className='icon-card-docs'>{infoCard.icon}</span>
              </div>
              <h6 className="text-xl font-semibold">{infoCard.title}</h6>
              <p className="mt-2 mb-4 text-gray-600">
                {infoCard.desc}
              </p>
            </div>
          </div>
        </a>
      </div>

    </>
  )
}

export default Cards;

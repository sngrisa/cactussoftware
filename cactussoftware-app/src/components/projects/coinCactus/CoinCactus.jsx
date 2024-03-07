import React from 'react';
import { FaInternetExplorer } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import "./CoinCactus.css";

const CoinCactus = ({ coinBase }) => {
  return (
    <>
      <section className="bg-gray-700">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">
              {coinBase.title}
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-white">
              {coinBase.desc}
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

              <a href="https://github.com/themesberg/landwind" target="_blank"
                className="inline-flex items-center text-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:focus:ring-gray-800 bg-gray-900">
                Ir a la página <FaInternetExplorer className='ml-3' />
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex text-white">
            <span className='img-Coin'><RiMoneyDollarCircleFill /></span>
          </div>
        </div>
      </section>

    </>
  )
}

export default CoinCactus;

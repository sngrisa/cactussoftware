import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFirefox } from "react-icons/fa6";
import { FaFilm } from "react-icons/fa";
import "./ScreenFilm.css";

const ScreenFilm = ({ ScreenFilm }) => {
  return (
    <>
      <section class="bg-black">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <span className='img-ScreenFilm'><FaFilm /></span>
          </div>
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1
              class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">
              {ScreenFilm.title}
            </h1>

            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-white">
              {ScreenFilm.desc}
            </p>

            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

              <a href="https://github.com/themesberg/landwind" target="_blank"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Ir a la página web <FaFirefox className='ml-3' />
              </a>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ScreenFilm

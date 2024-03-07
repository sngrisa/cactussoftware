import React from 'react';
import "./ProjectDejavu.css";
import { FaGithub } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
import { SiGamedeveloper } from "react-icons/si";

const ProjectDejavu = ({ dejavuProject }) => {
  return (
    <>
      <section class="bg-slate-900">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1
              class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              {dejavuProject.title}
            </h1>

            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {dejavuProject.desc}
            </p>

            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

              <a href="https://github.com/themesberg/landwind" target="_blank"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Ver en GitHub <FaGithub className='ml-3' />
              </a>

              <a href="https://www.figma.com/community/file/1125744163617429490" target="_blank"
                class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Ver documentación <FaInternetExplorer className='ml-2' />
              </a>

            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <span className='img-Dejavu'><SiGamedeveloper /></span>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDejavu

import React from 'react';
import "./Hero.css";
import flutter from "./../../../assets/flutter_2.png";

const Hero = () => {
    return (
        <>
            <section class="bg-white dark:bg-white-900">
                <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-gray">Explorando <br /> el Desarrollo y la Tecnología</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-900">En DevHub, hemos creado un espacio único donde el desarrollo y la tecnología convergen, ofreciendo a nuestros usuarios una experiencia única. Desde el diseño atractivo de Frontend hasta la potencia del Backend, te sumergirás en un viaje inigualable hacia la excelencia tecnológica.</p>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={flutter} alt="hero image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;

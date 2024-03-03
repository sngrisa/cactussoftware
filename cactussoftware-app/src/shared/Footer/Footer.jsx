import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ItemsFooterSocial from "./ItemsFooterSocial/ItemsFooterSocial";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

let Footer = () => {

  let itemsSocial =
    [
      {
        id: 1,
        name: "Facebook",
        url: "https://www.facebook.com/61557171862230",
        icon: <FaFacebook />,
      },
      {
        id: 2,
        name: "Instagram",
        url: "https://www.instagram.com/cactussoftar/",
        icon: <FaInstagram />,
      },
      {
        id: 3,
        name: "Twitter",
        url: "https://twitter.com/cactussoftar",
        icon: <FaXTwitter />,
      },
      {
        id: 4,
        name: "Gmail",
        url: "mailto:soportecactusar@gmail.com",
        icon: <BiLogoGmail />,
      }
    ]

  let getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <>
      <footer className="bg-gray-900">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          <div className="text-center">
            <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
              <div className='p-3 pb-6 text-5xl text-center font-bold text-white'>Cactus<span className='text-blue-500 font-extrabold'>Soft</span> </div>
            </a>
            <span className="block text-sm text-center text-white">© {getYear()} Cactus Software. Todos los derechos reservados
            </span>
            <ul className="flex justify-center mt-5 space-x-5">
              {
                itemsSocial.map((itemSocial, idx) => {
                  return (<ItemsFooterSocial key={idx} itemSocial={itemSocial} />)
                })
              }
            </ul>
          </div>
        </div>
      </footer >
    </>
  )
}

export default Footer;

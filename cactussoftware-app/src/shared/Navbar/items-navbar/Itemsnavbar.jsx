import React from 'react';
import "./itemsnavbar.css";

const ItemsNavbar = ({ itemNavbar }) => {
  return (
    <>
      <li className="group relative text-white">
        <a
          href={itemNavbar.url}
          className="ud-menu-scroll mx-8 flex py-2 text-base font-medium group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70"
        >
          <span className='navbar-item-icon mr-2 text-white'>{itemNavbar.icon}</span>{itemNavbar.name}
        </a>
      </li>
    </>
  )
}

export default ItemsNavbar;

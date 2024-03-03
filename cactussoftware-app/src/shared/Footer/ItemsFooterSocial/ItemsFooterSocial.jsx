import React from 'react';
import "./ItemsFooterSocial.css";

const ItemsFooterSocial = ({ itemSocial }) => {
  return (
    <>
      <li>
        <a href={itemSocial.url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
          <span className='icon'>{itemSocial.icon}</span>
        </a>
      </li>
    </>
  )
}

export default ItemsFooterSocial;

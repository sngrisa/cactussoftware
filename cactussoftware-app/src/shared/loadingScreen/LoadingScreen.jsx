import React from 'react';
import "./LoadingScreen.css";

const LoadingScreen = () => {

  return (
    <>
      <div class="window-loading">
        <div class="logo-loading">
          <p class="mid-loading">Cactus<span className='text-blue-500'>Soft</span></p>
        </div>
        <div class="container-loading">
          <div class="box-loading"></div>
          <div class="box-loading"></div>
          <div class="box-loading"></div>
        </div>
      </div>
    </>
  )
}

export default LoadingScreen;

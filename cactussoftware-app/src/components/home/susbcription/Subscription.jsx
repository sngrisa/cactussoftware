import { React, useState } from 'react';
import Subscribe from './suscribe/Suscribe';
import "./Subscription.css";

const Subscription = () => {

  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen">
        <img
          className="absolute img-background inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
          alt="main background image"
          src="https://source.unsplash.com/random"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
          {subscribed ? (
            <h1 className="font-primary text-white text-4xl sm:text-3xl md:text-4xl md:leading-snug">
              <span className='font-extrabold '>Te has suscripto a </span> <span className='p-1 text-5xl text-center text-white font-bold'>Dev</span><span className='text-5xl font-bold text-center text-blue-500'>Hub</span>
            </h1>
          ) : (
            <div className="space-y-8">
              <h1 className="font-primary  text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
                <span>Dev</span><span className='text-blue-500'>Hub</span>
                <h2 className='font-primary font-extrabold text-white text-2xl sm:text-3xl md:text-2xl md:leading-tight'>Notificaciones</h2>
              </h1>

              <p className="font-secondary text-base md:text-lg lg:text-xl text-white">
                Suscribete con tu correo para recibir las últimas novedades
              </p>
              <Subscribe setSubscribed={setSubscribed} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Subscription;

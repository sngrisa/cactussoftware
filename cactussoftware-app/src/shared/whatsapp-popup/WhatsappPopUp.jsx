import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Photo from "./../../assets/foto5.jpg";

const WhatsappPopUp = () => {
  return (
    <>
      <FloatingWhatsApp accountName='Cactus Software' avatar={Photo} chatMessage='Hola!, ¿En que podemos ayudarte?' statusMessage="Nuestro equipo responde en pocos minutos" phoneNumber="+54 9 376 470-4718" />
    </>
  )
}

export default WhatsappPopUp;

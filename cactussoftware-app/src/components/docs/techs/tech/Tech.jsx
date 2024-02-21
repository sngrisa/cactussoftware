import React from 'react';
import "./Tech.css";

const Tech = ({ cardDetails }) => {
  return (
    <>
      <div className="card">
        <div className="card-image text-center">
          <p className='cardDetails-icon text-center'><span>{cardDetails.imgUrl}</span></p>
        </div>
        <div className="card-body">
          <h1 className="card-title h3-card">{cardDetails.title}</h1>
          <p className='p-large'>{cardDetails.desc}</p>
        </div>
      </div>
    </>
  )
}

export default Tech;

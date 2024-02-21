import React from 'react';
import "./Step.css";

const Step = ({ cardDetails }) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={cardDetails.img} alt={cardDetails.title} />
        </div>
        <div className="card-body">
          <h1 className="card-title h3-card">{cardDetails.title}</h1>
          <ul>
            {
              cardDetails.items.map((item, idx) => {
                return (<li key={idx} className='li-steps'>{item}</li>)
              })
            }

          </ul>
        </div>
      </div>
    </>
  )
}

export default Step;

import React from 'react';
import "./Feature.css";

const Feature = ({ cardDetails }) => {
    return (
        <>
            <div className="px-4 md:w-1/3 mt-6 md:mt-0">
                <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full bg-white card-feature">
                    <div className="text-xl p-4 w-16 h-16 mx-auto">
                        <span className='icon-card-feature'>{cardDetails.icon}</span>
                    </div>
                    <h5 className="text-xl font-medium mb-4 text-center text-gray-900">{cardDetails.title}</h5>
                    <p className="text-gray-600 mb-3 text-feature">{cardDetails.desc}</p>
                </div>
            </div>
        </>
    )
}

export default Feature;

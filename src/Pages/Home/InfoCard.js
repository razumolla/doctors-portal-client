import React from 'react';

const InfoCard = ({ img, cardTitle, bodyInfo, bgColor }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgColor}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />
            </figure>

            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}!</h2>
                <p>{bodyInfo}</p>
            </div>
        </div>
    );
};

export default InfoCard;
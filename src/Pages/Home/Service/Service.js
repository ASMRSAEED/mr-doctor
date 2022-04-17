import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>Service Name: {name}</h2>
            <h3>Details: {description}</h3>
            <h4>Price: {price}</h4>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;
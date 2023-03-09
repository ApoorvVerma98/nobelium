
import React from 'react';

// contains the definition of the Card component
//Card component is a functional component that takes props as input and returns a JSX element that represents the card. 

const Card = ({ name, image, designation, description }) =>  {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt={name} className="card-img" />
        <h3 className="card-name">{name}</h3>
        <p className="card-designation">{designation}</p>
      </div>
      {/* The body div includes the description  */}
      <div className="card-body">
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;

//The CSS styles defined in the App.css file are applied to the elements of the Card component to style the cards.
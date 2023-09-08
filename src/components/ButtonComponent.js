// ButtonComponent.js
import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = ({ label, className }) => {
  return (
    <button className={`duo-button ${className}`}>
      {label}
    </button>
  ); 
};

export default ButtonComponent;

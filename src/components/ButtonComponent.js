// ButtonComponent.js
import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = ({ label, className, icon }) => {
  return (
    <button className={`duo-button ${className}`}>
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  ); 
};

export default ButtonComponent;
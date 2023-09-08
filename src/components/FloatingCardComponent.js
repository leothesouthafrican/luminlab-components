import React from 'react';
import './FloatingCardComponent.css';
import ButtonComponent from './ButtonComponent';

const FloatingCardComponent = ({ color, onClick, style }) => {
  return (
    <div 
      className={`floating-card ${color}`} 
      onClick={() => onClick(color)}
      style={style}
    >
      {/* Content here */}
      <div className="card-button-container">
        <ButtonComponent label="Left Button" className="left-button" />
        <ButtonComponent label="Right Button" className="right-button" />
      </div>
    </div>
  );
};

export default FloatingCardComponent;

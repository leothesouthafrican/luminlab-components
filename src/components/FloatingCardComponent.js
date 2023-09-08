import React from 'react';
import './FloatingCardComponent.css';
import ButtonComponent from './ButtonComponent';
import IvoryCardTable from './IvoryCardTable';  // <-- Import the IvoryCardTable component

const FloatingCardComponent = ({ color, onClick, style, showButtons, retrofitMeasures }) => {
  return (
    <div 
      className={`floating-card ${color}`} 
      onClick={() => onClick(color)}
      style={style}
    >
      {/* Place Investment Table here if showButtons is true */}
      {showButtons && <IvoryCardTable retrofitMeasures={retrofitMeasures} />}

      {showButtons && (
        <div className="card-button-container">
          <ButtonComponent label="Left Button" className="left-button" />
          <ButtonComponent label="Right Button" className="right-button" />
        </div>
      )}
    </div>
  );
};

export default FloatingCardComponent;

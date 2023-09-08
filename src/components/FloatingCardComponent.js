// FloatingCardComponent.js

import React from 'react';
import './FloatingCardComponent.css';
import ButtonComponent from './ButtonComponent';
import IvoryCardTable from './IvoryCardTable';  // <-- Import the IvoryCardTable component
import StatsCard from './StatsCard';  // Import the new component

const FloatingCardComponent = ({ color, onClick, style, showButtons, retrofitMeasures, showStatsCard }) => {
  return (
    <div 
      className={`floating-card ${color}`} 
      onClick={() => onClick(color)}
      style={style}
    >
      {/* Conditional rendering for StatsCard */}
      {showStatsCard && (
        <div className="stats-card-position">
          <StatsCard berRating={3} />
        </div>
      )}
      {/* Place Investment Table here if showButtons is true */}
      <div className="content-container">
        {showButtons && <IvoryCardTable retrofitMeasures={retrofitMeasures} />}
        {showButtons && (
          <div className="card-button-container">
            <ButtonComponent label="Share" className="left-button" />
            <ButtonComponent label="PRO Mode" className="right-button" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingCardComponent;

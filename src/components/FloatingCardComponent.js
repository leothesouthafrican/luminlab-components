import React from 'react';
import './FloatingCardComponent.css';
import ButtonComponent from './ButtonComponent';
import IvoryCardTable from './IvoryCardTable';
import StatsCard from './StatsCard';
import MinimalStatsCard from './MinimalStatsCard';
import BerRatingMedallion from './BerRatingMedallion';

const FloatingCardComponent = ({ color, onClick, style, showButtons, retrofitMeasures, isDemo, showStatsCard, berRating }) => {
  return (
    <div 
      className={`floating-card ${color}`} 
      onClick={() => onClick(color)}
      style={style}
    >
      <div className="content-container">
        <div className="stats-card-container">
          {showStatsCard && (
            <>
              <div className="ber-medallion-container">
                <BerRatingMedallion berRating={berRating} />
              </div>
              {isDemo ? <MinimalStatsCard berRating={berRating} className="minimal-stats-card-demo" /> : <StatsCard berRating={3} />}
            </>
          )}
        </div>
        
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

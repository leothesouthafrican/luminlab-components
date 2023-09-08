import React from 'react';
import './StatsCard.css';

const StatsCard = ({ berRating }) => {
  // Array of rectangles (for simplicity, we assume 5)
  const rectangles = Array.from({ length: 5 }, (_, index) => index + 1);

  // Calculate the 'TOP' percentage (dummy calculation for the demo)
  const topPercentage = berRating * 10;

  return (
    <div className="stats-card">
      <div className="rectangle-container">
        {rectangles.map((height, index) => (
          <div
            key={index}
            className={`rectangle ${berRating === index + 1 ? 'active' : ''}`}
            style={{ height: `${height * 20}px` }}
          ></div>
        ))}
      </div>
      <div className="percentage-container">
        TOP: {topPercentage}%
      </div>
    </div>
  );
};

export default StatsCard;

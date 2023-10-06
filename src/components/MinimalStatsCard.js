import React from 'react';
import './MinimalStatsCard.css';

const berToNumeric = {
  'A1': 15, 'A2': 14, 'A3': 13,
  'B1': 12, 'B2': 11, 'B3': 10,
  'C1': 9, 'C2': 8, 'C3': 7,
  'D1': 6, 'D2': 5,
  'E1': 4, 'E2': 3,
  'F': 2,
  'G': 1
};

const getPercentile = (numericValue) => {
  return Math.round((numericValue / 15) * 100);
};

const MinimalStatsCard = ({ berRating }) => {
  const totalSegments = 100;
  const numericValue = berToNumeric[berRating] || 0; // Default to 0 if berRating is not valid
  const percentile = getPercentile(numericValue);
  const filledSegmentsCount = Math.round((percentile / 100) * totalSegments);

  return (
    <div className="minimal-stats-card">
      <div className="title">Your Home's Energy Efficiency</div>
      <div className="subtitle">Compared with the market</div>
      <div className="progress-container">
        {Array.from({ length: totalSegments }).map((_, index) => (
          <div 
            className={`segment ${index < filledSegmentsCount ? 'filled' : 'empty'}`} 
            style={{backgroundColor: index < filledSegmentsCount ? getSegmentColor(index, totalSegments) : '#E1E2E1'}} 
            key={index}
          ></div>
        ))}
      </div>
      <div className="rating">Your Percentile: {percentile}%</div>
    </div>
  );
};

const getSegmentColor = (index, total) => {
  const green = 100 + Math.round((index / total) * 155);
  return `rgb(0, ${green}, 0)`;
};

export default MinimalStatsCard;

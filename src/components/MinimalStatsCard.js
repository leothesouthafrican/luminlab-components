import React from 'react';
import './MinimalStatsCard.css';

const MinimalStatsCard = ({ berRating }) => {
  // Assuming ratings are between 1 and 5
  const filledSegments = Array(berRating).fill(true);
  const emptySegments = Array(5 - berRating).fill(false);

  const segments = [...filledSegments, ...emptySegments];

  return (
    <div className="minimal-stats-card">
      <div className="title">Energy Rating Leaderboard</div>
      <div className="progress-container">
        {segments.map((isFilled, index) => (
          <div className={`segment ${isFilled ? 'filled' : 'empty'}`} key={index}></div>
        ))}
      </div>
      <div className="rating">Your Rating: {berRating}</div>
    </div>
  );
};

export default MinimalStatsCard;

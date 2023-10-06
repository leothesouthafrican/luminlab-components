//MinimalStatsCard.js

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
  const totalSegments = 10;
  const numericValue = berToNumeric[berRating] || 0; // Default to 0 if berRating is not valid
  const percentile = getPercentile(numericValue);
  const filledSegmentsCount = Math.round((percentile / 100) * totalSegments);
  const clampedFilledSegmentsCount = Math.min(Math.max(filledSegmentsCount, 0), totalSegments);
  const filledSegments = Array(clampedFilledSegmentsCount).fill(true);
  const emptySegments = Array(totalSegments - clampedFilledSegmentsCount).fill(false);
  const segments = [...filledSegments, ...emptySegments];

  // Logging statements for debugging
  console.log("BER Rating:", berRating);
  console.log("Numeric Value:", numericValue);
  console.log("Percentile:", percentile);
  console.log("Filled Segments Count:", filledSegmentsCount);
  console.log("Clamped Filled Segments Count:", clampedFilledSegmentsCount);

  return (
    <div className="minimal-stats-card">
      <div className="title">Your Home's Energy Efficiency</div>
      <div className="subtitle">Compared with the market</div>
      <div className="progress-container">
        {segments.map((isFilled, index) => (
          <div className={`segment ${isFilled ? 'filled' : 'empty'}`} style={{backgroundColor: isFilled ? getSegmentColor(index, totalSegments) : '#E1E2E1'}} key={index}></div>
        ))}
      </div>
      <div className="rating">Your Percentile: {percentile}%</div>
    </div>
  );
};

// Helper function to get the segment color based on its position
const getSegmentColor = (index, total) => {
  const red = 255 - Math.round((index / total) * 255);
  const green = Math.round((index / total) * 255);
  return `rgb(${red}, ${green}, 0)`;
};

export default MinimalStatsCard;

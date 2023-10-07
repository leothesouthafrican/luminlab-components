//app.js

import React, { useState } from 'react';
import './App.css';
import jsonData from './data/data.json';
import ButtonComponent from './components/ButtonComponent';
import FloatingCardComponent from './components/FloatingCardComponent';
import IvoryCardTable from './components/IvoryCardTable';
import StatsCard from './components/StatsCard';
import MinimalStatsCard from './components/MinimalStatsCard';
import BerRatingMedallion from './components/BerRatingMedallion';

// Define berToNumeric mapping
const berToNumeric = {
  'A1': 15, 'A2': 14, 'A3': 13,
  'B1': 12, 'B2': 11, 'B3': 10,
  'C1': 9, 'C2': 8, 'C3': 7,
  'D1': 6, 'D2': 5,
  'E1': 4, 'E2': 3,
  'F': 2,
  'G': 1
};

function App() {
  // Sort the plans based on their EnergyRating
  const sortedPlans = [...jsonData].sort((a, b) => berToNumeric[b.EnergyRating] - berToNumeric[a.EnergyRating]);

  // Cluster the ratings
  const goldRating = sortedPlans[0].EnergyRating;
  const bronzeRating = sortedPlans[sortedPlans.length - 1].EnergyRating;

  const getColorFromRating = (rating) => {
    if (rating === goldRating) return 'gold';
    if (rating === bronzeRating) return 'bronze';
    return 'silver';
  };

  const [topCard, setTopCard] = useState('gold');
  const cardData = sortedPlans.map(item => ({
    color: getColorFromRating(item.EnergyRating),
    berRating: item.EnergyRating
  }));

  // Define cardColors based on cardData
  const cardColors = [...new Set(cardData.map(card => card.color))];

  const retrofitMeasures = [
    { name: "Insulation", cost: "€2000", savings: "€50/month" },
    { name: "Solar Panels", cost: "€5000", savings: "€80/month" },
  ];

  const handleCardClick = (color) => {
    if (color !== topCard) {
      setTopCard(color);
    }
  };

  const cardStyle = (color) => {
    const index = cardData.findIndex(card => card.color === topCard);
    const rotatedColors = [...cardData.slice(index), ...cardData.slice(0, index)];
    const position = rotatedColors.findIndex(card => card.color === color);

    return {
      zIndex: 3 - position,
      top: `${position * 20}px`,
      right: `${position * 40}px`,
    };
  };

  return (
    <div className="App">
      <div className="section">
        <h2>Button Playground</h2>
        <div className="button-container">
          <ButtonComponent label="Button" />
        </div>
      </div>

      <div className="section">
        <h2>Floating Card Playground</h2>
        <div className="card-container">
          {cardColors.map((color) => (
            <FloatingCardComponent
              key={color}
              color={color}
              onClick={handleCardClick}
              style={cardStyle(color)}
              showButtons={false}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Investment Table</h2>
        <div className="card-container">
          <IvoryCardTable retrofitMeasures={retrofitMeasures} />
        </div>
      </div>

      <div className="section">
        <h2>Stats</h2>
        <div className="card-container">
          <StatsCard berRating={3} />
          <MinimalStatsCard berRating="A1" />
        </div>
      </div>

      <div className="section">
        <h2>Ber Rating Medallion</h2>
        <div className="card-container">
          <BerRatingMedallion berRating="A1" />
        </div>
      </div>

      <div className="section">
        <h2>Demo</h2>
        <div className="card-container">
          {cardData.map((card, index) => (
            <FloatingCardComponent
              key={card.color}
              color={card.color}
              berRating={card.berRating}
              onClick={handleCardClick}
              style={cardStyle(card.color)}
              showButtons={true}
              retrofitMeasures={retrofitMeasures}
              isDemo={true}
              showStatsCard={true}
              data={sortedPlans[index]}  // Ensure that sortedPlans[index] is correctly structured
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


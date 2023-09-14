//app.js

import React, { useState } from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import FloatingCardComponent from './components/FloatingCardComponent';
import IvoryCardTable from './components/IvoryCardTable';  // <-- Import the new component
import StatsCard from './components/StatsCard';  // Import the new component
import MinimalStatsCard from './components/MinimalStatsCard';  // Import the new component
import BerRatingMedallion from './components/BerRatingMedallion';  // Import the new component

function App() {
  const [topCard, setTopCard] = useState('gold');
  const cardColors = ['gold', 'silver', 'bronze'];

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
    const index = cardColors.indexOf(topCard);
    const rotatedColors = [...cardColors.slice(index), ...cardColors.slice(0, index)];
    const position = rotatedColors.indexOf(color);

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

      {/* Move Investment Table here */}
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
          <MinimalStatsCard berRating={3} />  {/* Add the new MinimalStatsCard */}
        </div>
      </div>
      <div className="section">
        <h2>Ber Rating Medallion</h2>
        <div className="card-container">
          <BerRatingMedallion berRating="A1" />
        </div>
      </div>
{/* Demo Section */}
<div className="section">
  <h2>Demo</h2>
  <div className="card-container">
    {cardColors.map((color, index) => (
      <FloatingCardComponent
        key={color}
        color={color}
        onClick={handleCardClick}
        style={cardStyle(color)}
        showButtons={true}
        retrofitMeasures={retrofitMeasures}
        isDemo={true}
        showStatsCard={true}  // Show StatsCard for all cards in the demo section
      />
    ))}
  </div>
</div>
    </div>
  );
}

export default App;
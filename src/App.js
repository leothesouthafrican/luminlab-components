import React, { useState } from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent'; 
import FloatingCardComponent from './components/FloatingCardComponent';

function App() {
  const [topCard, setTopCard] = useState('gold');
  const cardColors = ['gold', 'silver', 'bronze'];

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
      <div className="button-container">
        <ButtonComponent label="Duolingo" />
      </div>
      <div className="card-container">
        {cardColors.map((color) => (
          <FloatingCardComponent
            key={color}
            color={color}
            onClick={handleCardClick}
            style={cardStyle(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

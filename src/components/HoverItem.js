//HoverItem.js

import React, { useState } from 'react';
import './HoverItem.css';

const HoverItem = ({ label, explanation, onHover, onLeave, color }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setShowPopup(true);
    const rect = e.currentTarget.getBoundingClientRect();  // Get the position and size of the hovered item
    setPosition({ x: rect.right, y: rect.top });  // Set the position to the right of the item
    if (onHover) onHover();
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
    if (onLeave) onLeave();
  };

  const hoverStyle = {
    backgroundImage: `linear-gradient(to right, ${color}80, ${color}80)`
  };

  return (
    <td 
      className="hover-item" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      style={showPopup ? hoverStyle : {}}
    >
      {label}
    </td>
  );
};

export default HoverItem;

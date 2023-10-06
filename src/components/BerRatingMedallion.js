import React from 'react';
import './BerRatingMedallion.css';

const BerRatingMedallion = ({ berRating, color }) => {
  return (
    <div className={`ber-medallion ${color}`}>
      <h1 className="ber-rating">{berRating}</h1>
    </div>
  );
};

export default BerRatingMedallion;

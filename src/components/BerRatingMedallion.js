import React from 'react';
import './BerRatingMedallion.css';

const BerRatingMedallion = ({ berRating }) => {
  return (
    <div className="ber-medallion">
      <h1 className="ber-rating">{berRating}</h1>
    </div>
  );
};

export default BerRatingMedallion;

// GithubButtonComponent.js
import React from 'react';
import './GithubButtonComponent.css';

const GithubButtonComponent = ({ label }) => {
  return (
    <button className="github-button">
      {label}
    </button>
  );
};

export default GithubButtonComponent;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const toggleAdvancedOptions = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Welcome to Our Home Retrofitting Plan Service</h1>
        <p>
          We ask for your BER Number to gather essential energy details. 
          This information enables our model to estimate an optimised retrofit plan tailored for you, 
          along with potential future savings. Your budget helps us to understand the financial constraints within which we can offer the best solutions.
        </p>
        <p>
          Rest assured, <strong>none</strong> of the information you provide is stored or used for any other purposes. 
          Your privacy is important to us.
        </p>
        <form>
          <div className="input-group">
            <label htmlFor="berNumber">BER Number</label>
            <input type="text" id="berNumber" name="berNumber" />
          </div>
          <div className="input-group">
            <label htmlFor="budget">Budget</label>
            <input type="number" id="budget" name="budget" />
          </div>
          {showAdvanced && (
            <div className="advanced-options">
              <div className="input-group">
                <label htmlFor="extra1">Extra Field 1</label>
                <input type="text" id="extra1" name="extra1" />
              </div>
              <div className="input-group">
                <label htmlFor="extra2">Extra Field 2</label>
                <input type="text" id="extra2" name="extra2" />
              </div>
            </div>
          )}
          <button type="submit">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button type="button" onClick={toggleAdvancedOptions} className="advanced-button">
            Advanced Options
          </button>
          <p className="small-text">These options allow you to customize the generated plan according to any specific requirements you may have.</p>
        </form>
      </div>
    </div>
  );
}

export default App;

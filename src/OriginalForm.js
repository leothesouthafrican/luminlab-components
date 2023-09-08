import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    berNumber: '',
    budget: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Retrofit Your Home</h1>
        <div className="input-group">
          <label htmlFor="berNumber">BER Number</label>
          <input
            type="text"
            id="berNumber"
            name="berNumber"
            value={formData.berNumber}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="budget">Budget</label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
    
  );
}

export default App;

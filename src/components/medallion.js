import React from 'react';
import './medallion.css'; 

const Medallion = ({ berRating, retrofitMeasures, leaderboardPosition }) => {
  return (
    <div className="medallion-container">
      <div className="medallion-icon" onClick={() => alert('Share Clicked')}>
        📤
      </div>
      <div className="medallion-row">
        <div className="medallion-item medallion-3d-block">
          <p>{berRating}</p>
        </div>
        <div className="medallion-item">
          <p>Leaderboard: 🌟 {leaderboardPosition}</p>
        </div>
      </div>
      <div className="medallion-row">
        <div className="medallion-item">
          <h3 className="medallion-table-header">Investment Breakdown</h3>
          <table className="medallion-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Initial Investment</td>
                <td>€5000</td>
              </tr>

              <tr>
                <td>Additional Cost</td>
                <td>€200</td>
              </tr>
              <tr>
                <td>Grant</td>
                <td>€1000</td>
              </tr>
              <tr className="bold-border-top double-border-bottom">
                <td><strong>Total</strong></td>
                <td><strong>€4200</strong></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="medallion-item">
          <h3 className="medallion-table-header">Measures to be Taken</h3>
          <table className="medallion-table">
            <thead>
              <tr>
                <th>Measure</th>
                <th>Cost</th>
                <th>Savings</th>
              </tr>
            </thead>
            <tbody>
              {retrofitMeasures.map((measure, index) => (
                <tr key={index}>
                  <td>{measure.name}</td>
                  <td>{measure.cost}</td>
                  <td>{measure.savings}</td>
                </tr>
              ))}
            <tr className="payback-row bold-border-top double-border-bottom">
            <td colSpan="2"><strong>Payback Period</strong></td>
            <td><strong>5 years</strong></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="pro-mode-button-container">
        <button className="pro-mode-button" onClick={() => alert('Pro Mode Activated')}>Pro Mode</button>
    </div>
    </div>
  );
};

export default Medallion;

// IvoryCardTable.js
import React from 'react';
import './IvoryCardTable.css';

const IvoryCardTable = ({ retrofitMeasures }) => {
  return (
    <div className="ivory-card-table-container">
      <div className="ivory-table-row">
        {/* First Table: Investment Breakdown */}
        <div className="ivory-table-item">
          <h3 className="ivory-card-table-header">Investment Breakdown</h3>
          <table className="ivory-card-table">
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

        {/* Second Table: Measures to be Taken */}
        <div className="ivory-table-item">
          <h3 className="ivory-card-table-header">Measures to be Taken</h3>
          <table className="ivory-card-table">
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
    </div>
  );
};

export default IvoryCardTable;

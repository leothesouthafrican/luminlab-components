//IvoryCardTable.js

import React from 'react';
import './IvoryCardTable.css';

const IvoryCardTable = ({ data }) => {
  console.log(data);
  if (!data) {
    return null; // or return a loading spinner or some placeholder content
  }
  const formatAmount = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Adds spaces for thousands
  };

  const monthlySavingsForMeasure = (measureCost) => {
    if (measureCost > 25000) {
      return Math.round(0.01 * measureCost / 2);
    }
    return Math.round(0.02 * measureCost);
  };

  const additionalCost = Math.round(0.05 * data.total_price);
  const totalMonthlySavings = Object.values(data.Cards).reduce((acc, cost) => acc + monthlySavingsForMeasure(cost), 0);
  const paybackPeriod = Math.round((data.total_price + additionalCost - data.grant) / (totalMonthlySavings * 12));

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
                <td>€{formatAmount(data.total_price)}</td>
              </tr>
              <tr>
                <td>Additional Cost</td>
                <td>€{formatAmount(additionalCost)}</td>
              </tr>
              <tr>
                <td>Grant</td>
                <td>€{formatAmount(data.grant)}</td>
              </tr>
              <tr className="bold-border-top double-border-bottom">
                <td><strong>Total</strong></td>
                <td><strong>€{formatAmount(data.total_price + additionalCost - data.grant)}</strong></td>
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
              {Object.entries(data.Cards).map(([measure, cost], index) => (
                <tr key={index}>
                  <td>{measure.replace(/_/g, ' ')}</td>
                  <td>€{formatAmount(cost)}</td>
                  <td>€{formatAmount(monthlySavingsForMeasure(cost))} monthly*</td>
                </tr>
              ))}
              <tr className="payback-row bold-border-top double-border-bottom">
                <td colSpan="2"><strong>Payback Period</strong></td>
                <td><strong>{paybackPeriod} years</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IvoryCardTable;

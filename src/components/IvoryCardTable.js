import React, { useState } from 'react';
import './IvoryCardTable.css';
import HoverItem from './HoverItem';

const IvoryCardTable = ({ data }) => {
  const [activeExplanation, setActiveExplanation] = useState(null);
  const [activeSavingsExplanation, setActiveSavingsExplanation] = useState(null);

  if (!data) {
    return null;
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
          <h3 className="ivory-card-table-header">
            {activeSavingsExplanation ? "Explanation" : "Investment Breakdown"}
          </h3>
          {activeSavingsExplanation ? (
            <div className="hover-popup-static">{activeSavingsExplanation}</div>
          ) : (
            <table className="ivory-card-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <HoverItem 
                    label="Initial Investment" 
                    explanation="The base amount required for the retrofit measures before any additional costs or grants."
                    onHover={() => setActiveExplanation("The base amount required for the retrofit measures before any additional costs or grants.")}
                    onLeave={() => setActiveExplanation(null)}
                  />
                  <td>€{formatAmount(data.total_price)}</td>
                </tr>
                <tr>
                  <HoverItem 
                    label="Additional Cost" 
                    explanation="The extra costs that might be incurred in addition to the initial investment."
                    onHover={() => setActiveExplanation("The extra costs that might be incurred in addition to the initial investment.")}
                    onLeave={() => setActiveExplanation(null)}
                  />
                  <td>€{formatAmount(additionalCost)}</td>
                </tr>
                <tr>
                  <HoverItem 
                    label="Grant" 
                    explanation="The amount you'll be granted or subsidized for the retrofit measures."
                    onHover={() => setActiveExplanation("The amount you'll be granted or subsidized for the retrofit measures.")}
                    onLeave={() => setActiveExplanation(null)}
                  />
                  <td>€{formatAmount(data.grant)}</td>
                </tr>
                <tr className="bold-border-top double-border-bottom">
                  <td><strong>Total</strong></td>
                  <td><strong>€{formatAmount(data.total_price + additionalCost - data.grant)}</strong></td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* Second Table: Measures to be Taken */}
        <div className="ivory-table-item">
          <h3 className="ivory-card-table-header">
            {activeExplanation ? "Explanation" : "Measures to be Taken"}
          </h3>
          {activeExplanation ? (
            <div className="hover-popup-static">{activeExplanation}</div>
          ) : (
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
                    <HoverItem 
                      label={measure.replace(/_/g, ' ')}
                      explanation={`This measure, estimated at €${formatAmount(cost)}, is projected to yield monthly savings of €${formatAmount(monthlySavingsForMeasure(cost))}. Please note that these figures are based on historical data and are provided for informational purposes only. For a detailed breakdown or any further inquiries, kindly consult the virtual assistant in the chat box below.`}
                      onHover={() => setActiveSavingsExplanation(`This measure, estimated at €${formatAmount(cost)}, is projected to yield monthly savings of €${formatAmount(monthlySavingsForMeasure(cost))}. Please note that these figures are based on historical data and are provided for informational purposes only. For a detailed breakdown or any further inquiries, kindly consult the virtual assistant in the chat box below.`)}
                      onLeave={() => setActiveSavingsExplanation(null)}
                      tableType="savings"
                    />
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
          )}
        </div>
      </div>
    </div>
  );
};

export default IvoryCardTable;

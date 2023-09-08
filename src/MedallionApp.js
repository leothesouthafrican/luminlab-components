import React from "react";
import Medallion from "./components/medallion";

function App() {
  const berRating = "B2";
  const retrofitMeasures = [
    { name: "Insulation", cost: "€2000", savings: "€50/month" },
    { name: "Solar Panels", cost: "€5000", savings: "€80/month" },
  ];
  const leaderboardPosition = "Top 15%";

  return (
    <div className="App">
      <Medallion
        berRating={berRating}
        retrofitMeasures={retrofitMeasures}
        leaderboardPosition={leaderboardPosition}
      />
    </div>
  );
}

export default App;
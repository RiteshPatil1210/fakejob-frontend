import React from "react";
import HomePage from "./components/HomePage";
import AnalyzePage from "./components/AnalyzePage";
import AccuracyChart from "./AccuracyChart";
import "./app.css";

function App() {
  return (
    <div className="app-root">
      <HomePage />

      <div style={{ width: "80%", margin: "40px auto" }}>
        <AccuracyChart />
      </div>

      <AnalyzePage />
    </div>
  );
}

export default App;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccuracyChart from "../AccuracyChart";

const HomePage = () => {
  const [showChart, setShowChart] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Fake Job Detection System</h1>

      {/* Buttons */}
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => setShowChart(!showChart)}
          style={buttonStyle}
        >
          📊 View Accuracy Graph
        </button>

        <button
          onClick={() => navigate("/analyze")}
          style={{ ...buttonStyle, backgroundColor: "#27ae60" }}
        >
          🔍 Analyze Job
        </button>
      </div>

      {/* Animated Chart */}
      {showChart && (
        <div style={{ width: "80%", margin: "50px auto" }}>
          <AccuracyChart />
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: "12px 24px",
  margin: "10px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#2980b9",
  color: "white"
};

export default HomePage;


import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AnalyzePage from "./components/Analyzepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/analyze" element={<AnalyzePage />} />
    </Routes>
  );
}

export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AnalyzePage from "./pages/AnalyzePage";
import { AnalysisProvider } from "./context/AnalysisContext";
import WhyMattersPage from "./pages/WhyMattersPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import HowToUsePage from "./pages/HowToUsePage";
import AccuracyPage from "./pages/AccuracyPage";
import "./App.css";

function App() {
  return (
    <AnalysisProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="/why-matters" element={<WhyMattersPage />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/accuracy" element={<AccuracyPage />} />
        </Routes>
      </MainLayout>
    </AnalysisProvider>
  );
}

export default App;

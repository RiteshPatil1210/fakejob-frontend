import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AccuracyChart = () => {
  const data = {
    labels: [
      "Logistic Regression",
      "Naive Bayes",
      "Random Forest",
      "MLP (Sklearn)",
      "DNN (TensorFlow)"
    ],
    datasets: [
      {
        label: "Accuracy (%)",
        data: [97.29, 95.05, 98.46, 98.88, 98.55],
        backgroundColor: [
          "#007bff", // Accent Blue
          "#00f0ff", // Accent Neon
          "#00ff9d", // Safe Green
          "#8a2be2", // Purple
          "#ff0055"  // Danger Red
        ],
        borderRadius: 8,
        borderWidth: 0,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: "easeOutQuint"
    },
    plugins: {
      legend: { display: false },
      title: {
        display: false, // We'll handle title in HTML/CSS
      },
      tooltip: {
        backgroundColor: 'rgba(21, 22, 33, 0.9)',
        titleColor: '#00f0ff',
        bodyColor: '#e0e6ed',
        borderColor: 'rgba(0, 240, 255, 0.2)',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
      }
    },
    scales: {
      y: {
        min: 94,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#94a3b8',
        },
        title: {
          display: true,
          text: "Accuracy (%)",
          color: '#e0e6ed'
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 11
          }
        }
      }
    }
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AccuracyChart;

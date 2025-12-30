// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const AccuracyChart = () => {
//   const data = {
//     labels: [
//       "Logistic Regression",
//       "Naive Bayes",
//       "Random Forest",
//       "MLP (Sklearn)",
//       "DNN (TensorFlow)"
//     ],
//     datasets: [
//       {
//         label: "Accuracy (%)",
//         data: [97.29, 95.05, 98.46, 98.88, 98.55],
//         backgroundColor: [
//           "#3498db",
//           "#9b59b6",
//           "#2ecc71",
//           "#f1c40f",
//           "#e74c3c"
//         ],
//         borderRadius: 6
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: "Model Accuracy Comparison"
//       }
//     },
//     scales: {
//       y: {
//         min: 94,
//         max: 100,
//         title: {
//           display: true,
//           text: "Accuracy (%)"
//         }
//       }
//     }
//   };

//   return <Bar data={data} options={options} />;
// };

// export default AccuracyChart;












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
          "#3498db",
          "#9b59b6",
          "#2ecc71",
          "#f1c40f",
          "#e74c3c"
        ],
        borderRadius: 8
      }
    ]
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1500,
      easing: "easeOutBounce"
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Model Accuracy Comparison"
      }
    },
    scales: {
      y: {
        min: 94,
        max: 100,
        title: {
          display: true,
          text: "Accuracy (%)"
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default AccuracyChart;

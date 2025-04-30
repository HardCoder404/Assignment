"use client"

import { useState } from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface InventoryOverviewProps {
  themeColor: string
}

export function InventoryOverview({ themeColor }: InventoryOverviewProps) {
  const [activeTab, setActiveTab] = useState("weekly")

  const getChartData = () => {
    // Dynamic color based on theme
    let primaryColor = "rgba(90, 80, 240, 1)" // Default indigo

    if (themeColor === "red") primaryColor = "rgba(220, 38, 38, 1)"
    if (themeColor === "blue") primaryColor = "rgba(37, 99, 235, 1)"
    if (themeColor === "green") primaryColor = "rgba(22, 163, 74, 1)"
    if (themeColor === "purple") primaryColor = "rgba(126, 34, 206, 1)"
    if (themeColor === "pink") primaryColor = "rgba(219, 39, 119, 1)"
    if (themeColor === "orange") primaryColor = "rgba(234, 88, 12, 1)"

    return {
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales",
          data: [65, 90, 120, 60, 95, 80, 70],
          backgroundColor: primaryColor,
          barPercentage: 0.6,
          categoryPercentage: 0.7,
        },
        {
          label: "Purchases",
          data: [40, 60, 80, 35, 60, 50, 40],
          backgroundColor: "rgba(200, 200, 255, 0.7)",
          barPercentage: 0.6,
          categoryPercentage: 0.7,
        },
      ],
    }
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [2, 4],
          color: "#f0f0f0",
        },
        ticks: {
          callback: (value: any) => value / 1000 + "k",
        },
      },
    },
  }

  return (
    <div className="bg-white border rounded-lg p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <div>
          <h2 className="font-bold text-lg">Inventory Overview</h2>
          <p className="text-gray-500 text-sm">In-Stock Products: 3,200 Units</p>
        </div>
        <div className="flex items-center gap-2 w-fit border border-gray-200 rounded-full px-1 py-1">
          <button
            className={`px-3 rounded-full sm:px-4 py-1 text-xs ${activeTab === "daily" ? `bg-${themeColor}-600 text-white` : "bg-gray-100 text-gray-600"}`}
            onClick={() => setActiveTab("daily")}
          >
            DAILY
          </button>
          <button
            className={`px-3 rounded-full sm:px-4 py-1 text-xs ${activeTab === "weekly" ? `bg-${themeColor}-600 text-white` : "bg-gray-100 text-gray-600"}`}
            onClick={() => setActiveTab("weekly")}
          >
            WEEKLY
          </button>
        </div>
      </div>
      <div className="h-48 sm:h-64">
        <Bar data={getChartData()} options={options} />
      </div>
    </div>
  )
}

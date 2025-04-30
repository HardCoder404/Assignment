"use client"

import { useState } from "react"

interface TopItemsProps {
  type: "sold" | "purchased"
  themeColor: string
}

export function TopItems({ type, themeColor }: TopItemsProps) {
  const [activeTab, setActiveTab] = useState("vol")

  const items =
    type === "sold"
      ? [
          { id: 1, name: "Automotive Parts", units: 850, value: "₹2,27,459" },
          { id: 2, name: "Steel Sheets", units: 430, value: "₹2,27,459" },
          { id: 3, name: "Electronic Parts", units: 300, value: "₹2,27,459" },
          { id: 4, name: "Plastic Materials", units: 400, value: "₹2,27,459" },
          { id: 5, name: "Office Equipments", units: 150, value: "₹2,27,459" },
        ]
      : [
          { id: 1, name: "Office Equipments", units: 850, value: "₹2,27,459" },
          { id: 2, name: "Steel Sheets", units: 430, value: "₹2,27,459" },
          { id: 3, name: "Plastic Materials", units: 300, value: "₹2,27,459" },
          { id: 4, name: "Electronic Parts", units: 400, value: "₹2,27,459" },
          { id: 5, name: "Automotive Parts", units: 150, value: "₹2,27,459" },
        ]

  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg">Top Items {type === "sold" ? "Sold" : "Purchased"}</h2>
        <div className="flex items-center border rounded-md overflow-hidden">
          <button
            className={`px-4 py-1 text-xs ${activeTab === "value" ? `bg-${themeColor}-600 text-white` : "bg-white text-gray-600"}`}
            onClick={() => setActiveTab("value")}
          >
            VALUE
          </button>
          <button
            className={`px-4 py-1 text-xs ${activeTab === "vol" ? `bg-${themeColor}-600 text-white` : "bg-white text-gray-600"}`}
            onClick={() => setActiveTab("vol")}
          >
            VOL
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2 border-b last:border-0">
            <div className="flex items-center gap-4">
              <span className="font-medium">#{item.id}</span>
              <p className="font-medium">{item.name}</p>
            </div>
            <div>
              {activeTab === "vol" ? (
                <span className="text-sm font-medium">{item.units} Units</span>
              ) : (
                <span className="text-sm font-medium">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"

interface Item {
  id: number
  name: string
  units: number
}

interface TopItemsListProps {
  title: string
  items: Item[]
  themeColor: string
}

export function TopItemsList({ title, items, themeColor }: TopItemsListProps) {
  const [activeTab, setActiveTab] = useState("vol")

  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <div className="flex items-center border border-gray-200 rounded-full px-1 py-1">
          <button
            className={`px-4 rounded-full py-1 text-xs ${activeTab === "value" ? `bg-${themeColor}-600 text-white` : "bg-white text-gray-600"}`}
            onClick={() => setActiveTab("value")}
          >
            VALUE
          </button>
          <button
            className={`px-4 py-1 rounded-full text-xs ${activeTab === "vol" ? `bg-${themeColor}-600 text-white` : "bg-white text-gray-600"}`}
            onClick={() => setActiveTab("vol")}
          >
            VOL
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2 border-b last:border-0">
            <div className="flex items-center gap-4">
              <span className="font-medium">#{item.id}</span>
              <p className="font-medium">{item.name}</p>
            </div>
            <div>
              <span className="text-sm font-medium">{item.units} Units</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

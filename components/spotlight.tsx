"use client"

import { useState } from "react"
import { TopItemsList } from "./top-items-list"
import Image from "next/image"

interface SpotlightProps {
  themeColor: string
}

export function Spotlight({ themeColor }: SpotlightProps) {
  const [activeTab, setActiveTab] = useState("all")

  const soldItems = [
    { id: 1, name: "Automotive Parts", units: 850 },
    { id: 2, name: "Steel Sheets", units: 430 },
    { id: 3, name: "Electronic Parts", units: 300 },
    { id: 4, name: "Plastic Materials", units: 400 },
    { id: 5, name: "Office Equipments", units: 150 },
  ]

  const purchasedItems = [
    { id: 1, name: "Office Equipments", units: 850 },
    { id: 2, name: "Steel Sheets", units: 430 },
    { id: 3, name: "Plastic Materials", units: 300 },
    { id: 4, name: "Electronic Parts", units: 400 },
    { id: 5, name: "Automotive Parts", units: 150 },
  ]

  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">Spotlight</h2>
            <div className="flex items-center gap-2">
              <button
                className="px-4 py-1 text-xs rounded-md bg-gray-200 text-gray-800"
                onClick={() => setActiveTab("all")}
              >
                ALL REGIONS
              </button>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg h-[300px] sm:h-[400px] flex items-center justify-center">
            {/* World Map SVG */}
            <Image src="/image 9.svg" alt="spotlight" className="object-cover w-full h-full" width={100} height={100} />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <TopItemsList title="Top Items Sold" items={soldItems} themeColor={themeColor} />

          <TopItemsList title="Top Items Purchased" items={purchasedItems} themeColor={themeColor} />
        </div>
      </div>
    </div>
  )
}

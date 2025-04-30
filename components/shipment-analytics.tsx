"use client"

import { useState } from "react"
import { ArrowRight, Filter } from "lucide-react"

interface ShipmentAnalyticsProps {
  themeColor: string
}

export function ShipmentAnalytics({ themeColor }: ShipmentAnalyticsProps) {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="bg-white border rounded-lg p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <h2 className="font-bold text-lg">Shipment Analytics</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs sm:text-sm border rounded-md">
            <Filter size={14} />
            <span className="hidden xs:inline">FILTERS</span>
          </button>
          <div className="border rounded-md px-2 sm:px-3 py-1">
            <span className="text-xs text-gray-500">ID: #003455MNP</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {/* Shipment 1 */}
        <div className="border rounded-lg p-2 sm:p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-medium">#003455MNP</span>
            <div className={`bg-${themeColor}-100 text-${themeColor}-600 px-2 py-1 rounded text-xs`}>84%</div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-[10px] sm:text-xs">87 Some Address</span>
            </div>
            <ArrowRight size={12} />
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-[10px] sm:text-xs">15 Some Address</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div className={`bg-${themeColor}-600 h-full rounded-full`} style={{ width: "84%" }}></div>
          </div>
        </div>

        {/* Shipment 2 */}
        <div className="border rounded-lg p-2 sm:p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-medium">#001432LDP</span>
            <div className={`bg-${themeColor}-100 text-${themeColor}-600 px-2 py-1 rounded text-xs`}>84%</div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-[10px] sm:text-xs">87 Some Address</span>
            </div>
            <ArrowRight size={12} />
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-[10px] sm:text-xs">15 Some Address</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div className={`bg-${themeColor}-600 h-full rounded-full`} style={{ width: "84%" }}></div>
          </div>
        </div>

        {/* Shipment Table */}
        <div className="border rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Weight
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destination
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Arrival
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm font-medium">#0124BCD</td>
                <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm">Electronics</td>
                <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm">329 kg</td>
                <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm">Bangalore</td>
                <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm">2 Hrs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

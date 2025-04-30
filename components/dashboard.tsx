"use client"

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { MetricCards } from "./metric-cards"
import { InventoryOverview } from "./inventory-overview"
import { ShipmentAnalytics } from "./shipment-analytics"
import { Spotlight } from "./spotlight"
import { Select } from 'antd';

export default function Dashboard() {
  const [activeSidebarItem, setActiveSidebarItem] = useState("dashboard")
  const [themeColor, setThemeColor] = useState("indigo")

  // Initial order of metric cards
  const [metricOrder, setMetricOrder] = useState([
    "payment-receivables",
    "payments-made",
    "total-purchases",
    "total-sales",
  ])

  // Initial order of sections
  const [sectionOrder, setSectionOrder] = useState(["inventory-overview", "shipment-analytics"])

  // Handle drag end for both metric cards and sections
  const handleDragEnd = (result: any) => {
    const { destination, source, type } = result

    // If dropped outside a droppable area or at the same position
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return
    }

    // Handle metric cards reordering
    if (type === "METRICS") {
      const newOrder = Array.from(metricOrder)
      const [removed] = newOrder.splice(source.index, 1)
      newOrder.splice(destination.index, 0, removed)
      setMetricOrder(newOrder)
    }

    // Handle sections reordering
    if (type === "SECTIONS") {
      const newOrder = Array.from(sectionOrder)
      const [removed] = newOrder.splice(source.index, 1)
      newOrder.splice(destination.index, 0, removed)
      setSectionOrder(newOrder)
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      <div className="w-full md:w-auto">
        <Sidebar activeItem={activeSidebarItem} setActiveItem={setActiveSidebarItem} themeColor={themeColor} />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header themeColor={themeColor} setThemeColor={setThemeColor} />
        <main className="flex-1 overflow-y-auto p-2 sm:p-4">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <span className="text-cyan-500 text-xl">R</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Hello, Rahul</h1>
                  <p className="text-gray-500 text-sm">ORUE PVT. LTD.</p>
                </div>
                <span className={`bg-${themeColor}-600 text-white text-xs px-3 py-2 rounded-md uppercase`}>
                  Customer
                </span>
              </div>
              <div className="flex items-center gap-2">
                  <Select
                    showSearch
                    placeholder="Last 30 days"
                    className="md:w-32 w-full"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                      { value: '0', label: 'Last 30 days' },
                      { value: '1', label: 'Last 90 days' },
                      { value: '2', label: 'Last 7 days' },
                    ]}
                  />
              </div>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
              {/* Draggable metric cards */}
              <Droppable droppableId="metrics" direction="horizontal" type="METRICS">
                {(provided:any) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
                  >
                    <MetricCards metricOrder={metricOrder} themeColor={themeColor} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              {/* Draggable sections */}
              <Droppable droppableId="sections" direction="horizontal" type="SECTIONS">
                {(provided:any) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6"
                  >
                    {sectionOrder.map((sectionId, index) => (
                      <Draggable key={sectionId} draggableId={sectionId} index={index}>
                        {(provided:any) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="touch-manipulation"
                          >
                            {sectionId === "inventory-overview" ? (
                              <InventoryOverview themeColor={themeColor} />
                            ) : (
                              <ShipmentAnalytics themeColor={themeColor} />
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            <div className="mt-4 sm:mt-6">
              <Spotlight themeColor={themeColor} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

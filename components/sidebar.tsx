"use client"

import { useState } from "react"
import {
  Box,
  LayoutDashboard,
  FileText,
  ShoppingCart,
  BarChart3,
  Package,
  Users,
  Settings,
  HelpCircle,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface SidebarProps {
  activeItem: string
  setActiveItem: (item: string) => void
  themeColor: string
}

export function Sidebar({ activeItem, setActiveItem, themeColor }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const sidebarItems = [
    { id: "dashboard", icon: LayoutDashboard },
    { id: "orders", icon: FileText },
    { id: "inventory", icon: Box },
    { id: "sales", icon: ShoppingCart },
    { id: "analytics", icon: BarChart3 },
    { id: "shipments", icon: Package },
    { id: "customers", icon: Users },
    { id: "settings", icon: Settings },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className={`md:hidden fixed top-0 left-0 z-30 p-4 ${isMobileMenuOpen ? "hidden" : "block"}`}>
        <button onClick={toggleMobileMenu} className={`p-2 rounded-md bg-${themeColor}-700 text-white`}>
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar for mobile (slide-in) */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMobileMenu}></div>
        <div className={`relative w-64 h-full bg-white flex flex-col`}>
          <div className={`h-16 flex items-center justify-between border-b bg-${themeColor}-700 px-4`}>
            <div className="w-10 h-10 relative">
              <Image src="/Group 19.svg" width={100} height={100} alt="logo-image" />
            </div>
            <button onClick={toggleMobileMenu} className="text-white">
              <X size={24} />
            </button>
          </div>
          <div className={`flex-1 flex flex-col py-4 bg-${themeColor}-700 overflow-y-auto`}>
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  className={cn(
                    `flex items-center px-4 h-12 w-full text-white/70 hover:text-white hover:bg-${themeColor}-600 transition-colors`,
                    activeItem === item.id && `text-white bg-${themeColor}-600`,
                  )}
                  onClick={() => {
                    setActiveItem(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <Icon size={20} className="mr-3" />
                  <span className="capitalize">{item.id}</span>
                </button>
              )
            })}
          </div>
          <div className={`p-4 bg-${themeColor}-700`}>
            <button
              className={`flex items-center px-4 h-12 w-full text-white/70 hover:text-white hover:bg-${themeColor}-600 rounded-md transition-colors`}
            >
              <HelpCircle size={20} className="mr-3" />
              <span>Help</span>
            </button>
            <button
              className={`flex items-center px-4 h-12 w-full text-white/70 hover:text-white hover:bg-${themeColor}-600 rounded-md transition-colors mt-2`}
            >
              <Settings size={20} className="mr-3" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex flex-col h-full bg-white">
        <div className={`h-16 flex items-center justify-center bg-${themeColor}-700`}>
          <div className="w-10 h-10 relative">
            <Image src="/Group 19.svg" width={100} height={100} alt="logo-image" />
          </div>
        </div>
        <div className={`flex-1 flex flex-col py-4 bg-${themeColor}-700`}>
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className={cn(
                  `flex items-center justify-center h-12 w-full text-white/70 hover:text-white hover:bg-${themeColor}-600 transition-colors`,
                  activeItem === item.id && `text-white bg-${themeColor}-600`,
                )}
                onClick={() => setActiveItem(item.id)}
              >
                <Icon size={20} />
              </button>
            )
          })}
        </div>
        <div className={`p-4 bg-${themeColor}-700`}>
          <button
            className={`flex items-center justify-center h-12 w-full text-white/70 hover:text-white hover:bg-${themeColor}-600 rounded-md transition-colors`}
          >
            <HelpCircle size={20} />
          </button>
          <button
            className={`flex items-center justify-center h-12 w-full text-white/70 hover:text-white hover:bg-${themeColor}-600 rounded-md transition-colors mt-2`}
          >
            <Settings size={20} />
          </button>
        </div>
      </div>
    </>
  )
}

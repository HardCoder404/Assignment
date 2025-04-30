"use client"

import { Bell, Calendar, Palette, Search, Settings } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface HeaderProps {
  themeColor: string
  setThemeColor: (color: string) => void
}

export function Header({ themeColor, setThemeColor }: HeaderProps) {
  const [showColorPicker, setShowColorPicker] = useState(false)
  const colorPickerRef = useRef<HTMLDivElement>(null)

  const colorOptions = [
    { name: "Indigo", value: "indigo" },
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Green", value: "green" },
    { name: "Purple", value: "purple" },
    { name: "Pink", value: "pink" },
    { name: "Orange", value: "orange" },
  ]

  // Close color picker when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        setShowColorPicker(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className={`h-16 border-b bg-${themeColor}-700 flex items-center px-4 sticky top-0 z-20`}>
      <div className="flex items-center gap-2 flex-1 ml-8 md:ml-0">
        <div className="relative flex-1 max-w-md hidden sm:flex">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
          <input
            type="text"
            placeholder="Search"
            className={`w-full bg-${themeColor}-600/50 border border-${themeColor}-600 rounded-md py-2 pl-10 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-${themeColor}-500`}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 text-white/70 hover:text-white rounded-md hidden sm:flex">
          <Calendar size={20} />
        </button>
        <button className="p-2 text-white/70 hover:text-white rounded-md">
          <Bell size={20} />
        </button>
        <div className="relative" ref={colorPickerRef}>
          <button
            className="p-2 text-white/70 hover:text-white rounded-md"
            onClick={() => setShowColorPicker(!showColorPicker)}
          >
            <Palette size={20} />
          </button>

          {showColorPicker && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <div className="px-4 py-2 text-gray-700 font-semibold">Select Theme Color</div>
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setThemeColor(color.value)
                    setShowColorPicker(false)
                  }}
                >
                  <div className={`w-4 h-4 rounded-full bg-${color.value}-600 mr-2`}></div>
                  {color.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="p-2 text-white/70 hover:text-white rounded-md">
          <Settings size={20} />
        </button>
        <div className="flex items-center gap-2 ml-2">
          <div className="text-right hidden sm:block">
            <p className="text-white text-xs">rohanshetty.xyz</p>
            <p className="text-white/70 text-xs">ETLS PVT. LTD.</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-700 font-bold">
            R
          </div>
        </div>
      </div>
    </header>
  )
}

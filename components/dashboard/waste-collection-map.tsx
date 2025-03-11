"use client"

import { useEffect, useState } from "react"
import { MapPin, Trash2 } from "lucide-react"

// Mock data for waste bins
const mockBins = [
  { id: 1, location: "Downtown", fillLevel: 85, status: "needs-collection" },
  { id: 2, location: "North District", fillLevel: 42, status: "ok" },
  { id: 3, location: "West Side", fillLevel: 67, status: "ok" },
  { id: 4, location: "East End", fillLevel: 91, status: "needs-collection" },
  { id: 5, location: "South Park", fillLevel: 23, status: "ok" },
]

export function WasteCollectionMap() {
  const [bins, setBins] = useState(mockBins)

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBins((prevBins) =>
        prevBins.map((bin) => {
          const newFillLevel = Math.min(100, bin.fillLevel + Math.floor(Math.random() * 5))
          return {
            ...bin,
            fillLevel: newFillLevel,
            status: newFillLevel > 80 ? "needs-collection" : "ok",
          }
        }),
      )
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[300px] w-full rounded-md border bg-muted/20">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Interactive map loading...</p>
      </div>

      {/* Simulated map pins */}
      <div className="absolute inset-0">
        {bins.map((bin) => (
          <div key={bin.id} className={`absolute flex flex-col items-center ${getBinPosition(bin.id)}`}>
            <div className="relative">
              <MapPin className={`h-8 w-8 ${bin.status === "needs-collection" ? "text-red-500" : "text-green-500"}`} />
              <Trash2 className="absolute top-1 left-1.5 h-5 w-5 text-white" />
            </div>
            <div className="mt-1 rounded-md bg-background/80 px-2 py-1 text-xs shadow">
              <p className="font-medium">{bin.location}</p>
              <p className={`text-xs ${bin.fillLevel > 80 ? "text-red-500" : "text-muted-foreground"}`}>
                {bin.fillLevel}% full
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Helper function to position bins on the "map"
function getBinPosition(id: number) {
  const positions = [
    "top-1/4 left-1/4",
    "top-1/3 right-1/4",
    "bottom-1/3 left-1/3",
    "bottom-1/4 right-1/3",
    "top-1/2 left-1/2",
  ]

  return positions[(id - 1) % positions.length]
}


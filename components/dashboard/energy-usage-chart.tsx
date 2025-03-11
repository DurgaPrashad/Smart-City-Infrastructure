"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

// Mock data for energy usage
const mockEnergyData = [
  { time: "00:00", residential: 120, commercial: 240, industrial: 180 },
  { time: "03:00", residential: 100, commercial: 200, industrial: 190 },
  { time: "06:00", residential: 140, commercial: 250, industrial: 200 },
  { time: "09:00", residential: 170, commercial: 380, industrial: 240 },
  { time: "12:00", residential: 200, commercial: 400, industrial: 280 },
  { time: "15:00", residential: 220, commercial: 390, industrial: 260 },
  { time: "18:00", residential: 250, commercial: 320, industrial: 220 },
  { time: "21:00", residential: 190, commercial: 280, industrial: 190 },
]

export function EnergyUsageChart() {
  const [data, setData] = useState(mockEnergyData)

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          residential: item.residential + (Math.random() * 10 - 5),
          commercial: item.commercial + (Math.random() * 15 - 7),
          industrial: item.industrial + (Math.random() * 12 - 6),
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorResidential" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorCommercial" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorIndustrial" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" />
        <YAxis label={{ value: "kWh", angle: -90, position: "insideLeft" }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="residential"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorResidential)"
          name="Residential"
        />
        <Area
          type="monotone"
          dataKey="commercial"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorCommercial)"
          name="Commercial"
        />
        <Area
          type="monotone"
          dataKey="industrial"
          stroke="#ffc658"
          fillOpacity={1}
          fill="url(#colorIndustrial)"
          name="Industrial"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}


"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

// Mock data for traffic flow
const mockTrafficData = [
  { time: "00:00", volume: 120, congestion: 10 },
  { time: "03:00", volume: 80, congestion: 5 },
  { time: "06:00", volume: 200, congestion: 30 },
  { time: "09:00", volume: 450, congestion: 80 },
  { time: "12:00", volume: 380, congestion: 60 },
  { time: "15:00", volume: 400, congestion: 65 },
  { time: "18:00", volume: 500, congestion: 90 },
  { time: "21:00", volume: 250, congestion: 40 },
]

export function TrafficFlowChart() {
  const [data, setData] = useState(mockTrafficData)

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          volume: Math.max(50, item.volume + (Math.random() * 40 - 20)),
          congestion: Math.min(100, Math.max(0, item.congestion + (Math.random() * 10 - 5))),
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="volume" name="Traffic Volume" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="congestion" name name="Traffic Volume" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="congestion" name="Congestion Level %" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}


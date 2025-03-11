"use client"

import { useEffect, useState } from "react"
import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

// Mock data for air quality
const mockAirQualityData = [
  { time: "00:00", pm25: 12, pm10: 25, co2: 420, ozone: 0.03 },
  { time: "03:00", pm25: 10, pm10: 22, co2: 410, ozone: 0.02 },
  { time: "06:00", pm25: 15, pm10: 28, co2: 430, ozone: 0.04 },
  { time: "09:00", pm25: 22, pm10: 35, co2: 450, ozone: 0.05 },
  { time: "12:00", pm25: 18, pm10: 30, co2: 440, ozone: 0.04 },
  { time: "15:00", pm25: 16, pm10: 27, co2: 435, ozone: 0.03 },
  { time: "18:00", pm25: 14, pm10: 26, co2: 425, ozone: 0.03 },
  { time: "21:00", pm25: 13, pm10: 24, co2: 415, ozone: 0.02 },
]

export function AirQualityMonitor() {
  const [data, setData] = useState(mockAirQualityData)
  const [selectedMetric, setSelectedMetric] = useState("pm25")

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          pm25: Math.max(5, item.pm25 + (Math.random() * 4 - 2)),
          pm10: Math.max(10, item.pm10 + (Math.random() * 6 - 3)),
          co2: Math.max(400, item.co2 + (Math.random() * 10 - 5)),
          ozone: Math.max(0.01, item.ozone + (Math.random() * 0.01 - 0.005)),
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { id: "pm25", name: "PM2.5", color: "#8884d8" },
    { id: "pm10", name: "PM10", color: "#82ca9d" },
    { id: "co2", name: "CO₂", color: "#ff7300" },
    { id: "ozone", name: "Ozone", color: "#0088fe" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {metrics.map((metric) => (
          <button
            key={metric.id}
            className={`rounded-md px-3 py-1 text-xs font-medium ${
              selectedMetric === metric.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            onClick={() => setSelectedMetric(metric.id)}
          >
            {metric.name}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          {metrics.map((metric) =>
            selectedMetric === metric.id || selectedMetric === "all" ? (
              <Line
                key={metric.id}
                type="monotone"
                dataKey={metric.id}
                name={metric.name}
                stroke={metric.color}
                activeDot={{ r: 8 }}
              />
            ) : null,
          )}
        </LineChart>
      </ResponsiveContainer>

      <div className="rounded-md bg-muted/50 p-3">
        <h4 className="font-medium">Air Quality Status</h4>
        <p className="text-sm text-muted-foreground">
          Current AQI: <span className="font-medium text-green-500">Good (42)</span>
        </p>
        <p className="text-xs text-muted-foreground">
          All pollutant levels are below WHO guidelines. Air quality is considered satisfactory.
        </p>
      </div>
    </div>
  )
}


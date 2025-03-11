import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EnergyUsageChart } from "@/components/dashboard/energy-usage-chart"
import { TrafficFlowChart } from "@/components/dashboard/traffic-flow-chart"
import { WasteCollectionMap } from "@/components/dashboard/waste-collection-map"
import { AirQualityMonitor } from "@/components/dashboard/air-quality-monitor"
import { CitizenReportsTable } from "@/components/dashboard/citizen-reports-table"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Smart City Dashboard"
        text="Monitor and analyze real-time data from your smart city infrastructure."
      />
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="energy">Energy</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="waste">Waste</TabsTrigger>
          <TabsTrigger value="environment">Environment</TabsTrigger>
          <TabsTrigger value="reports">Citizen Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Energy Consumption</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28.4 kWh</div>
                <p className="text-xs text-muted-foreground">-12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Traffic Congestion</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Low</div>
                <p className="text-xs text-muted-foreground">18% improvement</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Waste Collection</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">Bins collected today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Air Quality Index</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Good</div>
                <p className="text-xs text-muted-foreground">AQI 42</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Energy Usage</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <EnergyUsageChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Traffic Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <TrafficFlowChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Waste Collection Status</CardTitle>
              </CardHeader>
              <CardContent>
                <WasteCollectionMap />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Air Quality Monitoring</CardTitle>
                <CardDescription>Real-time air quality data from sensors across the city</CardDescription>
              </CardHeader>
              <CardContent>
                <AirQualityMonitor />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="energy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Energy Management Dashboard</CardTitle>
              <CardDescription>Detailed energy consumption and optimization data</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Energy management content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Management Dashboard</CardTitle>
              <CardDescription>Real-time traffic monitoring and congestion data</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Traffic management content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="waste" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Waste Management Dashboard</CardTitle>
              <CardDescription>Waste collection routes and bin status</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Waste management content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="environment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Environmental Monitoring Dashboard</CardTitle>
              <CardDescription>Air and water quality monitoring data</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Environmental monitoring content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Citizen Reports</CardTitle>
              <CardDescription>Recent issues reported by citizens</CardDescription>
            </CardHeader>
            <CardContent>
              <CitizenReportsTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}


"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle2, Clock, MapPin, MoreHorizontal, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data for citizen reports
const mockReports = [
  {
    id: "REP-1234",
    issue: "Pothole on Main Street",
    location: "Main St & 5th Ave",
    reportedBy: "John Doe",
    reportedAt: "2025-03-10T08:30:00",
    status: "pending",
    priority: "high",
  },
  {
    id: "REP-1235",
    issue: "Streetlight not working",
    location: "Oak Avenue",
    reportedBy: "Jane Smith",
    reportedAt: "2025-03-10T10:15:00",
    status: "in-progress",
    priority: "medium",
  },
  {
    id: "REP-1236",
    issue: "Garbage not collected",
    location: "Pine Street",
    reportedBy: "Robert Johnson",
    reportedAt: "2025-03-09T16:45:00",
    status: "resolved",
    priority: "low",
  },
  {
    id: "REP-1237",
    issue: "Water leak from hydrant",
    location: "Maple Road",
    reportedBy: "Sarah Williams",
    reportedAt: "2025-03-10T07:20:00",
    status: "pending",
    priority: "high",
  },
  {
    id: "REP-1238",
    issue: "Fallen tree blocking sidewalk",
    location: "Cedar Lane",
    reportedBy: "Michael Brown",
    reportedAt: "2025-03-09T14:10:00",
    status: "in-progress",
    priority: "medium",
  },
]

export function CitizenReportsTable() {
  const [reports, setReports] = useState(mockReports)

  const handleStatusChange = (id: string, newStatus: string) => {
    setReports((prevReports) =>
      prevReports.map((report) => (report.id === id ? { ...report, status: newStatus } : report)),
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="flex items-center gap-1 text-amber-500 border-amber-200 bg-amber-50">
            <Clock className="h-3 w-3" />
            <span>Pending</span>
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="outline" className="flex items-center gap-1 text-blue-500 border-blue-200 bg-blue-50">
            <AlertTriangle className="h-3 w-3" />
            <span>In Progress</span>
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="outline" className="flex items-center gap-1 text-green-500 border-green-200 bg-green-50">
            <CheckCircle2 className="h-3 w-3" />
            <span>Resolved</span>
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-500">High</Badge>
      case "medium":
        return <Badge className="bg-amber-500">Medium</Badge>
      case "low":
        return <Badge className="bg-green-500">Low</Badge>
      default:
        return <Badge>{priority}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Issue</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Reported</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell className="font-medium">{report.id}</TableCell>
            <TableCell>{report.issue}</TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                <span>{report.location}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs">{report.reportedBy}</span>
                </div>
                <span className="text-xs text-muted-foreground">{formatDate(report.reportedAt)}</span>
              </div>
            </TableCell>
            <TableCell>{getStatusBadge(report.status)}</TableCell>
            <TableCell>{getPriorityBadge(report.priority)}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleStatusChange(report.id, "pending")}>
                    Mark as Pending
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleStatusChange(report.id, "in-progress")}>
                    Mark as In Progress
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleStatusChange(report.id, "resolved")}>
                    Mark as Resolved
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Assign to Team</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


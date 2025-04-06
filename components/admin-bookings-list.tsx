"use client"

import { useState } from "react"
import { CalendarIcon, ChevronDown, Download, MoreHorizontal, Search } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Sample booking data
const bookings = [
  {
    id: "B-1001",
    customer: "John Smith",
    email: "john@example.com",
    bicycle: "Alpine Explorer",
    date: new Date(2025, 3, 10),
    startTime: "10:00 AM",
    duration: "2 hours",
    status: "active",
    total: 30.0,
  },
  {
    id: "B-1002",
    customer: "Emma Wilson",
    email: "emma@example.com",
    bicycle: "City Cruiser",
    date: new Date(2025, 3, 10),
    startTime: "11:00 AM",
    duration: "4 hours",
    status: "active",
    total: 48.0,
  },
  {
    id: "B-1003",
    customer: "Michael Brown",
    email: "michael@example.com",
    bicycle: "E-Power Rider",
    date: new Date(2025, 3, 11),
    startTime: "9:00 AM",
    duration: "8 hours",
    status: "pending",
    total: 200.0,
  },
  {
    id: "B-1004",
    customer: "Sarah Davis",
    email: "sarah@example.com",
    bicycle: "Trail Blazer Pro",
    date: new Date(2025, 3, 12),
    startTime: "2:00 PM",
    duration: "2 hours",
    status: "completed",
    total: 36.0,
  },
  {
    id: "B-1005",
    customer: "Robert Johnson",
    email: "robert@example.com",
    bicycle: "Urban Glider",
    date: new Date(2025, 3, 15),
    startTime: "10:00 AM",
    duration: "4 hours",
    status: "cancelled",
    total: 56.0,
  },
  {
    id: "B-1006",
    customer: "Jennifer Lee",
    email: "jennifer@example.com",
    bicycle: "Summit Rider",
    date: new Date(2025, 3, 15),
    startTime: "1:00 PM",
    duration: "4 hours",
    status: "pending",
    total: 80.0,
  },
  {
    id: "B-1007",
    customer: "David Wilson",
    email: "david@example.com",
    bicycle: "Volt Cruiser",
    date: new Date(2025, 3, 16),
    startTime: "9:00 AM",
    duration: "8 hours",
    status: "pending",
    total: 224.0,
  },
]

export default function AdminBookingsList() {
  const [date, setDate] = useState<Date>()
  const [searchQuery, setSearchQuery] = useState("")

  // Filter bookings based on search query and date
  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.bicycle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDate = !date || format(booking.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")

    return matchesSearch && matchesDate
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search bookings..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-1">
                Status <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Active</DropdownMenuItem>
              <DropdownMenuItem>Pending</DropdownMenuItem>
              <DropdownMenuItem>Completed</DropdownMenuItem>
              <DropdownMenuItem>Cancelled</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" className="gap-1">
            <Download className="h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Bicycle</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>
                    <div>
                      <div>{booking.customer}</div>
                      <div className="text-xs text-muted-foreground">{booking.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{booking.bicycle}</TableCell>
                  <TableCell>
                    <div>
                      <div>{format(booking.date, "MMM d, yyyy")}</div>
                      <div className="text-xs text-muted-foreground">{booking.startTime}</div>
                    </div>
                  </TableCell>
                  <TableCell>{booking.duration}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        booking.status === "active"
                          ? "default"
                          : booking.status === "pending"
                            ? "outline"
                            : booking.status === "completed"
                              ? "secondary"
                              : "destructive"
                      }
                    >
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>${booking.total.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit booking</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Cancel booking</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No bookings found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


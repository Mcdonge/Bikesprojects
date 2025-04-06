"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, MoreHorizontal, Plus, Search } from "lucide-react"

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
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Sample bicycle data
const bicycles = [
  {
    id: 1,
    name: "Alpine Explorer",
    type: "Mountain",
    hourlyRate: 15,
    image: "/bike8.png?height=100&width=100",
    status: "available",
    condition: "Excellent",
    lastMaintenance: "2025-03-01",
  },
  {
    id: 2,
    name: "Trail Blazer Pro",
    type: "Mountain",
    hourlyRate: 18,
    image: "/bike8.png?height=100&width=100",
    status: "available",
    condition: "Good",
    lastMaintenance: "2025-02-15",
  },
  {
    id: 3,
    name: "Summit Rider",
    type: "Mountain",
    hourlyRate: 20,
    image: "/bike7.png?height=100&width=100",
    status: "booked",
    condition: "Excellent",
    lastMaintenance: "2025-03-05",
  },
  {
    id: 4,
    name: "City Cruiser",
    type: "Road",
    hourlyRate: 12,
    image: "/bike6.png?height=100&width=100",
    status: "available",
    condition: "Good",
    lastMaintenance: "2025-02-20",
  },
  {
    id: 5,
    name: "Urban Glider",
    type: "Road",
    hourlyRate: 14,
    image: "/bike5.png?height=100&width=100",
    status: "available",
    condition: "Fair",
    lastMaintenance: "2025-01-10",
  },
  {
    id: 6,
    name: "Speedster Elite",
    type: "Road",
    hourlyRate: 16,
    image: "/bike4.png?height=100&width=100",
    status: "maintenance",
    condition: "Needs repair",
    lastMaintenance: "2025-03-10",
  },
  {
    id: 7,
    name: "E-Power Rider",
    type: "Electric",
    hourlyRate: 25,
    image: "/bike3.png?height=100&width=100",
    status: "available",
    condition: "Excellent",
    lastMaintenance: "2025-03-08",
  },
  {
    id: 8,
    name: "Volt Cruiser",
    type: "Electric",
    hourlyRate: 28,
    image: "/bike2.png?height=100&width=100",
    status: "booked",
    condition: "Good",
    lastMaintenance: "2025-02-25",
  },
  {
    id: 9,
    name: "Electra Glide",
    type: "Electric",
    hourlyRate: 30,
    image: "/bike1.png?height=100&width=100",
    status: "available",
    condition: "Excellent",
    lastMaintenance: "2025-03-12",
  },
]

export default function AdminBicyclesList() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter bicycles based on search query
  const filteredBicycles = bicycles.filter(
    (bike) =>
      bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search bicycles..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-1">
                Type <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Mountain</DropdownMenuItem>
              <DropdownMenuItem>Road</DropdownMenuItem>
              <DropdownMenuItem>Electric</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-1">
                Status <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Available</DropdownMenuItem>
              <DropdownMenuItem>Booked</DropdownMenuItem>
              <DropdownMenuItem>Maintenance</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="gap-1">
            <Plus className="h-4 w-4" /> Add Bicycle
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Bicycle</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Hourly Rate</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Last Maintenance</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBicycles.length > 0 ? (
              filteredBicycles.map((bike) => (
                <TableRow key={bike.id}>
                  <TableCell className="font-medium">{bike.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-md overflow-hidden">
                        <Image src={bike.image || "/download.png"} alt={bike.name} fill className="object-cover" />
                      </div>
                      <span>{bike.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{bike.type}</TableCell>
                  <TableCell>${bike.hourlyRate.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        bike.status === "available" ? "outline" : bike.status === "booked" ? "secondary" : "destructive"
                      }
                    >
                      {bike.status.charAt(0).toUpperCase() + bike.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{bike.condition}</TableCell>
                  <TableCell>{bike.lastMaintenance}</TableCell>
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
                        <DropdownMenuItem>Edit details</DropdownMenuItem>
                        <DropdownMenuItem>View bookings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Mark as maintenance</DropdownMenuItem>
                        <DropdownMenuItem>Mark as available</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No bicycles found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


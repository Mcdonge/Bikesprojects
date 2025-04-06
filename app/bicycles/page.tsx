import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

// Sample bicycle data
const bicycles = [
  {
    id: 1,
    name: "Alpine Explorer",
    type: "Mountain",
    hourlyRate: 15,
    image: "/bike16.jpeg?height=300&width=400",
    available: true,
    features: ["21-speed", "Front suspension", "Disc brakes"],
  },
  {
    id: 2,
    name: "Trail Blazer Pro",
    type: "Mountain",
    hourlyRate: 18,
    image: "/bike17.jpeg?height=300&width=400",
    available: true,
    features: ["24-speed", "Full suspension", "Hydraulic disc brakes"],
  },
  {
    id: 3,
    name: "Summit Rider",
    type: "Mountain",
    hourlyRate: 20,
    image: "/bike18.jpeg?height=300&width=400",
    available: false,
    features: ["27-speed", "Carbon frame", "Tubeless tires"],
  },
  {
    id: 4,
    name: "City Cruiser",
    type: "Road",
    hourlyRate: 12,
    image: "/bike19.jpeg?height=300&width=400",
    available: true,
    features: ["7-speed", "Step-through frame", "Basket"],
  },
  {
    id: 5,
    name: "Urban Glider",
    type: "Road",
    hourlyRate: 14,
    image: "/bike10.jpeg?height=300&width=400",
    available: true,
    features: ["8-speed", "Lightweight frame", "Fenders"],
  },
  {
    id: 6,
    name: "Speedster Elite",
    type: "Road",
    hourlyRate: 16,
    image: "/bike9.jpeg?height=300&width=400",
    available: true,
    features: ["11-speed", "Carbon fork", "Drop handlebars"],
  },
  {
    id: 7,
    name: "E-Power Rider",
    type: "Electric",
    hourlyRate: 25,
    image: "/bike20.jpeg?height=300&width=400",
    available: true,
    features: ["350W motor", "Range: 40 miles", "Pedal assist"],
  },
  {
    id: 8,
    name: "Volt Cruiser",
    type: "Electric",
    hourlyRate: 28,
    image: "/bike21.jpeg?height=300&width=400",
    available: false,
    features: ["500W motor", "Range: 50 miles", "Throttle control"],
  },
  {
    id: 9,
    name: "Electra Glide",
    type: "Electric",
    hourlyRate: 30,
    image: "/bike22.jpeg?height=300&width=400",
    available: true,
    features: ["750W motor", "Range: 60 miles", "LCD display"],
  },
]

function BicycleList() {  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bicycles.map((bike) => (
        <Card key={bike.id} className="overflow-hidden bg-maroon-200/80 hover:bg-maroon-200/90 transition-colors">
          <div className="relative h-48">
            <Image src={bike.image || "/placeholder.svg"} alt={bike.name} fill className="object-cover" />
            {!bike.available && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <Badge variant="destructive" className="text-lg py-1.5">
                  Currently Booked
                </Badge>
              </div>
            )}
          </div>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">{bike.name}</h3>
              <Badge variant="outline">{bike.type}</Badge>
            </div>
            <p className="text-muted-foreground mb-4">{bike.features.join(" • ")}</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold">${bike.hourlyRate}</span>
                <span className="text-muted-foreground"> / hour</span>
              </div>
              <Badge variant={bike.available ? "outline" : "secondary"}>
                {bike.available ? "Available" : "Booked"}
              </Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={bike.available ? "default" : "outline"} disabled={!bike.available}>
              <Link href={`/bicycles/${bike.id}`} className="w-full">
                {bike.available ? "Book Now" : "View Details"}
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function BicycleListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <Skeleton className="h-48 w-full" />
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-2">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-5 w-20" />
            </div>
            <Skeleton className="h-4 w-full mb-4" />
            <div className="flex justify-between items-center">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-5 w-20" />
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default function BicyclesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-muted py-10">
        <div className="container">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Available Bicycles</h1>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filter Bicycles</SheetTitle>
                    <SheetDescription>Narrow down your search with these filters.</SheetDescription>
                  </SheetHeader>

                  <div className="py-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Bicycle Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mountain" />
                          <Label htmlFor="mountain">Mountain Bikes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="road" />
                          <Label htmlFor="road">Road Bikes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="electric" />
                          <Label htmlFor="electric">Electric Bikes</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Price Range (per hour)</h3>
                      <div className="space-y-4">
                        <Slider defaultValue={[10, 30]} min={5} max={50} step={1} />
                        <div className="flex justify-between">
                          <span>$5</span>
                          <span>$50</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Availability</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="available" defaultChecked />
                          <Label htmlFor="available">Available Now</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="all" />
                          <Label htmlFor="all">Show All</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Features</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="suspension" />
                          <Label htmlFor="suspension">Suspension</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="disc-brakes" />
                          <Label htmlFor="disc-brakes">Disc Brakes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lightweight" />
                          <Label htmlFor="lightweight">Lightweight Frame</Label>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </SheetContent>
              </Sheet>

              <Badge variant="outline" className="gap-1">
                Available Only
                <button className="ml-1 rounded-full h-4 w-4 bg-muted-foreground/20 flex items-center justify-center hover:bg-muted-foreground/30">
                  <span className="sr-only">Remove filter</span>
                  <span aria-hidden="true" className="text-xs">
                    ×
                  </span>
                </button>
              </Badge>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Select defaultValue="recommended">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Suspense fallback={<BicycleListSkeleton />}>
            <BicycleList />
          </Suspense>
        </div>
      </section>
    </main>
  )
}


"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample bicycle data
const bicycles = {
  mountain: [
    {
      id: 1,
      name: "Alpine Explorer",
      type: "Mountain",
      hourlyRate: 15,
      image: "/bike22.jpeg?height=300&width=400",
      available: true,
    },
    {
      id: 2,
      name: "Trail Blazer Pro",
      type: "Mountain",
      hourlyRate: 18,
      image: "/bike13.jpeg?height=300&width=400",
      available: true,
    },
    {
      id: 3,
      name: "Summit Rider",
      type: "Mountain",
      hourlyRate: 20,
      image: "/bike24.jpeg?height=300&width=400",
      available: false,
    },
  ],
  road: [
    {
      id: 4,
      name: "City Cruiser",
      type: "Road",
      hourlyRate: 12,
      image: "/bike25.jpeg?height=300&width=400",
      available: true,
    },
    {
      id: 5,
      name: "Urban Glider",
      type: "Road",
      hourlyRate: 14,
      image: "/bike26.jpeg?height=300&width=400",
      available: true,
    },
    {
      id: 6,
      name: "Speedster Elite",
      type: "Road",
      hourlyRate: 16,
      image: "/bike27.jpeg?height=300&width=400",
      available: true,
    },
  ],
  electric: [
    {
      id: 7,
      name: "E-Power Rider",
      type: "Electric",
      hourlyRate: 25,
      image: "/bike12.jpeg?height=300&width=400",
      available: true,
    },
    {
      id: 8,
      name: "Volt Cruiser",
      type: "Electric",
      hourlyRate: 28,
      image: "/bike21.jpeg?height=300&width=400",
      available: false,
    },
    {
      id: 9,
      name: "Electra Glide",
      type: "Electric",
      hourlyRate: 30,
      image: "/bike28.jpeg?height=300&width=400",
      available: true,
    },
  ],
}

export default function FeaturedBicycles() {
  const [activeTab, setActiveTab] = useState("mountain")

  return (
    <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Featured Bicycles</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Browse our selection of high-quality bicycles available for rent. We have options for every type of rider.
          </p>
        </div>

        <Tabs defaultValue="mountain" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="mountain">Mountain Bikes</TabsTrigger>
              <TabsTrigger value="road">Road Bikes</TabsTrigger>
              <TabsTrigger value="electric">Electric Bikes</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(bicycles).map(([category, bikes]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bikes.map((bike) => (
                  <Card key={bike.id} className="overflow-hidden bg-maroon-200/80 hover:bg-maroon-200/90 transition-colors">
                    <div className="relative h-48">
                      <Image src={bike.image || "/bike14.jpeg"} alt={bike.name} fill className="object-cover" />
                      {!bike.available && (
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                          <Badge variant="destructive" className="text-lg py-1.5">
                            Currently Booked
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-1">{bike.name}</h3>
                      <p className="text-muted-foreground mb-4">{bike.type} Bike</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">Ksh {bike.hourlyRate}/hr</span>
                        <Badge variant="outline">{bike.available ? "Available" : "Booked"}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        variant={bike.available ? "default" : "outline"}
                        disabled={!bike.available}
                      >
                        <Link href={`/bicycles/${bike.id}`} className="w-full">
                          {bike.available ? "Book Now" : "View Details"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/bicycles">
              View All Bicycles
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


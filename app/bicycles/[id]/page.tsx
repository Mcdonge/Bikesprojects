import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, Info, MapPin, Shield, Star } from "lucide-react"
import type { LucideProps } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingForm from "@/components/booking-form"

// Sample bicycle data
const bicycles = [
  {
    id: 1,
    name: "Alpine Explorer",
    type: "Mountain",
    hourlyRate: 15,
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/bike9.jpeg?height=300&width=400",
      "/bike10.jpeg?height=300&width=400",
      "/bike11.jpeg?height=300&width=400",
      "/bike12.jpeg?height=300&width=400",
    ],
    available: true,
    features: ["21-speed", "Front suspension", "Disc brakes"],
    description:
      "The Alpine Explorer is a versatile mountain bike designed for trail riding and off-road adventures. With its durable frame and responsive handling, it's perfect for exploring mountain trails and rugged terrain.",
    specifications: {
      frame: "Aluminum alloy",
      fork: "SR Suntour XCT",
      shifters: "Shimano Altus",
      brakes: "Tektro hydraulic disc",
      wheels: "27.5-inch",
      tires: 'Maxxis Ardent 2.25"',
      weight: "13.5 kg",
    },
    location: "Main Store - Downtown",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "City Cruiser",
    type: "Urban",
    hourlyRate: 12,
    image: "/bike2.jpeg",
    gallery: [
      "/bike2.jpeg",
      "/bike3.jpeg",
      "/bike4.jpeg",
    ],
    available: true,
    features: ["7-speed", "Comfort saddle", "Fenders"],
    description: "Perfect for city commuting and casual rides around town.",
    specifications: {
      frame: "Steel",
      fork: "Rigid",
      shifters: "Shimano Tourney",
      brakes: "V-brakes",
      wheels: "26-inch",
      tires: 'Schwalbe Marathon 1.75"',
      weight: "15 kg",
    },
    location: "City Center Branch",
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 3,
    name: "Road Racer",
    type: "Road",
    hourlyRate: 20,
    image: "/bike5.jpeg",
    gallery: [
      "/bike5.jpeg",
      "/bike6.jpeg",
      "/bike7.jpeg",
    ],
    available: true,
    features: ["18-speed", "Carbon frame", "Drop handlebars"],
    description: "Built for speed and long-distance road cycling.",
    specifications: {
      frame: "Carbon fiber",
      fork: "Carbon",
      shifters: "Shimano 105",
      brakes: "Dual-pivot caliper",
      wheels: "700c",
      tires: 'Continental Grand Prix 25c',
      weight: "8.5 kg",
    },
    location: "Sports Complex Branch",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: "Electric Commuter",
    type: "E-Bike",
    hourlyRate: 25,
    image: "/bike8.jpeg",
    gallery: [
      "/bike8.jpeg",
      "/bike9.jpeg",
      "/bike10.jpeg",
    ],
    available: true,
    features: ["Electric assist", "7-speed", "LED lights"],
    description: "Make your commute effortless with this electric-assist bicycle.",
    specifications: {
      frame: "Aluminum",
      motor: "250W hub motor",
      battery: "36V 10Ah",
      range: "50-80 km",
      shifters: "Shimano Nexus",
      brakes: "Hydraulic disc",
      wheels: "27.5-inch",
      weight: "22 kg",
    },
    location: "Tech Park Branch",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 5,
    name: "Hybrid Explorer",
    type: "Hybrid",
    hourlyRate: 18,
    image: "/bike11.jpeg",
    gallery: [
      "/bike11.jpeg",
      "/bike12.jpeg",
      "/bike13.jpeg",
    ],
    available: true,
    features: ["21-speed", "Suspension fork", "Rack mounts"],
    description: "Versatile hybrid bike perfect for both city and light trail riding.",
    specifications: {
      frame: "Aluminum",
      fork: "SR Suntour XCT",
      shifters: "Shimano Acera",
      brakes: "Mechanical disc",
      wheels: "700c",
      tires: 'Schwalbe Marathon Plus 35c',
      weight: "12.5 kg",
    },
    location: "University Branch",
    rating: 4.6,
    reviews: 178,
  }
]

// Add generateStaticParams function
export async function generateStaticParams() {
  return bicycles.map((bike) => ({
    id: bike.id.toString(),
  }))
}

export default function BicycleDetailPage({ params }: { params: { id: string } }) {
  const bikeId = Number.parseInt(params.id)
  const bike = bicycles.find((b) => b.id === bikeId) || bicycles[0]

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container py-8">
        <div className="flex flex-col gap-2 mb-6">
          <Link href="/bicycles" className="text-muted-foreground hover:underline">
            ← Back to bicycles
          </Link>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{bike.name}</h1>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{bike.type}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span>
                {bike.rating} ({bike.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{bike.location}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image
                src={bike.image || "/bike16.jpeg"}
                alt={bike.name}
                width={800}
                height={600}
                className="object-cover w-full h-[400px]"
              />
              {!bike.available && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <Badge variant="destructive" className="text-lg py-1.5">
                    Currently Booked
                  </Badge>
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-2 mb-8">
              {bike.gallery.map((img, i) => (
                <div key={i} className="relative rounded-md overflow-hidden">
                  <Image
                    src={img || "/bike8.jpeg"}
                    alt={`${bike.name} view ${i + 1}`}
                    width={200}
                    height={150}
                    className="object-cover w-full h-24"
                  />
                </div>
              ))}
            </div>

            <Tabs defaultValue="description">
              <TabsList className="mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <p>{bike.description}</p>

                <h3 className="text-lg font-semibold mt-4">Features</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {bike.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold mt-4">Rental Includes</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Helmet</li>
                  <li>Lock</li>
                  <li>Basic repair kit</li>
                  <li>Water bottle holder</li>
                </ul>
              </TabsContent>

              <TabsContent value="specifications">
                <div className="space-y-2">
                  {Object.entries(bike.specifications).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 py-2">
                      <div className="font-medium capitalize">{key}</div>
                      <div>{value}</div>
                      <Separator className="col-span-2 mt-2" />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">{bike.rating}</div>
                    <div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(bike.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">Based on {bike.reviews} reviews</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between">
                          <div className="font-medium">John D.</div>
                          <div className="text-sm text-muted-foreground">2 weeks ago</div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              className={`w-4 h-4 ${
                                j < 5 - (i % 2) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm">
                          {i === 0 && "Great bike! It was in excellent condition and perfect for the mountain trails."}
                          {i === 1 && "The bike was comfortable and the gears shifted smoothly. Would rent again."}
                          {i === 2 &&
                            "Had a wonderful experience with this bike. The suspension handled the rough terrain well."}
                        </p>
                        <Separator className="mt-4" />
                      </div>
                    ))}

                    <Button variant="outline">View All Reviews</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <div className="sticky top-4">
              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <div className="mb-4">
                  <div className="text-2xl font-bold">${bike.hourlyRate}</div>
                  <div className="text-muted-foreground">per hour</div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Flexible booking</div>
                      <div className="text-sm text-muted-foreground">
                        Book for as little as 1 hour or for multiple days
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Real-time availability</div>
                      <div className="text-sm text-muted-foreground">Our system shows you exactly what's available</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Insurance included</div>
                      <div className="text-sm text-muted-foreground">Basic insurance is included with all rentals</div>
                    </div>
                  </div>
                </div>

                {bike.available ? (
                  <BookingForm bikeId={bike.id} hourlyRate={bike.hourlyRate} />
                ) : (
                  <div className="text-center p-4 bg-muted rounded-md">
                    <Info className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                    <h3 className="font-medium mb-1">Currently Booked</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This bicycle is currently unavailable. Please check back later or browse other options.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/bicycles">View Other Bicycles</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


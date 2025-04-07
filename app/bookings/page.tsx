"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Bike, CreditCard, CheckCircle2, XCircle, AlertCircle, BikeIcon, History, PlusCircle } from "lucide-react"

// Mock data - Replace with actual data from your backend
const mockBookings = {
  current: [
    {
      id: "BK001",
      bike: {
        name: "Mountain Pro X1",
        image: "/bike1.jpeg",
        type: "Mountain Bike",
      },
      date: "2024-04-10",
      duration: "3 days",
      price: 1500,
      status: "confirmed",
      pickupLocation: "Moi University Main Campus, Admin Block",
      returnDate: "2024-04-13",
    },
    {
      id: "BK002",
      bike: {
        name: "City Cruiser",
        image: "/bike2.jpeg",
        type: "City Bike",
      },
      date: "2024-04-15",
      duration: "1 day",
      price: 500,
      status: "pending",
      pickupLocation: "Moi University, MABS Building",
      returnDate: "2024-04-16",
    },
  ],
  past: [
    {
      id: "BK003",
      bike: {
        name: "Road Racer 2000",
        image: "/bike3.jpeg",
        type: "Road Bike",
      },
      date: "2024-03-20",
      duration: "2 days",
      price: 1000,
      status: "completed",
      pickupLocation: "Moi University, Kesses Gate",
      returnDate: "2024-03-22",
    },
    {
      id: "BK004",
      bike: {
        name: "Hybrid Explorer",
        image: "/bike4.jpeg",
        type: "Hybrid Bike",
      },
      date: "2024-03-15",
      duration: "1 day",
      price: 600,
      status: "completed",
      pickupLocation: "Moi University, Chepterit",
      returnDate: "2024-03-16",
    },
  ],
}

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<"current" | "past">("current")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle2 className="h-4 w-4 mr-1" />
            Confirmed
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <AlertCircle className="h-4 w-4 mr-1" />
            Pending
          </Badge>
        )
      case "completed":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <CheckCircle2 className="h-4 w-4 mr-1" />
            Completed
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <main>
      {/* New Header Section */}
      <div className="bg-gradient-to-r from-maroon-600 to-maroon-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
              <p className="text-maroon-100">
                Manage your bike rentals around Moi University
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button className="bg-white text-maroon-600 hover:bg-maroon-100">
                <PlusCircle className="h-5 w-5 mr-2" />
                New Booking
              </Button>
              <Button variant="outline" className="bg-white text-maroon-600 hover:bg-blue-500 hover:text-white">
                <History className="h-5 w-5 mr-2" />
                Booking History
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  <BikeIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-maroon-100">Active Bookings</p>
                  <p className="text-2xl font-bold">{mockBookings.current.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-maroon-100">Completed Trips</p>
                  <p className="text-2xl font-bold">{mockBookings.past.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-maroon-100">Total Spent</p>
                  <p className="text-2xl font-bold">
                    Ksh {mockBookings.past.reduce((sum, booking) => sum + booking.price, 0).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8 border-b">
          <button
            onClick={() => setActiveTab("current")}
            className={`pb-4 px-4 font-medium ${
              activeTab === "current"
                ? "text-maroon-600 border-b-2 border-maroon-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Current Bookings
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`pb-4 px-4 font-medium ${
              activeTab === "past"
                ? "text-maroon-600 border-b-2 border-maroon-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Past Bookings
          </button>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {mockBookings[activeTab].map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bike Image and Info */}
                <div className="flex items-start gap-4">
                  <div className="relative h-24 w-24 rounded-lg overflow-hidden">
                    <img
                      src={booking.bike.image}
                      alt={booking.bike.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{booking.bike.name}</h3>
                    <p className="text-gray-600">{booking.bike.type}</p>
                    {getStatusBadge(booking.status)}
                  </div>
                </div>

                {/* Booking Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-5 w-5 text-maroon-600" />
                    <span>Pickup: {new Date(booking.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-5 w-5 text-maroon-600" />
                    <span>Duration: {booking.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5 text-maroon-600" />
                    <span>{booking.pickupLocation}</span>
                  </div>
                </div>

                {/* Actions and Price */}
                <div className="flex flex-col justify-between">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-maroon-600">Ksh {booking.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Total Amount</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {activeTab === "current" && (
                      <>
                        <Button variant="outline" className="flex-1">
                          Modify
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Cancel
                        </Button>
                      </>
                    )}
                    {activeTab === "past" && (
                      <Button className="flex-1 bg-maroon-600 hover:bg-maroon-700">
                        Book Again
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Booking Summary</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Booking ID: {booking.id}</p>
                      <p>Return Date: {new Date(booking.returnDate).toLocaleDateString()}</p>
                      <p>Payment Method: M-Pesa</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Need Help?</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Contact our support team for any assistance with your booking.
                    </p>
                    <Button variant="outline" size="sm">
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {mockBookings[activeTab].length === 0 && (
            <div className="text-center py-12">
              <Bike className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No {activeTab} bookings</h3>
              <p className="text-gray-600 mb-6">
                {activeTab === "current"
                  ? "You don't have any active bookings at the moment."
                  : "You haven't made any past bookings yet."}
              </p>
              <Button asChild>
                <a href="/bicycles">Browse Bikes</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
} 
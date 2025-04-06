"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HeroSection() {
  const [date, setDate] = useState<Date>()
  const [duration, setDuration] = useState("")
  const [packageType, setPackageType] = useState("")

  return (
    <section className="relative">
       <div className="absolute inset-0 z-0 overflow-hidden">
    <Image
      src="/bike6.jpg"
      alt="Cyclists riding through a scenic mountain path"
      fill
      priority
      className="object-cover object-center brightness-[0.7]"
      sizes="fit"
      quality={100}
    />
  </div>

      <div className="relative z-10 container flex flex-col items-center justify-center text-center py-20 md:py-32 lg:py-40 text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Explore the World on Two Wheels
        </h1>
        <p className="max-w-[700px] text-lg md:text-xl mb-10">
          Rent high-quality bicycles for your adventure. Choose from our wide selection and book your perfect ride
          today.
        </p>

        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-left">Start Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white/20",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white text-black">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-left">Duration</label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="w-full bg-white/20">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Hour</SelectItem>
                  <SelectItem value="2">2 Hours</SelectItem>
                  <SelectItem value="4">4 Hours</SelectItem>
                  <SelectItem value="8">8 Hours</SelectItem>
                  <SelectItem value="24">Full Day (24 Hours)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-left">Package</label>
              <Select value={packageType} onValueChange={setPackageType}>
                <SelectTrigger className="w-full bg-white/20">
                  <SelectValue placeholder="Select package" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="couple">Couple</SelectItem>
                  <SelectItem value="group">Group (3-5)</SelectItem>
                  <SelectItem value="large-group">Large Group (6+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-full mt-4 bg-primary hover:bg-primary/90" size="lg">
            <Link href="/bicycles">Find Available Bicycles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


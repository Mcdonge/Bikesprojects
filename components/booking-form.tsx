"use client"

import { useState } from "react"
import { format, addHours } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface BookingFormProps {
  bikeId: number
  price: number
}

export default function BookingForm({ bikeId, price }: BookingFormProps) {
  const [date, setDate] = useState<Date>()
  const [startTime, setStartTime] = useState("")
  const [duration, setDuration] = useState("")
  const [packageType, setPackageType] = useState("individual")

  // Calculate end time based on start time and duration
  const endTime =
    startTime && duration
      ? format(addHours(new Date(`2023-01-01T${startTime}`), Number.parseInt(duration)), "h:mm a")
      : ""

  // Calculate total cost
  const hours = duration ? Number.parseInt(duration) : 0
  const packageMultiplier =
    packageType === "individual"
      ? 1
      : packageType === "couple"
        ? 1.8
        : // 10% discount for 2 bikes
          packageType === "group"
          ? 2.55
          : 1 // 15% discount for 3 bikes

  const totalCost = price * hours * packageMultiplier

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Start Time</label>
          <Select value={startTime} onValueChange={setStartTime}>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="09:00">9:00 AM</SelectItem>
              <SelectItem value="10:00">10:00 AM</SelectItem>
              <SelectItem value="11:00">11:00 AM</SelectItem>
              <SelectItem value="12:00">12:00 PM</SelectItem>
              <SelectItem value="13:00">1:00 PM</SelectItem>
              <SelectItem value="14:00">2:00 PM</SelectItem>
              <SelectItem value="15:00">3:00 PM</SelectItem>
              <SelectItem value="16:00">4:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Duration</label>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger>
              <SelectValue placeholder="Select hours" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 hour</SelectItem>
              <SelectItem value="2">2 hours</SelectItem>
              <SelectItem value="4">4 hours</SelectItem>
              <SelectItem value="8">8 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Package</label>
        <Select value={packageType} onValueChange={setPackageType}>
          <SelectTrigger>
            <SelectValue placeholder="Select package" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="individual">Individual (1 bike)</SelectItem>
            <SelectItem value="couple">Couple (2 bikes, 10% off)</SelectItem>
            <SelectItem value="group">Group (3 bikes, 15% off)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {date && startTime && duration && (
        <Card className="mt-4 bg-muted/50 border-dashed">
          <CardContent className="pt-6">
            <h3 className="font-medium mb-2">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span>{format(date, "PPP")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span>
                  {format(new Date(`2023-01-01T${startTime}`), "h:mm a")} - {endTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Package:</span>
                <span className="capitalize">{packageType}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <div className="text-2xl font-bold">
                  Ksh {totalCost.toFixed(2)}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Book Now</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}


"use client"

import { useEffect, useRef } from "react"
import { BarChart3, LineChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboardCharts() {
  const revenueChartRef = useRef<HTMLCanvasElement>(null)
  const bookingsChartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // This would normally use a charting library like Chart.js
    // For this example, we're just simulating the charts with placeholders

    if (revenueChartRef.current) {
      const ctx = revenueChartRef.current.getContext("2d")
      if (ctx) {
        // Draw a simple line chart placeholder
        ctx.clearRect(0, 0, revenueChartRef.current.width, revenueChartRef.current.height)

        // Background grid
        ctx.strokeStyle = "#e5e7eb"
        ctx.lineWidth = 1

        // Horizontal grid lines
        for (let i = 0; i < 5; i++) {
          const y = 30 + i * 40
          ctx.beginPath()
          ctx.moveTo(40, y)
          ctx.lineTo(revenueChartRef.current.width - 20, y)
          ctx.stroke()
        }

        // Revenue line
        ctx.strokeStyle = "#3b82f6"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(40, 150)
        ctx.lineTo(100, 120)
        ctx.lineTo(160, 140)
        ctx.lineTo(220, 90)
        ctx.lineTo(280, 70)
        ctx.lineTo(340, 100)
        ctx.lineTo(400, 50)
        ctx.stroke()

        // Fill area under the line
        ctx.fillStyle = "rgba(59, 130, 246, 0.1)"
        ctx.beginPath()
        ctx.moveTo(40, 150)
        ctx.lineTo(100, 120)
        ctx.lineTo(160, 140)
        ctx.lineTo(220, 90)
        ctx.lineTo(280, 70)
        ctx.lineTo(340, 100)
        ctx.lineTo(400, 50)
        ctx.lineTo(400, 190)
        ctx.lineTo(40, 190)
        ctx.closePath()
        ctx.fill()
      }
    }

    if (bookingsChartRef.current) {
      const ctx = bookingsChartRef.current.getContext("2d")
      if (ctx) {
        // Draw a simple bar chart placeholder
        ctx.clearRect(0, 0, bookingsChartRef.current.width, bookingsChartRef.current.height)

        // Background grid
        ctx.strokeStyle = "#e5e7eb"
        ctx.lineWidth = 1

        // Horizontal grid lines
        for (let i = 0; i < 5; i++) {
          const y = 30 + i * 40
          ctx.beginPath()
          ctx.moveTo(40, y)
          ctx.lineTo(bookingsChartRef.current.width - 20, y)
          ctx.stroke()
        }

        // Bars
        const barWidth = 30
        const barGap = 20
        const barColors = ["#3b82f6", "#10b981", "#f59e0b"]

        // Mountain bikes
        ctx.fillStyle = barColors[0]
        ctx.fillRect(60, 120, barWidth, 70)

        // Road bikes
        ctx.fillStyle = barColors[1]
        ctx.fillRect(60 + barWidth + barGap, 140, barWidth, 50)

        // Electric bikes
        ctx.fillStyle = barColors[2]
        ctx.fillRect(60 + (barWidth + barGap) * 2, 90, barWidth, 100)

        // Second group
        ctx.fillStyle = barColors[0]
        ctx.fillRect(200, 100, barWidth, 90)

        ctx.fillStyle = barColors[1]
        ctx.fillRect(200 + barWidth + barGap, 130, barWidth, 60)

        ctx.fillStyle = barColors[2]
        ctx.fillRect(200 + (barWidth + barGap) * 2, 80, barWidth, 110)

        // Third group
        ctx.fillStyle = barColors[0]
        ctx.fillRect(340, 110, barWidth, 80)

        ctx.fillStyle = barColors[1]
        ctx.fillRect(340 + barWidth + barGap, 150, barWidth, 40)

        ctx.fillStyle = barColors[2]
        ctx.fillRect(340 + (barWidth + barGap) * 2, 70, barWidth, 120)
      }
    }
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Monthly revenue for the current year</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chart">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="chart" className="flex items-center gap-2">
                  <LineChart className="h-4 w-4" />
                  Chart
                </TabsTrigger>
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Overview
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="chart" className="pt-4">
              <div className="h-[200px] w-full">
                <canvas ref={revenueChartRef} width={450} height={200} className="w-full h-full" />
              </div>
            </TabsContent>
            <TabsContent value="overview" className="pt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <div className="text-sm text-muted-foreground">This Month</div>
                    <div className="text-2xl font-bold">Ksh 435,000.00</div>
                    <div className="text-xs text-green-500">+12.5% from last month</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm text-muted-foreground">This Year</div>
                    <div className="text-2xl font-bold">Ksh 2,412,000.00</div>
                    <div className="text-xs text-green-500">+18.2% from last year</div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="text-sm text-muted-foreground">Most Popular Package</div>
                  <div className="text-xl font-medium">Group Package</div>
                  <div className="text-sm text-muted-foreground">Accounts for 42% of total revenue</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Bookings by Bicycle Type</CardTitle>
          <CardDescription>Distribution of bookings across bicycle types</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <canvas ref={bookingsChartRef} width={350} height={200} className="w-full h-full" />
          </div>
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-blue-500" />
              <span className="text-xs">Mountain</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-xs">Road</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="text-xs">Electric</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


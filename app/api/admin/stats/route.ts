import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getSession } from "@/lib/auth"

export async function GET(req: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { id: session.userId },
      select: { isAdmin: true }
    })

    if (!user?.isAdmin) {
      return NextResponse.json(
        { message: "Forbidden" },
        { status: 403 }
      )
    }

    // Get all stats in parallel
    const [
      totalUsers,
      totalBikes,
      totalBookings,
      pendingBookings
    ] = await Promise.all([
      prisma.user.count(),
      prisma.bicycle.count(),
      prisma.booking.count(),
      prisma.booking.count({
        where: { status: "PENDING" }
      })
    ])

    return NextResponse.json({
      totalUsers,
      totalBikes,
      totalBookings,
      pendingBookings
    })
  } catch (error) {
    console.error("Error fetching admin stats:", error)
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
  }
} 
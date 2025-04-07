import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getSession } from "@/lib/auth"

export async function GET(request: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Verify admin privileges
    const user = await prisma.user.findUnique({
      where: { id: session.userId },
    })

    if (!user?.isAdmin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 })
    }

    // Get stats
    const [totalUsers, totalBikes, activeBookings, monthlyRevenue] = await Promise.all([
      prisma.user.count(),
      prisma.bicycle.count(),
      prisma.booking.count({
        where: {
          status: "confirmed",
        },
      }),
      prisma.booking.aggregate({
        _sum: {
          price: true,
        },
        where: {
          status: "confirmed",
          createdAt: {
            gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
          },
        },
      }),
    ])

    return NextResponse.json({
      totalUsers,
      totalBikes,
      activeBookings,
      monthlyRevenue: monthlyRevenue._sum.price || 0,
    })
  } catch (error) {
    console.error("Error fetching admin stats:", error)
    return NextResponse.json(
      { message: "Failed to fetch admin stats" },
      { status: 500 }
    )
  }
}
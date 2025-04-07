import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getSession } from "@/lib/auth"

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = params
    const { isActive } = await req.json()

    // Verify admin privileges
    const user = await prisma.user.findUnique({
      where: { id: session.userId },
    })

    if (!user?.isAdmin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 })
    }

    // Update user status
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { isActive },
      include: {
        bookings: true,
      },
    })

    // Get all users with their bookings
    const allUsers = await prisma.user.findMany({
      include: {
        bookings: true,
      },
    })

    return NextResponse.json(allUsers)
  } catch (error) {
    console.error("Error toggling user status:", error)
    return NextResponse.json(
      { message: "Failed to update user status" },
      { status: 500 }
    )
  }
}

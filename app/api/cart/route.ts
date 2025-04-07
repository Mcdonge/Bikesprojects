import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getSession } from "@/lib/auth"

export async function GET(req: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const cartItems = await prisma.cart.findMany({
      where: { userId: session.userId },
      include: {
        bicycle: {
          select: {
            id: true,
            name: true,
            price: true,
            image: true,
          },
        },
      },
    })

    return NextResponse.json(cartItems)
  } catch (error) {
    console.error("Error fetching cart:", error)
    return NextResponse.json(
      { message: "Failed to fetch cart" },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { bicycleId, quantity } = await req.json()

    const cartItem = await prisma.cart.upsert({
      where: {
        userId_bicycleId: {
          userId: session.userId,
          bicycleId,
        },
      },
      update: {
        quantity,
      },
      create: {
        userId: session.userId,
        bicycleId,
        quantity,
      },
    })

    return NextResponse.json(cartItem)
  } catch (error) {
    console.error("Error adding to cart:", error)
    return NextResponse.json(
      { message: "Failed to add item to cart" },
      { status: 500 }
    )
  }
}

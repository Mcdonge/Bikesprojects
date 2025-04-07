import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getSession } from "@/lib/auth"

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = params

    // Delete the cart item
    await prisma.cart.delete({
      where: {
        userId_bicycleId: {
          userId: session.userId,
          bicycleId: id,
        },
      },
    })

    // Get the updated cart
    const updatedCart = await prisma.cart.findMany({
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

    return NextResponse.json(updatedCart)
  } catch (error) {
    console.error("Error removing item from cart:", error)
    return NextResponse.json(
      { message: "Failed to remove item from cart" },
      { status: 500 }
    )
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = params
    const { quantity } = await req.json()

    const updatedCartItem = await prisma.cart.update({
      where: {
        userId_bicycleId: {
          userId: session.userId,
          bicycleId: id,
        },
      },
      data: {
        quantity,
      },
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

    return NextResponse.json(updatedCartItem)
  } catch (error) {
    console.error("Error updating cart item:", error)
    return NextResponse.json(
      { message: "Failed to update cart item" },
      { status: 500 }
    )
  }
}

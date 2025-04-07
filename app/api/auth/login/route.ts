import { NextResponse } from "next/server"
import { compare } from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { encrypt } from "@/lib/auth"
import { rateLimit } from "@/lib/rate-limit"
import { User } from "@prisma/client"

const loginRateLimit = rateLimit({ limit: 5, windowMs: 15 * 60 * 1000 }) // 5 requests per 15 minutes

export async function POST(req: Request) {
  // Check rate limit
  const rateLimitResult = await loginRateLimit()
  if (rateLimitResult) return rateLimitResult
  try {
    const { email, password } = await req.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      )
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        password: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Get full user data including isAdmin status
    const fullUser = await prisma.user.findUnique({
      where: { id: user.id },
    })

    if (!fullUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 401 }
      )
    }

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Check password
    const isValid = await compare(password, user.password)

    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Create session
    const session = await encrypt({ userId: user.id, email: user.email })

    // Remove password from user object
    const { password: _, ...userWithoutPassword } = user

    // Return user data and token
    const response = NextResponse.json(
      { 
        message: "Login successful",
        user: {
          id: fullUser.id,
          email: fullUser.email,
          firstName: fullUser.firstName,
          lastName: fullUser.lastName,
          isAdmin: fullUser.isAdmin
        },
        token: session
      },
      { status: 200 }
    )

    response.cookies.set({
      name: "session",
      value: session,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
  }
} 
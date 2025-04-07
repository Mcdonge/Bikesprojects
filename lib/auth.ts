import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

if (!process.env.JWT_SECRET_KEY) {
  throw new Error("JWT_SECRET_KEY is not set in environment variables")
}

const secretKey = process.env.JWT_SECRET_KEY
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
  try {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(key)
  } catch (error) {
    console.error("Error encrypting token:", error)
    throw new Error("Failed to encrypt token")
  }
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key)
    return payload
  } catch (error) {
    console.error("Error decrypting token:", error)
    throw new Error("Invalid or expired token")
  }
}

export async function getSession() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get("session")?.value
    if (!session) return null
    return await decrypt(session)
  } catch (error) {
    console.error("Error getting session:", error)
    return null
  }
}

export async function updateSession(request: NextRequest) {
  try {
    const session = request.cookies.get("session")?.value
    if (!session) return

    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session)
    parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
    const res = NextResponse.next()
    res.cookies.set({
      name: "session",
      value: await encrypt(parsed),
      httpOnly: true,
      expires: parsed.expires,
    })
    return res
  } catch (error) {
    console.error("Error updating session:", error)
    return null
  }
} 
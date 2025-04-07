import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

interface RateLimitConfig {
  limit: number
  windowMs: number
}

const ipRequests = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(config: RateLimitConfig) {
  return async function rateLimitMiddleware() {
    const headersList = headers()
    const forwardedFor = headersList.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.toString() : 'unknown'
    const now = Date.now()
    
    const requestData = ipRequests.get(ip) || { count: 0, resetTime: now + config.windowMs }
    
    // Reset count if window has passed
    if (now > requestData.resetTime) {
      requestData.count = 0
      requestData.resetTime = now + config.windowMs
    }

    requestData.count++
    ipRequests.set(ip, requestData)

    const remaining = Math.max(0, config.limit - requestData.count)
    
    if (requestData.count > config.limit) {
      return NextResponse.json(
        { message: 'Too many requests, please try again later.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': config.limit.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': (requestData.resetTime / 1000).toString(),
          }
        }
      )
    }

    return null
  }
}

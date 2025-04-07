import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: [
    { level: "error", emit: "event" },
    { level: "warn", emit: "event" },
    { level: "info", emit: "event" },
    { level: "query", emit: "event" },
  ],
})

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}

prisma.$on("error", (e) => {
  console.error("Prisma error:", e)
})

prisma.$on("warn", (e) => {
  console.warn("Prisma warning:", e)
})
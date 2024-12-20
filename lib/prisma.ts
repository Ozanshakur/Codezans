import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: ['error', 'warn'],
  datasources: {
    db: {
      url: process.env.POSTGRES_PRISMA_URL
    },
  },
  errorFormat: 'minimal',
})

// Handle shutdown gracefully
process.on('beforeExit', async () => {
  await prisma.$disconnect()
})

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}


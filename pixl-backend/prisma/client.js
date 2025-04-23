import { PrismaClient } from '../generated/prisma/index.js';

// Initialize Prisma client with explicit connection
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export default prisma;
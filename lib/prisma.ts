import "server-only";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Reuse one client per warm Node.js isolate. DATABASE_URL must point at the
// Supabase transaction pooler in serverless deployments; pool sizing belongs
// in that URL (for example connection_limit=1), not in per-request code.
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

globalForPrisma.prisma = prisma;

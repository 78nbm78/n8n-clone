// import 'dotenv/config'
// import { PrismaPg } from '@prisma/adapter-pg'
// import { Prisma, PrismaClient } from './generated/client';
// import { randomUUID } from 'node:crypto';

// const adapter = new PrismaPg({
//     connectionString: process.env.DATABASE_URL,
// })

// const prisma = new PrismaClient({ adapter });

// const userData: Prisma.UserCreateInput[] = [
//     {
//         id: randomUUID(),
//         name: "Navid",
//         email: "alice@prisma.io",
//     },
// ];

// export async function main() {
//     for (const u of userData) {
//         await prisma.user.create({ data: u });
//     }
// }

// main();
import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { Prisma, PrismaClient } from '@/generated/prisma/client';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({ adapter });

const userData: Prisma.UserCreateInput[] = [
    {
        name: "Alice",
        email: "alice@prisma.io",
    },
    {
        name: "Bob",
        email: "bob@prisma.io",
        // posts: {
        //     create: [
        //         {
        //             title: "Follow Prisma on Twitter",
        //             content: "https://www.twitter.com/prisma",
        //             published: true,
        //         },
        //     ],
        // },
    },
];

export async function main() {
    for (const u of userData) {
        await prisma.user.create({ data: u });
    }
}

main();
// import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import db from '@/lib/db';
export const appRouter = createTRPCRouter({
    getUsers: baseProcedure.query(() => {
        return db.user.findMany();
    })
    // hello: baseProcedure
    //     .input(
    //         z.object({
    //             text: z.string(),
    //         }),
    //     )
    //     .query((opts) => {
    //         return {
    //             greeting: `hello ${opts.input.text}`,
    //         };
    //     }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
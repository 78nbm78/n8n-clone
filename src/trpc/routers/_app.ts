// import { z } from 'zod';
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import db from "@/lib/db";
export const appRouter = createTRPCRouter({
  // getting data without needing authentication:
  getUsers: baseProcedure.query(() => {
    return db.user.findMany();
  }),

  user: {
    getAllUsers: protectedProcedure.query(() => {
      return db.user.findMany();
    }),
    getUserById: protectedProcedure.query(({ ctx }) => {
      return db.user.findUnique({
        where: { id: ctx.auth.user.id },
      });
    }),
  },

  // getting data that needs authentication
  getUser: protectedProcedure.query(({ ctx }) => {
    return db.user.findUnique({
      where: { id: ctx.auth.user.id },
    });
  }),

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

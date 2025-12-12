import { inngest } from "@/inngest/client";
import { createTRPCRouter, protectedProcedure } from "../init";
import db from "@/lib/db";
export const appRouter = createTRPCRouter({
  workflow: {
    getWorkflows: protectedProcedure.query(({ ctx }) => {
      return db.workflow.findMany();
    }),
    createWorkflow: protectedProcedure.mutation(async () => {
      await inngest.send({
        name: "test/hello.world",
        data: {
          email: "navid@gmail.com",
        },
      });
    }),
  },
});

export type AppRouter = typeof appRouter;

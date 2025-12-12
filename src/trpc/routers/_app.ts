import { inngest } from "@/inngest/client";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
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

      return { success: true, message: "Job queued" };
    }),
  },

  ai: {
    gemini: baseProcedure.mutation(async () => {
      await inngest.send({
        name: "execute/ai",
      });

      return { success: true, message: "Job queued" };

      // const { text } = await generateText({
      //   model: google('gemini-2.5-flash'),
      //   prompt: 'Tell me a funny joke relates to software engineering',
      // });
      // return text;
    }),
  },
});

export type AppRouter = typeof appRouter;

import db from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // fetching video from YouTube
    await step.sleep("fetching-video", "6s");

    // transcribing
    await step.sleep("transcribing", "6s");

    // sending to ai
    await step.sleep("sending-to-ai", "6s");

    // onSuccess
    await step.run("create-workflow", () => {
      return db.workflow.create({
        data: {
          name: "workflow-from-inngest",
        },
      });
    });

    // last return
    return {
      success: true,
      message: `Job queued`,
    };
  },
);

import { inngest } from "./client";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    await step.sleep("wait", "5s");

    const { steps } = await step.ai.wrap("gemini-generate-text", generateText, {
      model: google("gemini-2.5-flash"),
      system: "you are a helpful assistant",
      prompt: "tell me 1 joke",
    });

    return { steps };
  },
);

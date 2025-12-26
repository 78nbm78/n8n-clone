import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import * as Sentry from "@sentry/nextjs";
import { inngest } from "./client";

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    await step.sleep("wait", "5s");

    Sentry.logger.info("Starting AI text generation", { eventId: event.id });

    const { steps } = await step.ai.wrap("gemini-generate-text", generateText, {
      model: google("gemini-2.5-flash"),
      system: "you are a helpful assistant",
      prompt: "tell me 1 joke",
      experimental_telemetry: {
        isEnabled: true,
        recordInputs: true,
        recordOutputs: true,
      },
    });

    return { steps };
  },
);

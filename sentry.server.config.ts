// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e5c829bb4bae0849352bffa51b909d67@o4510601823125504.ingest.de.sentry.io/4510601864020048",
  integrations: [
    // Add the Vercel AI SDK integration to sentry.server.config.ts
    Sentry.vercelAIIntegration({
      recordInputs: true,
      recordOutputs: true,
    }),
  ],
  // Tracing must be enabled for agent monitoring to work
  tracesSampleRate: 1.0,
  sendDefaultPii: true,
});

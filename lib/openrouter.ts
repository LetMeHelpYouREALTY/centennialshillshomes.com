import OpenAI from "openai";

/** Lazy client so `next build` does not require API keys at module load. */
export function getOpenRouterClient(): OpenAI {
  return new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY || "build-placeholder",
    baseURL: "https://openrouter.ai/api/v1",
  });
}

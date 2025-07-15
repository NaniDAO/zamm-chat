import { streamText, UIMessage } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const maxDuration = 30;

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  console.log("messages", messages);

  const result = streamText({
    model: openrouter("openai/o4-mini"),
    messages,
  });

  return result.toDataStreamResponse();
}

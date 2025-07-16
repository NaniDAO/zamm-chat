import { streamText, UIMessage } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { AgentekToolkit } from "@agentek/ai-sdk";
import { zammTools } from "@agentek/tools";
import { mainnet } from "viem/chains";
import { http, isAddress } from "viem";

export const maxDuration = 30;

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  const { messages, user }: { messages: UIMessage[]; user: string } =
    await req.json();

  if (!isAddress(user)) {
    throw new Error("Invalid user address");
  }

  const chains = [mainnet];

  const toolkit = new AgentekToolkit({
    transports: [http()],
    chains,
    accountOrAddress: user,
    tools: [...zammTools()],
  });

  const tools = toolkit.getTools();

  const result = streamText({
    system: `You are a helpful assistant for ZAMM. Currently, you are assisting ${user}`,
    model: openrouter("openai/o4-mini"),
    messages,
    tools,
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
}

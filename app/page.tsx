"use client";

import { useChat } from "@ai-sdk/react";
import ChatInput from "@/components/chat-input";
import { EthereumIcon } from "@/components/ethereum-icon";
import { useAccount } from "wagmi";
import { cn } from "@/lib/utils";

export default function Chat() {
  const { address } = useAccount();
  const {
    error,
    status,
    input,
    handleInputChange,
    handleSubmit,
    messages,
    reload,
    stop,
  } = useChat({
    body: {
      user: address,
    },
    onResponse: (response) => {
      console.log("Response received:", response);
    },
    onError: (error) => {
      console.error("Error occurred:", error);
    },
  });

  const hasMessages = messages.length > 0;

  return (
    <div className="">
      {!hasMessages && (
        <div className="w-screen h-[90vh] flex items-center justify-center">
          <EthereumIcon />
        </div>
      )}
      f
      {hasMessages && (
        <div className="w-full py-14 mx-40 stretch">
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "p-4 rounded-md max-w-2xl",
                m.role === "assistant"
                  ? "text-secondary-foreground"
                  : "text-foreground",
              )}
            >
              <span className="mr-2">{m.role === "assistant" ? "☻" : ">"}</span>
              {m.parts.map((part, i) => {
                if (part.type === "text") {
                  return part.text;
                }
                if (part.type === "reasoning") {
                  return <ReasoningBlock details={part.details} />;
                }
                if (part.type === "tool-invocation") {
                  return (
                    <div
                      key={i}
                      className="mt-2 mb-1 text-xs text-secondary-foreground font-mono italic border-l-2 border-primary -300 pl-2"
                    >
                      using tool:{" "}
                      <span className="bg-accent text-accent-foreground">
                        {part.toolInvocation.toolName}
                      </span>
                    </div>
                  );
                }
              })}
            </div>
          ))}
        </div>
      )}
      {error && (
        <div className="absolute bottom-20 text-red-400">
          <div>An error occurred.</div>
          <button type="button" onClick={() => reload()} className="underline">
            Retry
          </button>
        </div>
      )}
      <ChatInput
        status={status}
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={handleSubmit}
        stop={stop}
      />
    </div>
  );
}

import { useState } from "react";

function ReasoningBlock({ details }: { details: any[] }) {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-2">
      <button
        onClick={() => setShow(!show)}
        className="text-xs underline text-neutral-500"
      >
        {show ? "Hide reasoning" : "Show reasoning"}
      </button>
      {show && (
        <div className="mt-1 p-2 rounded bg-neutral-100 text-neutral-800 text-sm whitespace-pre-wrap font-mono">
          {details.map((d, idx) =>
            d.type === "text" ? (
              <div key={idx}>{d.text}</div>
            ) : (
              <div key={idx}>[Redacted]</div>
            ),
          )}
        </div>
      )}
    </div>
  );
}

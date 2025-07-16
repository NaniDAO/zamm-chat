"use client";

import { useChat } from "@ai-sdk/react";
import ChatInput from "@/components/chat-input";
import { EthereumIcon } from "@/components/ethereum-icon";
import { useAccount } from "wagmi";

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
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {!hasMessages && (
        <div className="w-screen h-screen flex items-center justify-center">
          <EthereumIcon />
        </div>
      )}

      {hasMessages && (
        <div className="w-full max-w-md py-24 mx-auto stretch">
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "user" ? "User: " : "AI: "}
              {m.parts.map((part) => (part.type === "text" ? part.text : null))}
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

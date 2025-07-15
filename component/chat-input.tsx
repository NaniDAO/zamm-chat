import { useState } from "react";

export default function ChatInput({
  status,
  input,
  handleInputChange,
  onSubmit,
  stop,
}: {
  status: string;
  onSubmit: any;
  handleInputChange: any;
  input: any;
  stop?: () => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
        placeholder="Say something..."
        disabled={status !== "ready"}
        value={input}
        onChange={handleInputChange}
      />
      {stop && (status === "streaming" || status === "submitted") && (
        <button
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          type="submit"
          onClick={stop}
        >
          Stop
        </button>
      )}
    </form>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
  const { isConnected } = useAccount();

  if (!isConnected)
    return (
      <div className="fixed bottom-6 w-full max-w-md px-4 mx-auto">
        <ConnectButton />
      </div>
    );

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center justify-center bottom-6 w-full max-w-md px-4 mx-auto"
    >
      {status === "ready" && (
        <Input
          placeholder="Say something..."
          disabled={status !== "ready"}
          value={input}
          onChange={handleInputChange}
        />
      )}

      {stop && (status === "streaming" || status === "submitted") && (
        <Button
          size="icon"
          className="rounded-full mt-2"
          type="submit"
          onClick={stop}
        >
          🛑
        </Button>
      )}
    </form>
  );
}

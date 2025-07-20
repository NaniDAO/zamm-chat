import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { StopIcon } from "./ui/stop-icon";

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
      <div className="fixed bottom-2 w-full max-w-md px-4 mx-auto">
        <ConnectButton />
      </div>
    );

  return (
    <>
      {/* Full-width border at bottom */}
      <div className="fixed bottom-12 left-0 w-screen border-t-2 border-border z-40" />

      {/* Centered input box on top of the border */}
      <form
        onSubmit={onSubmit}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-background px-4 py-2 flex items-center justify-center z-30"
      >
        {status === "ready" && (
          <Input
            placeholder="Say something..."
            disabled={status !== "ready"}
            value={input}
            className="border-none outline-none focus:border-none focus:outline-none"
            onChange={handleInputChange}
          />
        )}

        {stop && (status === "streaming" || status === "submitted") && (
          <Button
            size="icon"
            className="rounded-full ml-2 flex items-center justify-center"
            type="submit"
            variant="ghost"
            onClick={stop}
          >
            <StopIcon />
          </Button>
        )}
      </form>
    </>
  );
}

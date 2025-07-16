"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ConnectWallet = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <ConnectButton />
    </div>
  );
};

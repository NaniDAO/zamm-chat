"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { siteConfig } from "@/lib/siteConfig";

const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!PROJECT_ID) {
  throw new Error("NEXT_PUBLIC_PROJECT_ID is not defined");
}

const config = getDefaultConfig({
  appName: siteConfig.title,
  projectId: PROJECT_ID,
  chains: [mainnet],
  ssr: true,
});

const queryClient = new QueryClient();

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

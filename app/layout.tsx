import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./globals.css";
import { WalletProvider } from "@/components/wallet-provider";
import { siteConfig } from "@/lib/siteConfig";
import { AppSidebar } from "@/components/app-sidebar";
import { ConnectWallet } from "@/components/connect-wallet";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full w-full flex items-center">
        <WalletProvider>
          <SidebarProvider>
            {children}
            <AppSidebar />
            <div className="fixed top-2 w-screen flex justify-end">
              <ConnectWallet className="mr-2" />
            </div>
          </SidebarProvider>
        </WalletProvider>
      </body>
    </html>
  );
}

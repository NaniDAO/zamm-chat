import "./globals.css";

export const metadata = {
  title: "AI SDK - Next.js OpenAI Examples",
  description: "Examples of using the AI SDK with Next.js and OpenAI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <header className="p-3 border-b-4 border-border">✦ ZAMM CHAT</header>
        <main className="my-auto">{children}</main>
        <footer className="p-3 border-t-4 border-border">✦ ZAMM CHAT</footer>
      </body>
    </html>
  );
}

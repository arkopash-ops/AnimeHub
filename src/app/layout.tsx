import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnimeHub",
  description: "Welcome to AnimeHub — where every anime fan finds their next obsession!",
  icons: "/anime_hub.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

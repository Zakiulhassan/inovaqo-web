import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inovaqo — We engineer software that makes a difference",
  description: "Smart web and mobile apps for teams that want to move fast and build right. AI, data, and clean engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

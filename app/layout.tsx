import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Resparq",
    default: "Resparq - AI-Powered Exit Intent for Shopify",
  },
  description:
    "Recover abandoned carts automatically with AI-powered exit intent that applies discount codes at checkout.",
  metadataBase: new URL("https://www.resparq.ai"),
  openGraph: {
    type: "website",
    siteName: "Resparq",
    url: "https://www.resparq.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

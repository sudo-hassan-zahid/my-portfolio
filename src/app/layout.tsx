import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hassan Zahid | Backend-Focused Software Engineer",
  description:
    "Personal portfolio for Hassan Zahid, a backend-focused software engineer working across APIs, cloud infrastructure, integrations, databases, and production systems with practical UI delivery range.",
  authors: [{ name: "Hassan Zahid" }],
  keywords: [
    "Hassan Zahid",
    "Backend Engineer",
    "Software Engineer",
    "Golang",
    "Laravel",
    "Node.js",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

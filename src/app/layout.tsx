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
  title: "Hassan Zahid | Backend-Focused Full-Stack Developer",
  description:
    "Recruiter-focused portfolio for Hassan Zahid, a backend-focused full-stack developer working across APIs, cloud infrastructure, integrations, databases, and production systems.",
  authors: [{ name: "Hassan Zahid" }],
  keywords: [
    "Hassan Zahid",
    "Backend Engineer",
    "Full-Stack Developer",
    "Golang",
    "Laravel",
    "Node.js",
    "React",
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

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
  title: "Ayobami Paul Adeyemo - Software Engineer | Frontend & Security",
  description: "Software engineer specializing in React, Next.js, and security. Built LMS serving 1000+ users, discovered 15 zero-day vulnerabilities. MSc Software Engineering student.",
  keywords: ['software engineer', 'frontend developer', 'cybersecurity', 'react', 'nextjs'],
  authors: [{ name: 'Ayobami Paul Adeyemo' }],
  openGraph: {
    title: "Ayobami Paul Adeyemo - Software Engineer",
    description: "Building scalable systems and securing applications",
    url: 'https://ayobamipaul.com',
    siteName: 'Ayobami Paul Portfolio',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ayobami Paul - Software Engineer",
    description: "Frontend engineer & security analyst",
    images: ['/og-image.png'],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

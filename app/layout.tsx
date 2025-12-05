import type { Metadata } from "next";
import { Geist, Geist_Mono, Butterfly_Kids } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const butterflyKids = Butterfly_Kids({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "Manegasm Stimulators",
  description: "Premium Hair and Skin Care Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={butterflyKids.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

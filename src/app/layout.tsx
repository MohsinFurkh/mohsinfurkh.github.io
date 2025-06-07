import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import dynamic from 'next/dynamic';

// Dynamically import the VisitorCounter to disable SSR for this component
const VisitorCounter = dynamic(() => import('@/components/VisitorCounter'), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deep Learning for Medical Image Analysis",
  description: "Research portfolio in Deep Learning and Medical Image Analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gray-50 pt-16">
          {children}
          <VisitorCounter />
        </main>
      </body>
    </html>
  );
}
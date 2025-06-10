import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import the VisitorCounter to disable SSR for this component
const VisitorCounter = dynamic(() => import('@/components/VisitorCounter'), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

// Favicon configuration for better browser compatibility
export const metadata: Metadata = {
  title: "Deep Learning for Medical Image Analysis",
  description: "Research portfolio in Deep Learning and Medical Image Analysis",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/favicon.ico' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
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
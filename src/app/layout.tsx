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
      { url: '/images/icon.jpg', sizes: '512x512', type: 'image/jpg' },
      { url: '/images/icon.jpg', type: 'image/jpg' },
    ],
    apple: [
      { url: '/images/icon.jpg' },
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
        <link rel="icon" href="/images/icon.jpg" type="image/jpg" />
        <link rel="apple-touch-icon" href="/images/icon.jpg" />
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
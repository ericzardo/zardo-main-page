import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/providers/SmoothScroll";
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: "zardo",
  description:
    "zardo turns ideas into cutting-edge digital solutions. We create unique experiences with top-tier technology.",
  keywords: [
    "zardo",
    "technology",
    "innovation",
    "web development",
    "digital solutions",
    "zardo",
    "AI agents",
    "AI automation",
    "machine learning",
    "artificial intelligence",
  ],
  authors: [{ name: "zardo", url: "https://zardo.dev" }],
  creator: "zardo",
  publisher: "zardo",
  openGraph: {
    title: "zardo",
    description:
      "zardo turns ideas into cutting-edge digital solutions. We create unique experiences with top-tier technology.",
    url: "https://zardo.dev",
    siteName: "zardo",
    images: [
      {
        url: "https://zardo.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "zardo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icons/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icons/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/icons/favicon.ico'],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/providers/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
    icon: "/favicon.ico",
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
      </body>
    </html>
  );
}
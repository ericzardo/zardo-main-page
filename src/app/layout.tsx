import "@/lib/translate/config"

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";

import { Toaster } from 'react-hot-toast';
import { SmoothScroll } from "@/providers/SmoothScroll";

import { Favicon, AppleTouchIcon, Logo192, Logo32, Logo512 } from "@zardo/ui-kit/logos"
import "./globals.css";
import "@zardo/ui-kit/styles.css";

const poppins = Poppins({
  variable: "--font-poppins",
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
      { url: Favicon, sizes: 'any' },
      { url: Logo32, type: 'image/png', sizes: '32x32' },
      { url: Logo192, type: 'image/png', sizes: '192x192' },
      { url: Logo512, type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: AppleTouchIcon, sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [Favicon],
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
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-K8Q329MT'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K8Q329MT');
          `}
        </Script>

        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TC7E508KHF"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TC7E508KHF');
          `}
        </Script>
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s6312ulcjp");
            `
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8Q329MT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}

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
  title: {
    default: "Xonix Tech - Futuristic Tools for the Modern World",
    template: "%s | Xonix Tech"
  },
  description: "Discover cutting-edge web tools and utilities at Xonix Tech. Excel file opener, data processing, and modern productivity tools for professionals and businesses.",
  keywords: [
    "xonix tech",
    "excel file opener",
    "xls viewer",
    "data processing tools",
    "productivity tools",
    "web utilities",
    "excel online",
    "spreadsheet viewer",
    "data export",
    "CSV export",
    "JSON export",
    "business tools",
    "modern web tools"
  ],
  authors: [{ name: "Xonix Tech" }],
  creator: "Xonix Tech",
  publisher: "Xonix Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xonixtech.com",
    siteName: "Xonix Tech",
    title: "Xonix Tech - Futuristic Tools for the Modern World",
    description: "Discover cutting-edge web tools and utilities at Xonix Tech. Excel file opener, data processing, and modern productivity tools for professionals and businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xonix Tech - Futuristic Tools for the Modern World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xonix Tech - Futuristic Tools for the Modern World",
    description: "Discover cutting-edge web tools and utilities at Xonix Tech. Excel file opener, data processing, and modern productivity tools.",
    images: ["/twitter-image.png"],
    creator: "@xonixtech",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "google-adsense-account": "ca-pub-3465404764288686",
  },
  alternates: {
    canonical: "https://xonixtech.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Xonix Tech",
    "description": "Discover cutting-edge web tools and utilities at Xonix Tech. Excel file opener, data processing, and modern productivity tools for professionals and businesses.",
    "url": "https://xonixtech.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://xonixtech.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Xonix Tech",
      "url": "https://xonixtech.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://xonixtech.com/logo.png"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

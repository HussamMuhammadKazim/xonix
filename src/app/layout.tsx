import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Xonix Tech - Professional Web Tools | Excel File Opener & Data Converters",
    template: "%s | Xonix Tech"
  },
  description: "Professional web tools and utilities for modern businesses. Open Excel files (.xls, .xlsx) in your browser, convert to CSV/JSON formats. Free, secure, and works entirely in your browser. No software installation required.",
  keywords: [
    "xonix tech",
    "excel file opener",
    "xls viewer",
    "xlsx viewer",
    "excel to csv converter",
    "excel to json converter",
    "data processing tools",
    "productivity tools",
    "web utilities",
    "excel online",
    "spreadsheet viewer",
    "data export",
    "CSV export",
    "JSON export",
    "business tools",
    "modern web tools",
    "free excel tools",
    "browser excel opener",
    "online spreadsheet tools",
    "data conversion tools",
    "secure file processing",
    "local file processing",
    "professional web tools"
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
    title: "Xonix Tech - Professional Web Tools | Excel File Opener & Data Converters",
    description: "Professional web tools and utilities for modern businesses. Open Excel files (.xls, .xlsx) in your browser, convert to CSV/JSON formats. Free, secure, and works entirely in your browser. No software installation required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xonix Tech - Professional Web Tools for Excel Files and Data Conversion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xonix Tech - Professional Web Tools | Excel File Opener & Data Converters",
    description: "Professional web tools and utilities for modern businesses. Open Excel files (.xls, .xlsx) in your browser, convert to CSV/JSON formats. Free, secure, and works entirely in your browser. No software installation required.",
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
    "description": "Professional web tools and utilities for modern businesses. Open Excel files (.xls, .xlsx) in your browser, convert to CSV/JSON formats. Free, secure, and works entirely in your browser. No software installation required.",
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
      },
      "founder": {
        "@type": "Person",
        "name": "Hussam Muhammad Kazim",
        "jobTitle": "AI Automation Engineer"
      },
      "description": "Professional web tools and utilities for modern businesses specializing in Excel file processing and data conversion tools."
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free Excel file opener and data conversion tools"
    },
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser"
  };

  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XFFBB5W9WM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XFFBB5W9WM');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${sourceCodePro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

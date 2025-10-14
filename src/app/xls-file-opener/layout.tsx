import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Excel File Opener Online - Open XLS & XLSX Files in Browser | Xonix Tech",
  description: "Open Excel files (.xls, .xlsx) directly in your browser for free. View, analyze, and export spreadsheet data to CSV or JSON formats. No software installation required. 100% secure local processing.",
  keywords: [
    "excel file opener",
    "xls viewer",
    "xlsx viewer", 
    "excel online",
    "spreadsheet viewer",
    "excel browser",
    "open excel files",
    "view excel online",
    "CSV export",
    "JSON export",
    "excel data export",
    "online excel tool",
    "free excel opener",
    "browser excel viewer",
    "excel file reader",
    "spreadsheet opener",
    "excel data viewer",
    "online spreadsheet tool",
    "excel file processor",
    "secure excel viewer",
    "local file processing",
    "excel file analyzer"
  ],
  openGraph: {
    title: "Free Excel File Opener Online - Open XLS & XLSX Files in Browser | Xonix Tech",
    description: "Open Excel files (.xls, .xlsx) directly in your browser for free. View, analyze, and export spreadsheet data to CSV or JSON formats. No software installation required. 100% secure local processing.",
    type: "website",
    url: "https://xonixtech.com/xls-file-opener",
    siteName: "Xonix Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Excel File Opener Online - Open XLS and XLSX Files in Browser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Excel File Opener Online - Open XLS & XLSX Files in Browser | Xonix Tech",
    description: "Open Excel files (.xls, .xlsx) directly in your browser for free. View, analyze, and export spreadsheet data to CSV or JSON formats. No software installation required. 100% secure local processing.",
    images: ["/twitter-image.png"],
    creator: "@xonixtech",
  },
  alternates: {
    canonical: "https://xonixtech.com/xls-file-opener",
  },
};

export default function XlsFileOpenerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

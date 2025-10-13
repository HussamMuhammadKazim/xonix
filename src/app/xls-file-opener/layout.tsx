import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excel File Opener - View & Export XLS/XLSX Files Online",
  description: "Open Excel files (.xls, .xlsx) directly in your browser. View, analyze, and export spreadsheet data to CSV or JSON formats. No software installation required.",
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
    "online excel tool"
  ],
  openGraph: {
    title: "Excel File Opener - View & Export XLS/XLSX Files Online",
    description: "Open Excel files (.xls, .xlsx) directly in your browser. View, analyze, and export spreadsheet data to CSV or JSON formats. No software installation required.",
    type: "website",
    url: "https://xonixtech.com/xls-file-opener",
  },
  twitter: {
    title: "Excel File Opener - View & Export XLS/XLSX Files Online",
    description: "Open Excel files (.xls, .xlsx) directly in your browser. View, analyze, and export spreadsheet data to CSV or JSON formats.",
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

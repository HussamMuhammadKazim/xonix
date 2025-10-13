import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XLS File Opener – Open Excel Files Online for Free | Xonix.tech",
  description: "Free online XLS file opener. Upload, view, and read Excel files instantly without installing any software.",
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
    title: "XLS File Opener – Open Excel Files Online for Free | Xonix.tech",
    description: "Free online XLS file opener. Upload, view, and read Excel files instantly without installing any software.",
    type: "website",
    url: "https://xonixtech.com/xls-file-opener",
  },
  twitter: {
    title: "XLS File Opener – Open Excel Files Online for Free | Xonix.tech",
    description: "Free online XLS file opener. Upload, view, and read Excel files instantly without installing any software.",
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

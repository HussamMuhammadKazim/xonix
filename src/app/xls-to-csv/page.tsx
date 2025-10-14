"use client";

import { useState } from "react";
import Link from "next/link";
import * as XLSX from 'xlsx';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free XLS to CSV Converter Online - Convert Excel Files to CSV | Xonix Tech",
  description: "Convert Excel files (.xls, .xlsx) to CSV format instantly and for free. Professional-grade conversion with data integrity. Works entirely in your browser. No software installation required.",
  keywords: [
    "xls to csv converter",
    "excel to csv converter",
    "xlsx to csv",
    "csv converter",
    "excel csv converter",
    "spreadsheet converter",
    "data conversion",
    "excel export",
    "csv export",
    "free csv converter",
    "online csv converter",
    "excel data export",
    "spreadsheet data converter",
    "xls converter",
    "xlsx converter",
    "data migration",
    "excel to csv online",
    "free excel converter",
    "browser csv converter",
    "secure file conversion",
    "data format converter"
  ],
  openGraph: {
    title: "Free XLS to CSV Converter Online - Convert Excel Files to CSV | Xonix Tech",
    description: "Convert Excel files (.xls, .xlsx) to CSV format instantly and for free. Professional-grade conversion with data integrity. Works entirely in your browser. No software installation required.",
    type: "website",
    url: "https://xonixtech.com/xls-to-csv",
    siteName: "Xonix Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free XLS to CSV Converter Online - Convert Excel Files to CSV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free XLS to CSV Converter Online - Convert Excel Files to CSV | Xonix Tech",
    description: "Convert Excel files (.xls, .xlsx) to CSV format instantly and for free. Professional-grade conversion with data integrity. Works entirely in your browser. No software installation required.",
    images: ["/twitter-image.png"],
    creator: "@xonixtech",
  },
  alternates: {
    canonical: "https://xonixtech.com/xls-to-csv",
  },
};

export default function XlsToCsvConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<Array<Record<string, string | number>>>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [converted, setConverted] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    setLoading(true);
    setError(null);
    setConverted(false);

    try {
      // File validation
      if (!uploadedFile.name.toLowerCase().endsWith('.xls') && 
          !uploadedFile.name.toLowerCase().endsWith('.xlsx')) {
        throw new Error('Please upload a valid Excel file (.xls or .xlsx)');
      }

      setFile(uploadedFile);
      
      // Process the Excel file
      const fileData = await uploadedFile.arrayBuffer();
      const workbook = XLSX.read(fileData, { type: 'array' });
      
      // Get the first worksheet
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      
      // Convert worksheet to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
      if (jsonData.length === 0) {
        throw new Error('The Excel file appears to be empty');
      }
      
      // Get headers from the first row
      const fileHeaders = jsonData[0] as string[];
      setHeaders(fileHeaders);
      
      // Convert data rows to objects
      const rows = jsonData.slice(1).map((row: unknown, index) => {
        const rowArray = row as (string | number | null)[];
        const rowObject: Record<string, string | number> = {};
        fileHeaders.forEach((header, colIndex) => {
          rowObject[header] = rowArray[colIndex] || '';
        });
        return rowObject;
      });
      
      setData(rows);
      setConverted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while processing the file');
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    if (data.length === 0 || headers.length === 0) return;

    // Create CSV content
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))
    ].join('\n');

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${file?.name.split('.')[0] || 'converted'}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearFile = () => {
    setFile(null);
    setData([]);
    setHeaders([]);
    setError(null);
    setConverted(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Xonix Tech
            </Link>
            <nav className="hidden md:block space-x-6">
              <Link href="/" className="text-primary hover:text-primary-hover">
                Home
              </Link>
              <Link href="/about" className="text-primary hover:text-primary-hover">
                About
              </Link>
              <Link href="/contact" className="text-primary hover:text-primary-hover">
                Contact
              </Link>
              <Link href="/privacy-policy" className="text-primary hover:text-primary-hover">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="text-primary hover:text-primary-hover">
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            XLS to CSV Converter
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
            Convert Excel files (.xls, .xlsx) to CSV format instantly. Free, secure, and works entirely in your browser.
          </p>
        </div>

        {/* Converter Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card text-center">
            {!file ? (
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Upload Excel File</h3>
                  <p className="text-muted-foreground mb-6">Select your .xls or .xlsx file to convert to CSV format</p>
                </div>

                <label className="cursor-pointer inline-block">
                  <input
                    type="file"
                    accept=".xls,.xlsx"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={loading}
                  />
                  <div className="btn">
                    {loading ? "Converting..." : "Choose Excel File"}
                  </div>
                </label>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-2">File Ready for Conversion!</h3>
                  <p className="text-muted-foreground mb-2">{file.name}</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Size: {(file.size / 1024).toFixed(1)} KB • {data.length} rows • {headers.length} columns
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={downloadCSV}
                    className="btn"
                  >
                    Download CSV File
                  </button>
                  <button
                    onClick={clearFile}
                    className="btn-secondary"
                  >
                    Convert Another File
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600">{error}</p>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <section className="py-12 bg-secondary">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Our XLS to CSV Converter?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
                Professional-grade conversion with security and reliability you can trust.
              </p>
            </div>
            
            <div className="grid grid-3">
              <div className="card text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  100% Secure
                </h3>
                <p className="text-muted-foreground">
                  Your Excel files are processed locally in your browser. No data is uploaded to our servers.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Lightning Fast
                </h3>
                <p className="text-muted-foreground">
                  Convert Excel files to CSV in seconds with our optimized browser-based processing engine.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  High Quality
                </h3>
                <p className="text-muted-foreground">
                  Maintains data integrity and formatting during conversion. Perfect for data analysis and import.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-12">
          <div className="container max-w-4xl">
            <div className="card">
              <h2 className="text-3xl font-bold mb-6 text-center">
                The Best Free XLS to CSV Converter Online
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our <strong>XLS to CSV converter</strong> allows you to transform Microsoft Excel files (.xls, .xlsx) into CSV format instantly. 
                  This powerful web-based <strong>Excel to CSV converter</strong> supports both legacy .xls and modern .xlsx formats, 
                  making it the perfect solution for data migration, analysis, and integration workflows.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">How to Convert XLS to CSV</h3>
                    <ol className="space-y-3 text-muted-foreground">
                      <li className="flex items-start space-x-3">
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                        <span>Upload your Excel file (.xls or .xlsx) using the upload button above</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                        <span>Our converter automatically processes the file and extracts all data</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                        <span>Click "Download CSV File" to save your converted data</span>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Supported File Formats</h3>
                    <div className="space-y-4">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Microsoft Excel (.xls)</h4>
                        <p className="text-muted-foreground text-sm">Legacy Excel format from Excel 97-2003. Our XLS to CSV converter handles all legacy spreadsheet files with precision.</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Excel 2007+ (.xlsx)</h4>
                        <p className="text-muted-foreground text-sm">Modern Excel format with enhanced features. Full support for complex spreadsheets and large datasets.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-4">Perfect for Business Professionals</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our <strong>Excel to CSV converter</strong> is designed for professionals who need reliable data conversion without installing software. 
                    Whether you're a <strong>data analyst</strong>, <strong>business manager</strong>, or <strong>researcher</strong>, this tool provides instant access to your data in CSV format 
                    with professional-grade accuracy and security.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">Data Analysis</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">Reports</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">Research</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">Presentations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Is this XLS to CSV converter completely free?</h4>
                      <p className="text-muted-foreground text-sm">Yes! Our Excel to CSV converter is 100% free to use with no hidden costs, subscriptions, or limitations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Do I need to install any software?</h4>
                      <p className="text-muted-foreground text-sm">No installation required! This XLS to CSV converter works entirely in your web browser on any device.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Are my Excel files secure?</h4>
                      <p className="text-muted-foreground text-sm">Absolutely! Files are processed locally in your browser and never uploaded to our servers, ensuring complete privacy.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What's the maximum file size supported?</h4>
                      <p className="text-muted-foreground text-sm">Our Excel to CSV converter can handle most standard Excel files. Very large files may take longer to process but are fully supported.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="text-sm">
            © 2024 Xonix Tech. Professional tools for modern businesses.
          </p>
        </div>
      </footer>
    </div>
  );
}

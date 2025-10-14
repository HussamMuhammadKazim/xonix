"use client";

import { useState } from "react";
import Link from "next/link";
import * as XLSX from 'xlsx';

export default function XlsFileOpener() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<Array<Record<string, string | number>>>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAllRows, setShowAllRows] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    setLoading(true);
    setError(null);

    try {
      // Simple file validation
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
        // Add a unique ID if not present
        if (!rowObject['ID'] && !rowObject['id']) {
          rowObject['ID'] = index + 1;
        }
        return rowObject;
      });
      
      setData(rows);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while processing the file');
    } finally {
      setLoading(false);
    }
  };

  const clearFile = () => {
    setFile(null);
    setData([]);
    setHeaders([]);
    setError(null);
    setShowAllRows(false);
  };

  const toggleShowAllRows = () => {
    setShowAllRows(!showAllRows);
  };

  const exportToCSV = () => {
    if (data.length === 0 || headers.length === 0) return;

    // Create CSV content using the actual headers from the Excel file
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))
    ].join('\n');

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${file?.name.split('.')[0] || 'export'}_data.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToJSON = () => {
    if (data.length === 0) return;

    // Create JSON content
    const jsonContent = JSON.stringify(data, null, 2);

    // Create and download the file
    const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${file?.name.split('.')[0] || 'export'}_data.json`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Excel File Opener",
    "description": "Open Excel files (.xls, .xlsx) directly in your browser. View, analyze, and export spreadsheet data to CSV or JSON formats.",
    "url": "https://xonixtech.com/xls-file-opener",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Excel file viewing (.xls, .xlsx)",
      "CSV export functionality", 
      "JSON export functionality",
      "Browser-based processing",
      "No software installation required"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Xonix Tech",
      "url": "https://xonixtech.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
              </nav>
            </div>
          </div>
        </header>
          
        <div className="container py-8">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            XLS File Opener
          </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
              Upload and view Excel files directly in your browser. No software installation required.
            </p>
          </div>

          {/* Upload Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="card text-center">
              {!file ? (
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Upload Excel File</h3>
                    <p className="text-muted-foreground mb-6">Select your .xls or .xlsx file to get started</p>
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
                      {loading ? "Processing..." : "Choose File"}
                    </div>
                  </label>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">File Loaded Successfully!</h3>
                    <p className="text-muted-foreground mb-2">{file.name}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Size: {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>

                  <button
                    onClick={clearFile}
                    className="btn-secondary"
                  >
                    Upload Another File
                  </button>
                </div>
              )}

              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600">{error}</p>
                </div>
              )}
            </div>
          </div>

          {/* Data Display Section */}
          {data.length > 0 && (
            <div className="max-w-6xl mx-auto mb-8">
              <div className="card">
              <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold flex items-center">
                    <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0V7a1 1 0 011-1h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
                  </svg>
                  {showAllRows ? 'All Data' : 'Data Preview'}
                </h3>
                {data.length > 5 && (
                  <button
                    onClick={toggleShowAllRows}
                      className="btn-secondary flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {showAllRows ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      )}
                    </svg>
                    <span>{showAllRows ? 'Show Preview' : `Show All ${data.length} Rows`}</span>
                  </button>
                )}
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                      <tr className="border-b border-border">
                      {headers.map((header, index) => (
                          <th key={index} className="text-left py-3 px-4 text-foreground font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(showAllRows ? data : data.slice(0, 5)).map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-border hover:bg-secondary transition-colors">
                        {headers.map((header, colIndex) => (
                            <td key={colIndex} className="py-3 px-4 text-muted-foreground">
                                {row[header] || ''}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

                <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                <p>
                  Showing {showAllRows ? data.length : Math.min(5, data.length)} 
                  {!showAllRows && data.length > 5 ? ` of ${data.length}` : ''} rows
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={exportToCSV}
                      className="text-primary hover:text-primary-hover transition-colors flex items-center space-x-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Export CSV</span>
                  </button>
                  <button 
                    onClick={exportToJSON}
                      className="text-primary hover:text-primary-hover transition-colors flex items-center space-x-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download JSON</span>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Features Section */}
          <section className="py-12 bg-secondary">
            <div className="container">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Why Choose Our Excel File Opener?
              </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
                  Professional, reliable, and secure - designed for modern businesses.
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
                    Files are processed locally in your browser. Your data never leaves your device.
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
                    Process Excel files instantly with our optimized browser-based engine.
                  </p>
                </div>

                <div className="card text-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Export Options
                  </h3>
                  <p className="text-muted-foreground">
                    Export your data to CSV or JSON formats for further analysis.
                  </p>
                      </div>
                    </div>
                  </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-3">Is this Excel file opener completely free?</h3>
                  <p className="text-muted-foreground">
                    Yes! Our Excel file opener is 100% free to use with no hidden costs, subscriptions, or limitations.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-semibold mb-3">Do I need to install any software?</h3>
                  <p className="text-muted-foreground">
                    No installation required! This Excel file opener works entirely in your web browser on any device.
                  </p>
                    </div>
                
                <div className="card">
                  <h3 className="text-xl font-semibold mb-3">Are my Excel files secure?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! Files are processed locally in your browser and never uploaded to our servers, ensuring complete privacy.
                  </p>
                    </div>
                
                <div className="card">
                  <h3 className="text-xl font-semibold mb-3">What file formats are supported?</h3>
                  <p className="text-muted-foreground">
                    We support both legacy Excel files (.xls) and modern Excel files (.xlsx) formats.
                  </p>
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
    </>
  );
}
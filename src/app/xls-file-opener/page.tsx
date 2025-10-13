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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Xonix Tech
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            XLS File Opener
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Upload and view Excel files directly in your browser with advanced formatting and data analysis
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          {/* Upload Section */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 mb-8">
            <div className="text-center">
              {!file ? (
                <div className="space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Upload Excel File</h3>
                    <p className="text-gray-400 mb-6">Drag and drop or click to select your .xls or .xlsx file</p>
                  </div>

                  <label className="cursor-pointer inline-block">
                    <input
                      type="file"
                      accept=".xls,.xlsx"
                      onChange={handleFileUpload}
                      className="hidden"
                      disabled={loading}
                    />
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                      {loading ? "Processing..." : "Choose File"}
                    </div>
                  </label>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">File Loaded Successfully!</h3>
                    <p className="text-gray-300 mb-4">{file.name}</p>
                    <p className="text-sm text-gray-400 mb-6">
                      Size: {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>

                  <button
                    onClick={clearFile}
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    Upload Another File
                  </button>
                </div>
              )}

              {error && (
                <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-300">{error}</p>
                </div>
              )}
            </div>
          </div>

          {/* Data Display Section */}
          {data.length > 0 && (
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <svg className="w-6 h-6 mr-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  {showAllRows ? 'All Data' : 'Data Preview'}
                </h3>
                {data.length > 5 && (
                  <button
                    onClick={toggleShowAllRows}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
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
                    <tr className="border-b border-gray-700">
                      {headers.map((header, index) => (
                        <th key={index} className="text-left py-3 px-4 text-cyan-300">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(showAllRows ? data : data.slice(0, 5)).map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-gray-800 hover:bg-slate-700/30 transition-colors">
                        {headers.map((header, colIndex) => (
                          <td key={colIndex} className="py-3 px-4 text-gray-300">
                            {header.toLowerCase().includes('department') || 
                             header.toLowerCase().includes('category') ||
                             header.toLowerCase().includes('status') ? (
                              <span className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">
                                {row[header] || ''}
                              </span>
                            ) : (
                              <span className={colIndex === 1 ? 'text-white' : 'text-gray-300'}>
                                {row[header] || ''}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
                <p>
                  Showing {showAllRows ? data.length : Math.min(5, data.length)} 
                  {!showAllRows && data.length > 5 ? ` of ${data.length}` : ''} rows
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={exportToCSV}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Export CSV</span>
                  </button>
                  <button 
                    onClick={exportToJSON}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download JSON</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SEO Content Section */}
          <section className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                The Best Free <strong>XLS File Opener</strong> Online
              </h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Our <strong>XLS file opener</strong> allows you to open Microsoft Excel (.xls) files online without signup or registration. 
                  This powerful web-based <strong>Excel file opener</strong> supports both legacy .xls and modern .xlsx formats, 
                  making it the perfect solution for viewing spreadsheet data directly in your browser.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-4">Why Choose Our XLS File Opener?</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span><strong>No Registration Required</strong> - Open Excel files instantly without creating an account</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span><strong>100% Browser-Based</strong> - Works on any device with a modern web browser</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span><strong>Secure & Private</strong> - Files are processed locally, never uploaded to servers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span><strong>Export Options</strong> - Download data as CSV or JSON formats</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-4">Supported File Formats</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-cyan-300 mb-2">Microsoft Excel (.xls)</h4>
                        <p className="text-gray-400 text-sm">Legacy Excel format from Excel 97-2003. Our XLS file opener handles all legacy spreadsheet files with precision.</p>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-300 mb-2">Excel 2007+ (.xlsx)</h4>
                        <p className="text-gray-400 text-sm">Modern Excel format with enhanced features. Full support for complex spreadsheets and large datasets.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">How to Use Our XLS File Opener</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-white mb-2">Upload Your File</h4>
                      <p className="text-gray-400 text-sm">Click the upload button and select your .xls or .xlsx file from your device</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-white mb-2">View Data</h4>
                      <p className="text-gray-400 text-sm">Browse through your spreadsheet data with our intuitive table view</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-white mb-2">Export Data</h4>
                      <p className="text-gray-400 text-sm">Download your data in CSV or JSON format for further processing</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Perfect for Business Professionals</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Our <strong>XLS file opener</strong> is designed for professionals who need quick access to Excel files without installing software. 
                    Whether you&apos;re a data analyst, business manager, or researcher, this tool provides instant access to your spreadsheet data 
                    with professional-grade features and security.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm font-medium">Data Analysis</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm font-medium">Reports</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm font-medium">Research</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm font-medium">Presentations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-2">Is this XLS file opener completely free?</h4>
                      <p className="text-gray-400 text-sm">Yes! Our Excel file opener is 100% free to use with no hidden costs, subscriptions, or limitations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-2">Do I need to install any software?</h4>
                      <p className="text-gray-400 text-sm">No installation required! This XLS file opener works entirely in your web browser on any device.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-2">Are my Excel files secure?</h4>
                      <p className="text-gray-400 text-sm">Absolutely! Files are processed locally in your browser and never uploaded to our servers, ensuring complete privacy.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-2">What file sizes are supported?</h4>
                      <p className="text-gray-400 text-sm">Our XLS file opener can handle most standard Excel files. Very large files may take longer to process but are fully supported.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      </div>
    </>
  );
}

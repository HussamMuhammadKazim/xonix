import Link from "next/link";
import type { Metadata } from "next";
import XlsToJsonClient from "./XlsToJsonClient";

export const metadata: Metadata = {
  title: "Free XLS to JSON Converter Online - Convert Excel Files to JSON | Xonix Tech",
  description: "Convert Excel files (.xls, .xlsx) to JSON format instantly and for free. Perfect for developers, APIs, and databases. Professional-grade conversion with clean JSON output. Works entirely in your browser.",
  keywords: [
    "xls to json converter",
    "excel to json converter",
    "xlsx to json",
    "json converter",
    "excel json converter",
    "spreadsheet to json",
    "data conversion",
    "excel export json",
    "json export",
    "free json converter",
    "online json converter",
    "excel data export",
    "spreadsheet data converter",
    "xls converter",
    "xlsx converter",
    "data migration",
    "excel to json online",
    "free excel converter",
    "browser json converter",
    "secure file conversion",
    "api data converter",
    "database converter",
    "developer tools",
    "json data format"
  ],
  openGraph: {
    title: "Free XLS to JSON Converter Online - Convert Excel Files to JSON | Xonix Tech",
    description: "Convert Excel files (.xls, .xlsx) to JSON format instantly and for free. Perfect for developers, APIs, and databases. Professional-grade conversion with clean JSON output. Works entirely in your browser.",
    type: "website",
    url: "https://xonixtech.com/xls-to-json",
    siteName: "Xonix Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free XLS to JSON Converter Online - Convert Excel Files to JSON",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free XLS to JSON Converter Online - Convert Excel Files to JSON | Xonix Tech",
    description: "Convert Excel files (.xls, .xlsx) to JSON format instantly and for free. Perfect for developers, APIs, and databases. Professional-grade conversion with clean JSON output. Works entirely in your browser.",
    images: ["/twitter-image.png"],
    creator: "@xonixtech",
  },
  alternates: {
    canonical: "https://xonixtech.com/xls-to-json",
  },
};

export default function XlsToJsonConverter() {
  

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
            XLS to JSON Converter
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
            Convert Excel files (.xls, .xlsx) to JSON format instantly. Free, secure, and works entirely in your browser.
          </p>
        </div>

        {/* Converter Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <XlsToJsonClient />
        </div>

        {/* Features Section */}
        <section className="py-12 bg-secondary">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Our XLS to JSON Converter?
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
                  Convert Excel files to JSON in seconds with our optimized browser-based processing engine.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Developer Ready
                </h3>
                <p className="text-muted-foreground">
                  Perfect JSON structure for APIs, databases, and web applications. Clean, formatted output.
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
                The Best Free XLS to JSON Converter Online
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our <strong>XLS to JSON converter</strong> allows you to transform Microsoft Excel files (.xls, .xlsx) into JSON format instantly. 
                  This powerful web-based <strong>Excel to JSON converter</strong> supports both legacy .xls and modern .xlsx formats, 
                  making it the perfect solution for developers, data scientists, and API integration workflows.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">How to Convert XLS to JSON</h3>
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
                        <span>Click "Download JSON File" to save your converted data</span>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Supported File Formats</h3>
                    <div className="space-y-4">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Microsoft Excel (.xls)</h4>
                        <p className="text-muted-foreground text-sm">Legacy Excel format from Excel 97-2003. Our XLS to JSON converter handles all legacy spreadsheet files with precision.</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Excel 2007+ (.xlsx)</h4>
                        <p className="text-muted-foreground text-sm">Modern Excel format with enhanced features. Full support for complex spreadsheets and large datasets.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-4">Perfect for Developers and Data Professionals</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our <strong>Excel to JSON converter</strong> is designed for developers, data scientists, and professionals who need reliable data conversion for APIs, 
                    databases, and web applications. Whether you're building <strong>web applications</strong>, <strong>mobile apps</strong>, or working with <strong>data analysis</strong>, 
                    this tool provides clean, structured JSON output that's ready for integration.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">APIs</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">Databases</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">Web Apps</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">Mobile Apps</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Is this XLS to JSON converter completely free?</h4>
                      <p className="text-muted-foreground text-sm">Yes! Our Excel to JSON converter is 100% free to use with no hidden costs, subscriptions, or limitations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Do I need to install any software?</h4>
                      <p className="text-muted-foreground text-sm">No installation required! This XLS to JSON converter works entirely in your web browser on any device.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Are my Excel files secure?</h4>
                      <p className="text-muted-foreground text-sm">Absolutely! Files are processed locally in your browser and never uploaded to our servers, ensuring complete privacy.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What's the JSON structure output?</h4>
                      <p className="text-muted-foreground text-sm">The output is a clean JSON array where each object represents a row from your Excel file, with column headers as keys.</p>
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

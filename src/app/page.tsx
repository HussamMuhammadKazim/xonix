import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xonix Tech - Professional Web Tools | Excel File Opener & Data Converters",
  description: "Professional web tools for modern businesses. Open Excel files (.xls, .xlsx) in your browser, convert to CSV/JSON formats. Free, secure, and works entirely in your browser. No software installation required.",
  keywords: [
    "excel file opener",
    "xls viewer",
    "xlsx viewer", 
    "excel to csv converter",
    "excel to json converter",
    "online excel tools",
    "free excel viewer",
    "browser excel opener",
    "data conversion tools",
    "spreadsheet tools",
    "professional web tools",
    "xonix tech",
    "excel online",
    "xls online",
    "csv converter",
    "json converter",
    "data export tools",
    "business productivity tools",
    "excel file processing",
    "spreadsheet data tools"
  ],
  openGraph: {
    title: "Xonix Tech - Professional Web Tools | Excel File Opener & Data Converters",
    description: "Professional web tools for modern businesses. Open Excel files (.xls, .xlsx) in your browser, convert to CSV/JSON formats. Free, secure, and works entirely in your browser.",
    type: "website",
    url: "https://xonixtech.com",
    siteName: "Xonix Tech",
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
    description: "Professional web tools for modern businesses. Open Excel files (.xls, .xlsx) in your browser, convert to CSV/JSON formats. Free, secure, and works entirely in your browser.",
    images: ["/twitter-image.png"],
    creator: "@xonixtech",
  },
  alternates: {
    canonical: "https://xonixtech.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">
              Xonix Tech
            </h1>
            <nav className="hidden md:block space-x-6">
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

      {/* Hero Section */}
      <section className="py-12">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Web Tools
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
            Reliable, efficient tools designed for modern businesses. 
            Streamline your workflow with our professional-grade utilities.
          </p>
          <Link href="/xls-file-opener" className="btn">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 bg-secondary">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Tools?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
              Built with professionalism and reliability in mind, our tools help you work more efficiently.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Excel File Opener
              </h3>
              <p className="text-muted-foreground">
                Open and view .xls and .xlsx files directly in your browser. 
                No software installation required.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Data Export
              </h3>
              <p className="text-muted-foreground">
                Export your data to CSV or JSON formats with one click. 
                Perfect for data analysis and reporting.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Fast & Reliable
              </h3>
              <p className="text-muted-foreground">
                Optimized for speed and reliability. Built with modern web technologies 
                for the best user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Our Tools
            </h2>
            <p className="text-lg text-muted-foreground text-center" style={{textAlign: 'center'}}>
              Professional tools designed to make your work easier and more efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/xls-file-opener" className="block">
              <div className="card hover:shadow-lg transition-all duration-200 h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    XLS File Opener
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Open and view Excel files in your browser with advanced formatting support.
                  </p>
                  <div className="flex items-center justify-center text-primary font-medium">
                    Try it now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/xls-to-csv" className="block">
              <div className="card hover:shadow-lg transition-all duration-200 h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    XLS to CSV Converter
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Convert Excel files to CSV format instantly. Perfect for data analysis and import.
                  </p>
                  <div className="flex items-center justify-center text-primary font-medium">
                    Convert now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/xls-to-json" className="block">
              <div className="card hover:shadow-lg transition-all duration-200 h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    XLS to JSON Converter
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Convert Excel files to JSON format. Perfect for APIs, databases, and web applications.
                  </p>
                  <div className="flex items-center justify-center text-primary font-medium">
                    Convert now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
            Join thousands of professionals who trust our tools for their daily workflow.
          </p>
          <Link href="/xls-file-opener" className="btn">
            Open Excel Files
          </Link>
        </div>
      </section>

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
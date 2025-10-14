import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Xonix Tech - Professional Web Tools & Excel File Processing Solutions",
  description: "Learn about Xonix Tech, founded by Hussam Muhammad Kazim, AI Automation Engineer. We provide professional web tools including Excel file openers, data converters, and productivity solutions for modern businesses.",
  keywords: [
    "about xonix tech",
    "hussam muhammad kazim",
    "ai automation engineer",
    "excel file tools",
    "web development company",
    "data processing tools",
    "professional web tools",
    "excel file opener company",
    "data conversion services",
    "business productivity tools",
    "xonix tech founder",
    "web tools development",
    "excel file processing",
    "data analysis tools",
    "business automation tools"
  ],
  openGraph: {
    title: "About Xonix Tech - Professional Web Tools & Excel File Processing Solutions",
    description: "Learn about Xonix Tech, founded by Hussam Muhammad Kazim, AI Automation Engineer. We provide professional web tools including Excel file openers, data converters, and productivity solutions for modern businesses.",
    type: "website",
    url: "https://xonixtech.com/about",
    siteName: "Xonix Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Xonix Tech - Professional Web Tools and Excel File Processing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Xonix Tech - Professional Web Tools & Excel File Processing Solutions",
    description: "Learn about Xonix Tech, founded by Hussam Muhammad Kazim, AI Automation Engineer. We provide professional web tools including Excel file openers, data converters, and productivity solutions for modern businesses.",
    images: ["/twitter-image.png"],
    creator: "@xonixtech",
  },
  alternates: {
    canonical: "https://xonixtech.com/about",
  },
};

export default function About() {
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

      <div className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Xonix Tech
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
            Empowering professionals with simple, efficient online tools designed for modern workflows.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Founder Section */}
            <div className="card">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">H</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Hussam Muhammad Kazim</h2>
                <p className="text-primary font-semibold">Founder & AI Automation Engineer</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Professional Background</h3>
                  <p className="text-muted-foreground">
                    AI Automation Engineer with 3+ months of specialized experience in artificial intelligence and automation technologies, 
                    backed by 2+ years of comprehensive computer science education and practical experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Mission Statement</h3>
                  <p className="text-muted-foreground">
                    My mission is to provide people with easy-to-use online tools that simplify complex tasks and enhance productivity 
                    in both personal and professional settings.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:husamkazim77@gmail.com" className="text-primary hover:text-primary-hover">husamkazim77@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Company Section */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">About Xonix Tech</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become the go-to platform for professionals seeking reliable, efficient, and user-friendly online tools 
                    that integrate seamlessly into modern workflows.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">What We Do</h3>
                  <p className="text-muted-foreground">
                    We develop and maintain professional-grade web tools that help businesses and individuals work more efficiently. 
                    Our focus is on creating solutions that are both powerful and easy to use.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Our Values</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• <strong>Simplicity:</strong> Complex problems deserve simple solutions</li>
                    <li>• <strong>Reliability:</strong> Our tools work when you need them most</li>
                    <li>• <strong>Privacy:</strong> Your data security is our priority</li>
                    <li>• <strong>Innovation:</strong> Continuously improving our offerings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="card mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Excel File Processing</h3>
                <p className="text-muted-foreground text-sm">
                  Professional Excel file viewer and processor with export capabilities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Data Export Tools</h3>
                <p className="text-muted-foreground text-sm">
                  Convert and export data to various formats for analysis and reporting
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Secure Processing</h3>
                <p className="text-muted-foreground text-sm">
                  All processing happens locally in your browser for maximum privacy
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience Our Tools?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
              Try our Excel file opener and see how simple professional tools can be.
            </p>
            <Link href="/xls-file-opener" className="btn">
              Try Excel File Opener
            </Link>
          </div>
        </div>
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

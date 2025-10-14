import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Xonix Tech - Get Support for Excel File Tools & Web Utilities",
  description: "Contact Xonix Tech for support, feedback, or business inquiries about our Excel file opener, data conversion tools, and professional web utilities. Get help with our free online tools.",
  keywords: [
    "contact xonix tech",
    "excel file opener support",
    "data converter support",
    "web tools support",
    "technical support",
    "business inquiries",
    "customer service",
    "excel tools help",
    "data conversion help",
    "web utilities support",
    "xonix tech contact",
    "excel file opener contact",
    "data processing support",
    "professional tools support",
    "online tools help"
  ],
  openGraph: {
    title: "Contact Xonix Tech - Get Support for Excel File Tools & Web Utilities",
    description: "Contact Xonix Tech for support, feedback, or business inquiries about our Excel file opener, data conversion tools, and professional web utilities. Get help with our free online tools.",
    type: "website",
    url: "https://xonixtech.com/contact",
    siteName: "Xonix Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Xonix Tech - Support for Excel File Tools and Web Utilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Xonix Tech - Get Support for Excel File Tools & Web Utilities",
    description: "Contact Xonix Tech for support, feedback, or business inquiries about our Excel file opener, data conversion tools, and professional web utilities. Get help with our free online tools.",
    images: ["/twitter-image.png"],
    creator: "@xonixtech",
  },
  alternates: {
    canonical: "https://xonixtech.com/contact",
  },
};

export default function Contact() {
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
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
            Get in touch with our team for support, feedback, or business inquiries.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="card mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-3">
                  For general inquiries, support, and business matters
                </p>
                <a href="mailto:husamkazim77@gmail.com" className="text-primary hover:text-primary-hover font-medium break-all">
                  husamkazim77@gmail.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Remote-first company serving clients globally
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How quickly do you respond to emails?</h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please mention "URGENT" in your subject line.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you offer technical support?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide technical support for all our tools. If you encounter any issues, please contact us with details about the problem and we'll help you resolve it.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I suggest new features or tools?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We welcome feature suggestions and ideas for new tools. Send us your suggestions and we'll consider them for future development.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you offer custom development services?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer custom web tool development services for businesses. Contact us to discuss your specific requirements and we'll provide a tailored solution.
                </p>
              </div>
            </div>
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

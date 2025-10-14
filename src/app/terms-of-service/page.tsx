import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Xonix Tech | Legal Terms & Conditions for Web Tools",
  description: "Read Xonix Tech's terms of service and conditions for using our Excel file opener, data converters, and web tools. Understand your rights and responsibilities when using our services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "xonix tech terms",
    "legal terms",
    "user agreement",
    "service terms",
    "web tools terms",
    "excel tools terms",
    "data processing terms",
    "browser tools terms",
    "online service agreement",
    "terms of use",
    "legal conditions",
    "user responsibilities",
    "service conditions"
  ],
  openGraph: {
    title: "Terms of Service - Xonix Tech | Legal Terms & Conditions for Web Tools",
    description: "Read Xonix Tech's terms of service and conditions for using our Excel file opener, data converters, and web tools. Understand your rights and responsibilities when using our services.",
    type: "website",
    url: "https://xonixtech.com/terms-of-service",
    siteName: "Xonix Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service - Xonix Tech Legal Terms and Conditions for Web Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Xonix Tech | Legal Terms & Conditions for Web Tools",
    description: "Read Xonix Tech's terms of service and conditions for using our Excel file opener, data converters, and web tools. Understand your rights and responsibilities when using our services.",
    images: ["/twitter-image.png"],
    creator: "@xonixtech",
  },
  alternates: {
    canonical: "https://xonixtech.com/terms-of-service",
  },
};

export default function TermsOfService() {
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
            </nav>
          </div>
        </div>
      </header>

      <div className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
            Last updated: December 2024
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using Xonix Tech's website and services (collectively, the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-muted-foreground">
              These Terms of Service ("Terms") govern your use of our website located at xonixtech.com and our web-based tools and services.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">2.1 Our Services</h3>
                <p className="text-muted-foreground mb-3">
                  Xonix Tech provides web-based tools and utilities, including but not limited to:
                </p>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li>• Excel file opener and viewer (.xls, .xlsx formats)</li>
                  <li>• Excel to CSV converter</li>
                  <li>• Excel to JSON converter</li>
                  <li>• Other data processing and conversion tools</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">2.2 Local Processing</h3>
                <p className="text-muted-foreground">
                  <strong>Important:</strong> All file processing occurs locally in your web browser. We do not store, transmit, or have access to your uploaded files or their contents. Your files remain completely private and secure on your device.
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground mb-4">
                By using our Service, you agree to:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• Use the Service only for lawful purposes and in accordance with these Terms</li>
                <li>• Not upload, transmit, or distribute any content that is illegal, harmful, threatening, abusive, or otherwise objectionable</li>
                <li>• Not attempt to gain unauthorized access to any part of the Service</li>
                <li>• Not use the Service in any way that could damage, disable, overburden, or impair our servers or networks</li>
                <li>• Not use any automated means to access the Service without our prior written consent</li>
                <li>• Respect the intellectual property rights of others</li>
                <li>• Comply with all applicable laws and regulations</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">4.1 Our Intellectual Property</h3>
                <p className="text-muted-foreground">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Xonix Tech and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">4.2 Your Content</h3>
                <p className="text-muted-foreground">
                  You retain ownership of any content you upload to our Service. By using our Service, you grant us a limited, non-exclusive, royalty-free license to process your content solely for the purpose of providing the Service to you. This license terminates when you stop using the Service.
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Privacy and Data Protection</h2>
            <p className="text-muted-foreground mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
            </p>
            <p className="text-muted-foreground">
              <strong>Key Points:</strong> We do not store your uploaded files. All processing occurs locally in your browser. We may collect usage analytics and contact information you voluntarily provide.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Disclaimers and Limitations of Liability</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">6.1 Service Availability</h3>
                <p className="text-muted-foreground">
                  We strive to provide continuous service availability, but we do not guarantee that the Service will be available at all times. The Service may be temporarily unavailable due to maintenance, updates, or technical issues.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">6.2 No Warranties</h3>
                <p className="text-muted-foreground">
                  The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">6.3 Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  In no event shall Xonix Tech, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Prohibited Uses</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground mb-4">
                You may not use our Service:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>• To submit false or misleading information</li>
                <li>• To upload or transmit viruses or any other type of malicious code</li>
                <li>• To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>• For any obscene or immoral purpose</li>
                <li>• To interfere with or circumvent the security features of the Service</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">
              Our Service may contain links to third-party websites or services that are not owned or controlled by Xonix Tech. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
            <p className="text-muted-foreground">
              We may use third-party services such as Google Analytics and Google AdSense. These services have their own terms and privacy policies, which you should review.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
            <p className="text-muted-foreground mb-4">
              We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-muted-foreground">
              Upon termination, your right to use the Service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Severability</h2>
            <p className="text-muted-foreground">
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Email: <a href="mailto:husamkazim77@gmail.com" className="text-primary hover:text-primary-hover">husamkazim77@gmail.com</a>
              </p>
              <p className="text-muted-foreground">
                Website: <a href="https://xonixtech.com" className="text-primary hover:text-primary-hover">xonixtech.com</a>
              </p>
              <p className="text-muted-foreground">
                Company: Xonix Tech
              </p>
              <p className="text-muted-foreground">
                Founder: Hussam Muhammad Kazim, AI Automation Engineer
              </p>
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
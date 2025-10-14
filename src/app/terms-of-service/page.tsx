import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Xonix Tech | Excel File Tools & Web Utilities Usage Terms",
  description: "Read Xonix Tech's terms of service for using our Excel file opener, data converters, and web tools. Learn about usage rights, responsibilities, and service limitations.",
  keywords: [
    "terms of service",
    "xonix tech terms",
    "excel file tools terms",
    "web tools usage terms",
    "service agreement",
    "usage rights",
    "terms and conditions",
    "excel opener terms",
    "data converter terms",
    "web utilities terms",
    "service limitations",
    "user responsibilities",
    "legal terms",
    "usage policy",
    "terms of use"
  ],
  openGraph: {
    title: "Terms of Service - Xonix Tech | Excel File Tools & Web Utilities Usage Terms",
    description: "Read Xonix Tech's terms of service for using our Excel file opener, data converters, and web tools. Learn about usage rights, responsibilities, and service limitations.",
    type: "website",
    url: "https://xonixtech.com/terms-of-service",
    siteName: "Xonix Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service - Xonix Tech Excel File Tools and Web Utilities Usage Terms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Xonix Tech | Excel File Tools & Web Utilities Usage Terms",
    description: "Read Xonix Tech's terms of service for using our Excel file opener, data converters, and web tools. Learn about usage rights, responsibilities, and service limitations.",
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
              <Link href="/privacy-policy" className="text-primary hover:text-primary-hover">
                Privacy
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
            <p className="text-muted-foreground">
              By accessing and using Xonix Tech's website and services, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Permission is granted to temporarily download one copy of Xonix Tech's materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose or for any public display</li>
                <li>• Attempt to reverse engineer any software contained on the website</li>
                <li>• Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Service Description</h2>
            <p className="text-muted-foreground">
              Xonix Tech provides web-based tools and utilities, including but not limited to Excel file processing, data export capabilities, and other productivity tools. 
              All processing of user files occurs locally in the user's browser, and we do not store or have access to user-uploaded files or data.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground mb-4">
                When using our services, you agree to:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• Use our services only for lawful purposes</li>
                <li>• Not upload files containing malicious code, viruses, or harmful content</li>
                <li>• Respect intellectual property rights of others</li>
                <li>• Not attempt to gain unauthorized access to our systems</li>
                <li>• Not use our services to violate any applicable laws or regulations</li>
                <li>• Provide accurate information when contacting us</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Privacy and Data Protection</h2>
            <p className="text-muted-foreground">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices. 
              By using our services, you consent to the collection and use of information as described in our Privacy Policy.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on Xonix Tech's website are provided on an 'as is' basis. Xonix Tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall Xonix Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Xonix Tech's website, even if Xonix Tech or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Accuracy of Materials</h2>
            <p className="text-muted-foreground">
              The materials appearing on Xonix Tech's website could include technical, typographical, or photographic errors. Xonix Tech does not warrant that any of the materials on its website are accurate, complete, or current. Xonix Tech may make changes to the materials contained on its website at any time without notice. However, Xonix Tech does not make any commitment to update the materials.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Links to Third-Party Sites</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites or services that are not owned or controlled by Xonix Tech. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Xonix Tech shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Prohibited Uses</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground mb-4">
                You may not use our services:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>• To submit false or misleading information</li>
                <li>• To upload or transmit viruses or any other type of malicious code</li>
                <li>• To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the services will cease immediately.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. 
              What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which Xonix Tech operates, without regard to its conflict of law provisions. 
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4">
              <p className="text-muted-foreground">
                Email: <a href="mailto:husamkazim77@gmail.com" className="text-primary hover:text-primary-hover">husamkazim77@gmail.com</a>
              </p>
              <p className="text-muted-foreground">
                Website: <a href="https://xonixtech.com" className="text-primary hover:text-primary-hover">xonixtech.com</a>
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

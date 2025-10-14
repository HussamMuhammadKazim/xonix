import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Xonix Tech | Secure Excel File Processing & Data Protection",
  description: "Read Xonix Tech's privacy policy. Learn how we protect your data when using our Excel file opener, data converters, and web tools. Your files are processed locally and never stored on our servers.",
  keywords: [
    "privacy policy",
    "xonix tech privacy",
    "data protection",
    "excel file privacy",
    "secure file processing",
    "local file processing",
    "data security",
    "privacy protection",
    "file security",
    "browser-based processing",
    "no data storage",
    "secure excel tools",
    "data privacy",
    "file confidentiality",
    "secure web tools"
  ],
  openGraph: {
    title: "Privacy Policy - Xonix Tech | Secure Excel File Processing & Data Protection",
    description: "Read Xonix Tech's privacy policy. Learn how we protect your data when using our Excel file opener, data converters, and web tools. Your files are processed locally and never stored on our servers.",
    type: "website",
    url: "https://xonixtech.com/privacy-policy",
    siteName: "Xonix Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Xonix Tech Secure Excel File Processing and Data Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Xonix Tech | Secure Excel File Processing & Data Protection",
    description: "Read Xonix Tech's privacy policy. Learn how we protect your data when using our Excel file opener, data converters, and web tools. Your files are processed locally and never stored on our servers.",
    images: ["/twitter-image.png"],
    creator: "@xonixtech",
  },
  alternates: {
    canonical: "https://xonixtech.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
            Last updated: December 2024
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Xonix Tech is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website xonixtech.com and use our services.
            </p>
            <p className="text-muted-foreground">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">2.1 Information You Provide</h3>
                <p className="text-muted-foreground mb-3">
                  We may collect information that you voluntarily provide to us when you:
                </p>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li>• Contact us through our contact form</li>
                  <li>• Subscribe to our newsletter</li>
                  <li>• Participate in surveys or feedback forms</li>
                  <li>• Communicate with us via email</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-3">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li>• IP address and location data</li>
                  <li>• Browser type and version</li>
                  <li>• Operating system</li>
                  <li>• Pages visited and time spent on our site</li>
                  <li>• Referring website</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">2.3 File Processing</h3>
                <p className="text-muted-foreground">
                  <strong>Important:</strong> When you upload files to our tools (such as Excel files), all processing occurs locally in your browser. 
                  We do not store, transmit, or have access to your uploaded files or their contents. Your files remain completely private and secure.
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• To provide and maintain our services</li>
                <li>• To respond to your inquiries and provide customer support</li>
                <li>• To improve our website and services</li>
                <li>• To analyze usage patterns and optimize user experience</li>
                <li>• To send you updates about our services (with your consent)</li>
                <li>• To comply with legal obligations</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking Technologies</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• Remember your preferences</li>
                <li>• Analyze website traffic and usage</li>
                <li>• Provide personalized content</li>
                <li>• Improve website functionality</li>
              </ul>
              <p className="text-muted-foreground">
                You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
              </p>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground mb-4">
                We may use third-party services that collect information about you:
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">5.1 Google Analytics</h3>
                <p className="text-muted-foreground">
                  We use Google Analytics to analyze website usage. Google Analytics may collect information about your visits to our website. 
                  You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">5.2 Google AdSense</h3>
                <p className="text-muted-foreground">
                  Our website may display advertisements through Google AdSense. Google AdSense uses cookies to serve ads based on your visits to our site and other sites on the Internet.
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. 
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• The right to access your personal information</li>
                <li>• The right to correct inaccurate information</li>
                <li>• The right to delete your personal information</li>
                <li>• The right to restrict processing of your information</li>
                <li>• The right to data portability</li>
                <li>• The right to object to processing</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise these rights, please contact us at <a href="mailto:husamkazim77@gmail.com" className="text-primary hover:text-primary-hover">husamkazim77@gmail.com</a>.
              </p>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
              If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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

import Link from "next/link";
import type { Metadata } from "next";
import NameGeneratorClient from "./NameGeneratorClient";

export const metadata: Metadata = {
  title: "Name Arabic Generator - Free Arabic Name Generator & Translator | Xonix Tech",
  description: "Generate Arabic names from English with our free name Arabic generator. Translate names to Arabic script with pronunciation, nicknames, and cultural context. Professional Arabic name generator tool.",
  keywords: [
    "name arabic generator",
    "arabic name generator",
    "arabic name translator",
    "english to arabic names",
    "arabic names generator",
    "name generator arabic",
    "arabic name converter",
    "arabic script generator",
    "arabic pronunciation generator",
    "cultural name generator",
    "islamic name generator",
    "middle eastern names",
    "arabic naming generator",
    "free arabic name generator",
    "arabic name tool",
    "name translation generator",
    "arabic language generator",
    "international name generator",
    "business name generator arabic",
    "professional arabic generator"
  ],
  openGraph: {
    title: "Name Arabic Generator - Free Arabic Name Generator & Translator | Xonix Tech",
    description: "Generate Arabic names from English with our free name Arabic generator. Translate names to Arabic script with pronunciation, nicknames, and cultural context.",
    type: "website",
    url: "https://xonixtech.com/name-arabic-generator",
    siteName: "Xonix Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Name Arabic Generator - Free Arabic Name Generator and Translator Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Name Arabic Generator - Free Arabic Name Generator & Translator | Xonix Tech",
    description: "Generate Arabic names from English with our free name Arabic generator. Translate names to Arabic script with pronunciation, nicknames, and cultural context.",
    images: ["/twitter-image.png"],
    creator: "@xonixtech",
  },
  alternates: {
    canonical: "https://xonixtech.com/name-arabic-generator",
  },
};

export default function NameArabicGenerator() {

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

      <div className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Name Arabic Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center" style={{textAlign: 'center'}}>
            Generate Arabic names from English with our free name Arabic generator. Translate names to Arabic script with pronunciation and cultural context.
          </p>
        </div>

        {/* Main Generator */}
        <NameGeneratorClient />

        {/* How it Works */}
        <div className="max-w-4xl mx-auto">
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">How Our Name Arabic Generator Works</h2>
            <p className="text-muted-foreground mb-4">
              Our name Arabic generator uses a comprehensive database of common names and their Arabic equivalents, 
              accounting for proper pronunciation, cultural significance, and regional variations.
            </p>
            <p className="text-muted-foreground">
              The generator provides both Arabic script and romanized versions, helping you understand the written and 
              spoken forms of your generated Arabic name.
            </p>
          </div>

          {/* Arabic Naming Conventions */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">Arabic Naming Conventions</h2>
            <p className="text-muted-foreground mb-4">
              Traditional Arabic names often include several elements:
            </p>
            <ul className="text-muted-foreground space-y-2 ml-4">
              <li>• <strong>Personal name</strong> (اسم ism)</li>
              <li>• <strong>Father's name</strong> with "son/daughter of" (بن bin/بنت bint)</li>
              <li>• <strong>Family name</strong> (نسبة nisba) or surname</li>
              <li>• <strong>Optional elements</strong> like patronymic chain, tribal affiliation, or place of origin</li>
              <li>• <strong>Optional honorific title</strong> (كنية kunya) or teknonym</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Arabic names are written in Arabic script, with proper diacritical marks (تشكيل tashkeel) 
              indicating precise pronunciation. Names often have religious significance or reflect admirable qualities.
            </p>
          </div>

          {/* Cultural Context */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">Cultural Context and History</h2>
            <p className="text-muted-foreground mb-4">
              Arabic naming traditions reflect deep cultural and religious heritage, dating back to pre-Islamic 
              tribal customs. The practice of patronymic chains (naming ancestors back several generations) 
              emerged to preserve tribal lineages and family histories.
            </p>
            <p className="text-muted-foreground">
              The kunya tradition, where parents are called "father/mother of" their firstborn child, has been 
              an important cultural feature since early Islamic times.
            </p>
          </div>

          {/* Modern Significance */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">Modern Significance</h2>
            <p className="text-muted-foreground mb-4">
              Today, Arabic naming practices vary by region and country while maintaining traditional elements. 
              While many families preserve classical naming patterns, urban areas often adopt simplified versions.
            </p>
            <p className="text-muted-foreground">
              Understanding Arabic name equivalents is particularly valuable for international business, legal 
              documentation, and cultural integration, especially given the variations between formal and 
              colloquial usage.
            </p>
          </div>

          {/* Nicknames Guide */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Nicknames & Diminutives Guide</h2>
            <p className="text-muted-foreground mb-4">
              Arabic nicknames often follow specific patterns:
            </p>
            <ul className="text-muted-foreground space-y-2 ml-4">
              <li>• Adding Abu/Umm (father/mother of) as a respectful form</li>
              <li>• Using diminutive patterns like "فُعَيل" (fu'ayl)</li>
              <li>• Shortening longer names (Abdullah → Abed)</li>
              <li>• Creating rhyming duplications (Sameer → Samsoum)</li>
              <li>• Regional variations (different diminutives in Levantine, Gulf, North African dialects)</li>
            </ul>
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

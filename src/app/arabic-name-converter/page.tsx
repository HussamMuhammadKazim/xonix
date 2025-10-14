import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arabic Name Converter - Translate English Names to Arabic | Xonix Tech",
  description: "Convert any English name to Arabic with proper pronunciation and cultural context. Free Arabic name translator with nicknames and cultural significance. Professional tool for international business and cultural integration.",
  keywords: [
    "Arabic name converter",
    "English to Arabic names",
    "Arabic name translator",
    "Arabic name generator",
    "translate names to Arabic",
    "Arabic pronunciation",
    "cultural names",
    "international names",
    "Arabic nicknames",
    "name translation tool"
  ],
  openGraph: {
    title: "Arabic Name Converter - Translate English Names to Arabic",
    description: "Convert any English name to Arabic with proper pronunciation and cultural context. Free Arabic name translator with nicknames and cultural significance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arabic Name Converter - Translate English Names to Arabic",
    description: "Convert any English name to Arabic with proper pronunciation and cultural context. Free Arabic name translator with nicknames and cultural significance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ArabicNameConverterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Arabic Name Converter
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Translate English names to Arabic with proper pronunciation and cultural context
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Convert Your Name to Arabic
            </h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="englishName" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your English name:
                </label>
                <input
                  type="text"
                  id="englishName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., John, Sarah, Michael"
                />
              </div>
              
              <div className="text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
                  Convert to Arabic
                </button>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Arabic Translation:
                </h3>
                <div className="text-2xl text-gray-700 text-center">
                  <span className="text-3xl font-bold text-blue-600">جون</span>
                  <p className="text-sm text-gray-500 mt-2">Pronunciation: John</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Features
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Accurate Arabic translations</li>
                <li>• Pronunciation guides</li>
                <li>• Cultural context</li>
                <li>• Multiple variations</li>
                <li>• Free to use</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Popular Names
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-600">John → جون</div>
                <div className="text-gray-600">Sarah → سارة</div>
                <div className="text-gray-600">Michael → مايكل</div>
                <div className="text-gray-600">Emma → إيما</div>
                <div className="text-gray-600">David → ديفيد</div>
                <div className="text-gray-600">Lisa → ليزا</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

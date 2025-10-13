import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            XONIX TECH
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wider">
            FUTURISTIC TOOLS FOR THE MODERN WORLD
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          
          {/* SEO-optimized content */}
          <section className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Professional Excel File Opener & Data Processing Tools
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Transform your workflow with Xonix Tech&apos;s cutting-edge web-based tools. 
              Our <strong>Excel file opener</strong> allows you to view, analyze, and export 
              spreadsheet data directly in your browser. Perfect for <strong>business professionals</strong>, 
              <strong>data analysts</strong>, and anyone who needs reliable <strong>data processing tools</strong>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Excel Online Viewer</h3>
                <p className="text-gray-300 text-sm">
                  Open and view .xls and .xlsx files without installing any software. 
                  Our browser-based Excel viewer supports all major spreadsheet formats.
                </p>
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Data Export Tools</h3>
                <p className="text-gray-300 text-sm">
                  Export your data to CSV or JSON formats with one click. 
                  Perfect for data analysis, reporting, and integration with other tools.
                </p>
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-pink-400 mb-3">Modern Interface</h3>
                <p className="text-gray-300 text-sm">
                  Experience a futuristic, responsive design that works seamlessly 
                  across all devices. Built for productivity and user experience.
                </p>
              </div>
            </div>
          </section>
        </header>

        {/* Tools Grid */}
        <main className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* XLS File Opener Tool */}
            <Link href="/xls-file-opener" className="group">
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 h-64 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                
                {/* Tool icon */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    XLS File Opener
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Open and view Excel files in your browser with advanced formatting support
                  </p>
                  
                  {/* Hover effect indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-20 text-gray-400">
          <p className="text-sm">
            © 2024 Xonix Tech. Building the future, one tool at a time.
          </p>
        </footer>
      </div>
    </div>
  );
}

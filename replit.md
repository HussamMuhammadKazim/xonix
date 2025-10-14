# Xonix Tech - Futuristic Tools

## Overview

Xonix Tech is a modern web application providing professional Excel file processing and data conversion tools. The platform enables users to open, view, and convert Excel files (.xls, .xlsx) directly in their browser without requiring software installation. All file processing happens client-side for maximum security and privacy.

The application is built with Next.js 15 (App Router) and uses the SheetJS (xlsx) library for Excel file processing. It includes tools for:
- Excel file viewing and analysis
- Excel to CSV conversion
- Excel to JSON conversion
- Arabic name translation/transliteration

The project emphasizes SEO optimization, performance, and security while maintaining a clean, modern user interface with dark theme styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15.5.4 with App Router
- Uses React 19.1.0 for UI components
- TypeScript for type safety
- Server-side rendering (SSR) and static generation for optimal SEO
- Client components for interactive file processing features

**Styling**: Tailwind CSS v4
- Dark theme as default (forced, no light mode)
- Custom CSS variables for theming
- Responsive design with mobile-first approach
- Google Fonts integration (Inter, Source Code Pro)

**File Processing**: Client-side only
- SheetJS (xlsx) library v0.18.5 for Excel file parsing
- All processing occurs in the browser (ArrayBuffer-based)
- No server uploads - files never leave the user's device
- Support for both .xls and .xlsx formats

### Backend Architecture

**Runtime**: Next.js API Routes (Node.js)
- Minimal backend footprint - most functionality is client-side
- Single API endpoint: `/api/transliterate` for Arabic name conversion
- Edge runtime capability with fallback to Node.js

**Security Features**:
- CORS protection with allowlist for specific origins
- Rate limiting (30 requests per minute per IP)
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- CSP-ready architecture
- XSS protection through React's built-in escaping

**Performance Optimizations**:
- Compression enabled
- Image optimization (WebP, AVIF formats)
- Long-term caching (1 year for images)
- Scroll restoration
- Turbopack for faster builds

### SEO & Metadata Strategy

**Comprehensive SEO**:
- Dynamic metadata per page with Open Graph and Twitter Card support
- XML sitemap generation
- robots.txt configuration for search engine crawling
- Structured data-ready architecture
- Keyword-rich content and descriptions

**PWA Features** (manifest.json):
- Installable web app
- Custom app icons and screenshots
- Offline-capable architecture
- Shortcuts for quick tool access

### External Dependencies

**Third-party Libraries**:
- **SheetJS (xlsx)**: Excel file parsing and manipulation
  - Handles .xls and .xlsx formats
  - Converts spreadsheets to JSON/CSV
  - Client-side processing only

**Google Services**:
- Google Fonts API (Inter, Source Code Pro fonts)
- Google Analytics integration (via inline script)
- Google AdSense (pub-3465404764288686)

**Development Tools**:
- ESLint for code quality
- TypeScript compiler for type checking
- Tailwind CSS PostCSS processor

**Hosting & Deployment**:
- **Replit (Primary)**: Configured for Replit deployment (October 2024)
  - Development server runs on port 5000, bound to 0.0.0.0
  - Uses REPLIT_DEV_DOMAIN environment variable for CORS and hot reload
  - Deployment configured for autoscale target
- **Previously Vercel**: Migrated from Vercel to Replit

**No Database**: Application is entirely stateless and client-side. No persistent data storage is required or implemented. All user data processing happens in-browser and is never transmitted to servers.

**API Integrations**:
- Internal transliteration API for Arabic name generation using Google Gemini 2.0 Flash
  - Requires GOOGLE_API_KEY environment variable (server-side only)
  - Uses gemini-2.0-flash-exp model via Google Generative Language API
- No external API dependencies for core Excel file processing functionality
- Self-contained file processing

## Recent Changes

### October 14, 2024 - Vercel to Replit Migration
- **Port Configuration**: Updated dev and start scripts to bind to port 5000 on 0.0.0.0 for Replit compatibility
- **CORS Configuration**: Added Replit domain (via REPLIT_DEV_DOMAIN) to API route allowed origins
- **Next.js Config**: Added allowedDevOrigins for Replit hot module reload support
- **Deployment**: Configured autoscale deployment target with npm build/start scripts
- **Environment Variables**: GOOGLE_API_KEY configured in Replit Secrets for transliteration API
- **Removed Turbopack**: Disabled Turbopack flags for better Replit compatibility
- **Google Gemini Model Update**: Changed from gemini-1.5-flash to gemini-2.0-flash-exp (v1beta API compatibility)
- **Enhanced Error Logging**: Added detailed error logging for Google API failures to aid debugging
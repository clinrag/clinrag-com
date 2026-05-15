import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clinrag.com"),
  title: {
    default: "ClinRAG — Clinical RAG Resources for Healthcare AI",
    template: "%s | ClinRAG",
  },
  description: "Clinical RAG tools, guides, templates, and evaluation checklists for building citation-grounded healthcare AI knowledge retrieval systems.",
  keywords: [
    "Clinical RAG",
    "Medical RAG",
    "Healthcare AI",
    "Retrieval-Augmented Generation",
    "Clinical AI Search",
    "Medical Knowledge Retrieval",
  ],
  alternates: {
    canonical: "https://www.clinrag.com",
  },
  openGraph: {
    title: "ClinRAG — Clinical RAG Resources for Healthcare AI",
    description: "Tools, guides, and templates for building citation-grounded clinical knowledge retrieval systems.",
    url: "https://www.clinrag.com",
    siteName: "ClinRAG",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClinRAG — Clinical RAG Resources for Healthcare AI",
    description: "Tools, guides, and templates for building citation-grounded clinical knowledge retrieval systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClinRAG",
  url: "https://www.clinrag.com",
  logo: "https://www.clinrag.com/logo.png",
  description: "Clinical RAG resources, tools, templates, and guides for healthcare AI knowledge retrieval.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ClinRAG",
  url: "https://www.clinrag.com",
  description: "Clinical RAG tools, guides, templates, and evaluation checklists for healthcare AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

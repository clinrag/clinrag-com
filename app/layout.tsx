import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ClinRAG — Clinical Retrieval-Augmented Generation",
  description: "The comprehensive resource for Retrieval-Augmented Generation in clinical and healthcare applications. Explore tools, guides, and templates for building medical RAG systems.",
  keywords: "clinical RAG, medical AI, healthcare LLM, retrieval augmented generation, medical NLP, clinical decision support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

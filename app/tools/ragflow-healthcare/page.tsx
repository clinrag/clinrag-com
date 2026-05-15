import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "RAGFlow for Healthcare — Open-Source Medical RAG Engine",
  description: "Learn how RAGFlow's open-source RAG engine handles complex medical document parsing, clinical guidelines, and healthcare knowledge bases.",
  alternates: {
    canonical: "https://www.clinrag.com/tools/ragflow-healthcare",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RAGFlow for Healthcare",
  description: "Open-source RAG engine with advanced document understanding for healthcare applications.",
  url: "https://www.clinrag.com/tools/ragflow-healthcare",
  applicationCategory: "HealthApplication",
  operatingSystem: "Docker",
  license: "https://www.apache.org/licenses/LICENSE-2.0",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.clinrag.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.clinrag.com/tools" },
    { "@type": "ListItem", position: 3, name: "RAGFlow for Healthcare", item: "https://www.clinrag.com/tools/ragflow-healthcare" },
  ],
};

export default function RAGFlowHealthcare() {
  return (
    <ToolPage
      name="RAGFlow"
      tag="Open Source"
      website="https://ragflow.io"
      jsonLd={{ ...articleJsonLd, ...breadcrumbJsonLd, "@graph": [articleJsonLd, breadcrumbJsonLd] }}
      overview="RAGFlow is an open-source RAG engine designed for deep document understanding. It excels at parsing complex documents like PDFs with tables, figures, charts, and medical notation — making it particularly well-suited for healthcare applications where documents are rarely plain text."
      features={[
        "Deep document understanding with layout analysis",
        "Template-based RAG pipeline configuration",
        "Open-source under Apache 2.0 license",
        "Multiple embedding model support (OpenAI, local models)",
        "PDF parsing with table and figure extraction",
        "Visual pipeline builder for non-technical users",
      ]}
      healthcareUse="RAGFlow is ideal for building medical knowledge bases from clinical guidelines, research papers, drug databases, and institutional protocols. Its advanced PDF parsing handles the complex layouts common in medical documents — multi-column papers, tables of lab values, and embedded figures."
      gettingStarted={[
        "Install RAGFlow via Docker: docker-compose up -d",
        "Upload medical documents (PDFs, guidelines, protocols)",
        "Configure the chunking strategy for medical document types",
        "Select an embedding model — local models for privacy-conscious deployment",
        "Build a knowledge base and test retrieval quality",
        "Connect an LLM and configure the prompt template",
      ]}
      limitations={[
        "Requires Docker infrastructure setup",
        "Complex configuration for advanced use cases",
        "Performance depends on embedding model choice",
      ]}
    />
  );
}

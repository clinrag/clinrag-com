import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "Dify for Medical RAG — Visual RAG Pipeline Builder",
  description: "Build clinical RAG applications with Dify's visual drag-and-drop workflow builder. No-code medical RAG for healthcare teams.",
  alternates: {
    canonical: "https://www.clinrag.com/tools/dify-medical-rag",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dify for Medical RAG",
  description: "LLM application development platform with visual RAG builder for healthcare.",
  url: "https://www.clinrag.com/tools/dify-medical-rag",
  applicationCategory: "HealthApplication",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.clinrag.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.clinrag.com/tools" },
    { "@type": "ListItem", position: 3, name: "Dify for Medical RAG", item: "https://www.clinrag.com/tools/dify-medical-rag" },
  ],
};

export default function DifyMedicalRAG() {
  return (
    <ToolPage
      name="Dify"
      tag="Platform"
      website="https://dify.ai"
      jsonLd={{ "@graph": [articleJsonLd, breadcrumbJsonLd] }}
      overview="Dify is an open-source LLM application development platform that provides a visual interface for building RAG pipelines. Its drag-and-drop workflow builder makes it accessible to healthcare teams without deep engineering expertise, while its API support enables integration with existing clinical systems."
      features={[
        "Visual drag-and-drop workflow builder",
        "Built-in document processing and knowledge base",
        "API management for integration with clinical systems",
        "Multi-model support (OpenAI, Anthropic, local models)",
        "Prompt IDE for testing and iteration",
        "Team collaboration features",
      ]}
      healthcareUse="Dify allows clinical teams to quickly prototype and deploy RAG applications. The visual builder is ideal for creating medical information retrieval tools, and the built-in knowledge base can be populated with medical guidelines, drug databases, and hospital protocols."
      gettingStarted={[
        "Deploy Dify via Docker or use the cloud version",
        "Create a new knowledge base and upload medical documents",
        "Use the visual workflow builder to create a RAG pipeline",
        "Configure the retrieval strategy and LLM parameters",
        "Test with clinical questions and iterate on responses",
        "Deploy as an API for integration with clinical workflows",
      ]}
      limitations={[
        "Cloud version may not meet all institutional privacy requirements",
        "Limited advanced RAG techniques compared to code-based frameworks",
        "Self-hosted version requires infrastructure management",
      ]}
    />
  );
}

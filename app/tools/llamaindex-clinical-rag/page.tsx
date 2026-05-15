import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "LlamaIndex for Clinical RAG — Advanced Medical Knowledge Indexing",
  description: "Use LlamaIndex to build complex medical knowledge graphs and enable multi-hop reasoning across clinical documents.",
  alternates: {
    canonical: "https://www.clinrag.com/tools/llamaindex-clinical-rag",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LlamaIndex for Clinical RAG",
  description: "Data framework for connecting custom healthcare data to LLMs with advanced indexing.",
  url: "https://www.clinrag.com/tools/llamaindex-clinical-rag",
  applicationCategory: "HealthApplication",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.clinrag.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.clinrag.com/tools" },
    { "@type": "ListItem", position: 3, name: "LlamaIndex for Clinical RAG", item: "https://www.clinrag.com/tools/llamaindex-clinical-rag" },
  ],
};

export default function LlamaIndexClinicalRAG() {
  return (
    <ToolPage
      name="LlamaIndex"
      tag="Framework"
      website="https://www.llamaindex.ai"
      jsonLd={{ "@graph": [articleJsonLd, breadcrumbJsonLd] }}
      overview="LlamaIndex (formerly GPT Index) is a data framework that provides tools for ingesting, indexing, and querying custom data sources with LLMs. It offers sophisticated indexing strategies including vector indices, tree indices, and keyword indices — making it powerful for complex medical knowledge retrieval."
      features={[
        "Advanced indexing strategies (vector, tree, keyword)",
        "Multi-modal document support (text, images, tables)",
        "Query engine composition for multi-step reasoning",
        "Fine-grained data access control",
        "Knowledge graph construction",
        "Extensive connector library for data sources",
      ]}
      healthcareUse="LlamaIndex excels at building complex medical knowledge graphs and enabling multi-hop reasoning across clinical documents. It is particularly useful when you need to connect research literature with institutional protocols, cross-reference drug interactions, or build decision trees from clinical guidelines."
      gettingStarted={[
        "Install LlamaIndex: pip install llama-index",
        "Connect to your data sources (medical PDFs, databases, APIs)",
        "Choose an appropriate index type for your medical data",
        "Configure the embedding model and vector store",
        "Build query engines with medical-specific prompts",
        "Add citation and source tracking for clinical verification",
      ]}
      limitations={[
        "Requires Python programming knowledge",
        "Complex API with many abstraction layers",
        "Large documents can be slow to index without careful chunking",
      ]}
    />
  );
}

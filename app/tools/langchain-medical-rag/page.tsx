import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "LangChain for Medical RAG — Modular Clinical RAG Pipelines",
  description: "Build custom medical RAG pipelines with LangChain's modular architecture: document loaders, splitters, retrievers, and LLMs.",
  alternates: {
    canonical: "https://www.clinrag.com/tools/langchain-medical-rag",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LangChain for Medical RAG",
  description: "Composable framework for building LLM applications in healthcare.",
  url: "https://www.clinrag.com/tools/langchain-medical-rag",
  applicationCategory: "HealthApplication",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.clinrag.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.clinrag.com/tools" },
    { "@type": "ListItem", position: 3, name: "LangChain for Medical RAG", item: "https://www.clinrag.com/tools/langchain-medical-rag" },
  ],
};

export default function LangChainMedicalRAG() {
  return (
    <ToolPage
      name="LangChain"
      tag="Framework"
      website="https://www.langchain.com"
      jsonLd={{ "@graph": [articleJsonLd, breadcrumbJsonLd] }}
      overview="LangChain is the most widely adopted framework for building applications powered by LLMs. Its modular architecture allows developers to compose RAG pipelines from interchangeable components — document loaders, text splitters, embedding models, vector stores, retrievers, and LLMs — making it highly flexible for healthcare applications."
      features={[
        "Modular component architecture",
        "Extensive integrations (100+ document loaders, 20+ vector stores)",
        "Chain and agent patterns for complex workflows",
        "Large community and extensive documentation",
        "LangSmith for debugging and evaluation",
        "Support for both Python and JavaScript",
      ]}
      healthcareUse="LangChain is the most versatile option for building custom medical RAG pipelines. You can combine medical PDF loaders (PyMuPDF, Unstructured) with embedding models (local or cloud), vector stores (Milvus, Pinecone), and LLMs to create a pipeline tailored to your clinical needs."
      gettingStarted={[
        "Install LangChain: pip install langchain langchain-community",
        "Use a document loader to ingest medical PDFs or datasets",
        "Split documents into chunks appropriate for medical content",
        "Choose and configure an embedding model",
        "Store embeddings in a vector database",
        "Build a RetrievalQA chain with medical prompt templates",
      ]}
      limitations={[
        "Rapidly evolving API can break existing code",
        "Steep learning curve with many abstraction layers",
        "Requires careful prompt engineering for medical accuracy",
      ]}
    />
  );
}

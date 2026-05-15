import ToolPage from "@/components/ToolPage";

export default function RAGFlowHealthcare() {
  return (
    <ToolPage
      name="RAGFlow"
      tag="Open Source"
      website="https://ragflow.io"
      overview="RAGFlow is an open-source RAG engine designed for deep document understanding. It excels at parsing complex documents like PDFs with tables, figures, charts, and medical notation — making it particularly well-suited for healthcare applications where documents are rarely plain text."
      features={[
        "Deep document understanding with layout analysis",
        "Template-based RAG pipeline configuration",
        "Open-source under Apache 2.0 license",
        "Multiple embedding model support (OpenAI, local models)",
        "PDF parsing with table and figure extraction",
        "Visual pipeline builder for non-technical users",
      ]}
      healthcareUse="RAGFlow is ideal for building medical knowledge bases from clinical guidelines, research papers, drug databases, and patient records. Its advanced PDF parsing handles the complex layouts common in medical documents — multi-column papers, tables of lab values, and embedded figures."
      gettingStarted={[
        "Install RAGFlow via Docker: docker-compose up -d",
        "Upload medical documents (PDFs, guidelines, protocols)",
        "Configure the chunking strategy for medical document types",
        "Select an embedding model — local models for HIPAA compliance",
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

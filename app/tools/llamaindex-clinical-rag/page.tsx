import ToolPage from "@/components/ToolPage";

export default function LlamaIndexClinicalRAG() {
  return (
    <ToolPage
      name="LlamaIndex"
      tag="Framework"
      overview="LlamaIndex (formerly GPT Index) is a data framework that provides tools for ingesting, indexing, and querying custom data sources with LLMs. It offers sophisticated indexing strategies including vector indices, tree indices, and keyword indices — making it powerful for complex medical knowledge retrieval."
      features={[
        "Advanced indexing strategies (vector, tree, keyword)",
        "Multi-modal document support (text, images, tables)",
        "Query engine composition for multi-step reasoning",
        "Fine-grained data access control",
        "Knowledge graph construction",
        "Extensive connector library for data sources",
      ]}
      healthcareUse="LlamaIndex excels at building complex medical knowledge graphs and enabling multi-hop reasoning across clinical documents. It is particularly useful when you need to connect patient records with research literature, cross-reference drug interactions, or build decision trees from clinical guidelines."
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

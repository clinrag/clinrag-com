import ToolPage from "@/components/ToolPage";

export default function LangChainMedicalRAG() {
  return (
    <ToolPage
      name="LangChain"
      tag="Framework"
      website="https://www.langchain.com"
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

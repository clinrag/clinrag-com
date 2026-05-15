import ToolPage from "@/components/ToolPage";

export default function DifyMedicalRAG() {
  return (
    <ToolPage
      name="Dify"
      tag="Platform"
      overview="Dify is an open-source LLM application development platform that provides a visual interface for building RAG pipelines. Its drag-and-drop workflow builder makes it accessible to healthcare teams without deep engineering expertise, while its API support enables integration with existing clinical systems."
      features={[
        "Visual drag-and-drop workflow builder",
        "Built-in document processing and knowledge base",
        "API management for integration with EHR systems",
        "Multi-model support (OpenAI, Anthropic, local models)",
        "Prompt IDE for testing and iteration",
        "Team collaboration features",
      ]}
      healthcareUse="Dify allows clinical teams to quickly prototype and deploy RAG applications. The visual builder is ideal for creating clinical decision support tools, and the built-in knowledge base can be populated with medical guidelines, drug databases, and hospital protocols."
      gettingStarted={[
        "Deploy Dify via Docker or use the cloud version",
        "Create a new knowledge base and upload medical documents",
        "Use the visual workflow builder to create a RAG pipeline",
        "Configure the retrieval strategy and LLM parameters",
        "Test with clinical questions and iterate on responses",
        "Deploy as an API for integration with clinical workflows",
      ]}
      limitations={[
        "Cloud version may not meet HIPAA requirements",
        "Limited advanced RAG techniques compared to code-based frameworks",
        "Self-hosted version requires infrastructure management",
      ]}
    />
  );
}

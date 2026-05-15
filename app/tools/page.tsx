import Link from "next/link";

const tools = [
  {
    name: "RAGFlow",
    href: "/tools/ragflow-healthcare",
    tag: "Open Source",
    description: "RAGFlow is an open-source RAG engine with advanced document understanding capabilities. It supports complex document parsing including PDFs with tables, figures, and medical notation.",
    features: ["Deep document understanding", "Template-based RAG pipelines", "Open-source under Apache 2.0", "Multiple embedding model support"],
    healthcare_use: "Ideal for parsing medical PDFs, clinical guidelines, and research papers with complex layouts and tables.",
  },
  {
    name: "Dify",
    href: "/tools/dify-medical-rag",
    tag: "Platform",
    description: "Dify is an LLM application development platform with a visual RAG pipeline builder. It provides an intuitive interface for creating, testing, and deploying RAG applications.",
    features: ["Visual workflow builder", "Built-in document processing", "API management", "Multi-model support"],
    healthcare_use: "Quickly prototype medical RAG applications with its drag-and-drop interface and built-in knowledge base.",
  },
  {
    name: "LlamaIndex",
    href: "/tools/llamaindex-clinical-rag",
    tag: "Framework",
    description: "LlamaIndex (formerly GPT Index) is a data framework that provides tools for connecting custom data sources to LLMs, with sophisticated indexing and querying capabilities.",
    features: ["Advanced indexing strategies", "Multi-modal document support", "Query engine composition", "Fine-grained data access"],
    healthcare_use: "Build complex medical knowledge graphs and enable multi-hop reasoning across clinical documents.",
  },
  {
    name: "LangChain",
    href: "/tools/langchain-medical-rag",
    tag: "Framework",
    description: "LangChain is the most popular framework for building applications powered by LLMs. Its modular approach makes it easy to compose RAG pipelines with custom components.",
    features: ["Modular component architecture", "Extensive integrations", "Chain and agent patterns", "Large community"],
    healthcare_use: "Compose custom medical RAG pipelines by combining document loaders, splitters, retrievers, and LLMs.",
  },
  {
    name: "OpenEvidence",
    href: "/tools/openevidence-overview",
    tag: "SaaS",
    description: "OpenEvidence is an AI-powered medical information platform that uses RAG to answer clinical questions with citations to peer-reviewed medical evidence.",
    features: ["Evidence-grounded answers", "Citation to medical literature", "Clinical information retrieval", "Peer-reviewed sources"],
    healthcare_use: "Clinicians can ask clinical questions and receive answers backed by current medical literature with citations.",
  },
  {
    name: "Glass Health",
    href: "/tools/glass-health-overview",
    tag: "SaaS",
    description: "Glass Health provides AI-assisted clinical documentation and information support tools, leveraging RAG to ground outputs in current clinical guidelines.",
    features: ["AI clinical notes", "Clinical reasoning support", "Guideline-informed workflow support", "Guideline-grounded responses"],
    healthcare_use: "Streamline clinical documentation workflows while providing information resources aligned with evidence.",
  },
  {
    name: "ClinicalKey AI",
    href: "/tools/clinicalkey-ai-overview",
    tag: "Enterprise",
    description: "ClinicalKey AI by Elsevier combines the vast medical content library of ClinicalKey with AI-powered search and summarization for clinical and academic use.",
    features: ["Elsevier content library", "Peer-reviewed sources", "Clinical and academic content", "Enterprise-grade security"],
    healthcare_use: "Access Elsevier's comprehensive medical content with AI-powered search for clinical and research questions.",
  },
];

export default function ToolsDirectory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Clinical RAG Tools Directory</h1>
        <p className="text-xl text-gray-500">
          A curated directory of frameworks, platforms, and tools for building medical RAG systems.
        </p>
      </div>

      <div className="space-y-8">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full">
                {tool.tag}
              </span>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">{tool.name}</h2>
            <p className="mt-2 text-gray-600">{tool.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tool.features.map((f) => (
                <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded">
                  {f}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-sm text-gray-500">
          <strong>Disclaimer:</strong> Clinical decision support claims should be interpreted according to each vendor&apos;s documentation, regulatory status, and institutional governance requirements. This directory is for informational purposes only.
        </p>
      </div>
    </div>
  );
}

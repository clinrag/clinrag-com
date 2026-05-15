import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical RAG Tools Directory — Medical RAG Platforms and Frameworks",
  description: "Compare tools and frameworks for clinical RAG, medical knowledge retrieval, healthcare AI search, and citation-grounded LLM applications.",
  alternates: {
    canonical: "https://www.clinrag.com/tools",
  },
};

const toolCategories = [
  {
    name: "Tool Comparison Guides",
    tools: [
      { name: "Best Clinical RAG Tools", desc: "Compare top clinical RAG tools and frameworks for healthcare AI", href: "/tools/best-clinical-rag-tools", tag: "Guide" },
      { name: "Open-Source Medical RAG Tools", desc: "Complete guide to open-source frameworks for medical RAG", href: "/tools/open-source-medical-rag-tools", tag: "Guide" },
    ],
  },
  {
    name: "Open-Source Frameworks",
    tools: [
      { name: "RAGFlow", desc: "Open-source RAG engine with advanced document parsing", href: "/tools/ragflow-healthcare", tag: "Open Source", features: ["Deep document understanding", "Template-based RAG pipelines", "Open-source under Apache 2.0", "Multiple embedding model support"] },
      { name: "Dify", desc: "LLM app development platform with visual RAG builder", href: "/tools/dify-medical-rag", tag: "Platform", features: ["Visual workflow builder", "Built-in document processing", "API management", "Multi-model support"] },
      { name: "LlamaIndex", desc: "Data framework for connecting custom data to LLMs", href: "/tools/llamaindex-clinical-rag", tag: "Framework", features: ["Advanced indexing strategies", "Multi-modal document support", "Query engine composition", "Fine-grained data access"] },
      { name: "LangChain", desc: "Composable framework for LLM applications", href: "/tools/langchain-medical-rag", tag: "Framework", features: ["Modular component architecture", "Extensive integrations", "Chain and agent patterns", "Large community"] },
    ],
  },
  {
    name: "Commercial Clinical AI Search Tools",
    tools: [
      { name: "OpenEvidence", desc: "AI clinical search with peer-reviewed evidence citations", href: "/tools/openevidence-overview", tag: "SaaS" },
      { name: "Glass Health", desc: "AI-powered clinical documentation assistant", href: "/tools/glass-health-overview", tag: "SaaS" },
      { name: "ClinicalKey AI", desc: "Elsevier's AI clinical search and summarization", href: "/tools/clinicalkey-ai-overview", tag: "Enterprise" },
    ],
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
          Compare open-source frameworks, commercial medical AI search tools, and enterprise-ready platforms for healthcare knowledge retrieval.
        </p>
      </div>

      {toolCategories.map((category) => (
        <section key={category.name} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
          <div className="space-y-6">
            {category.tools.map((tool) => (
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
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">{tool.name}</h3>
                <p className="mt-2 text-gray-600">{tool.desc}</p>
                {"features" in tool && tool.features && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(tool.features as string[]).map((f) => (
                      <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-sm text-gray-500">
          <strong>Disclaimer:</strong> Clinical decision support claims should be interpreted according to each vendor&apos;s documentation, regulatory status, and institutional governance requirements. This directory is for informational purposes only.
        </p>
      </div>
    </div>
  );
}

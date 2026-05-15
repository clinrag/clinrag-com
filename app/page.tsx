import Link from "next/link";

const tools = [
  { name: "RAGFlow", desc: "Open-source RAG engine with advanced document parsing", href: "/tools/ragflow-healthcare", tag: "Open Source" },
  { name: "Dify", desc: "LLM app development platform with visual RAG builder", href: "/tools/dify-medical-rag", tag: "Platform" },
  { name: "LlamaIndex", desc: "Data framework for connecting custom data to LLMs", href: "/tools/llamaindex-clinical-rag", tag: "Framework" },
  { name: "LangChain", desc: "Composable framework for LLM applications", href: "/tools/langchain-medical-rag", tag: "Framework" },
  { name: "OpenEvidence", desc: "AI clinical search with peer-reviewed evidence citations", href: "/tools/openevidence-overview", tag: "SaaS" },
  { name: "Glass Health", desc: "AI-powered clinical documentation assistant", href: "/tools/glass-health-overview", tag: "SaaS" },
  { name: "ClinicalKey AI", desc: "Elsevier's AI clinical search and summarization", href: "/tools/clinicalkey-ai-overview", tag: "Enterprise" },
];

const guides = [
  { title: "How to Build a Medical RAG System", desc: "Step-by-step guide from data ingestion to deployment", href: "/guides/build-medical-rag" },
  { title: "RAG vs Fine-tuning in Healthcare", desc: "When to use RAG vs fine-tuning for medical AI", href: "/guides/rag-vs-finetuning" },
  { title: "Clinical RAG Evaluation Checklist", desc: "Comprehensive checklist for evaluating medical RAG systems", href: "/guides/evaluation-checklist" },
  { title: "How to Reduce Hallucinations in Medical AI", desc: "Techniques to minimize fabricated outputs in clinical contexts", href: "/guides/reduce-hallucinations" },
  { title: "Private Medical RAG Deployment", desc: "Deploying HIPAA-compliant RAG systems on-premise", href: "/guides/private-deployment" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Healthcare AI Knowledge Retrieval
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Clinical RAG Resources for<br />
              <span className="text-teal-600">Safer Medical AI Search</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              ClinRAG helps healthcare AI builders, clinical informatics teams, and medical developers
              evaluate tools, design workflows, and build citation-grounded knowledge retrieval systems.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 justify-center text-sm text-gray-500">
              <span>Built for healthcare AI builders</span>
              <span className="hidden sm:inline">•</span>
              <span>Citation-grounded clinical retrieval</span>
              <span className="hidden sm:inline">•</span>
              <span>Safety-first templates</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/tools" className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200">
                Browse Tools
              </Link>
              <Link href="/guides" className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium border border-teal-200 hover:bg-teal-50 transition-colors">
                Read Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Clinical RAG Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:max-w-xl">
                <h2 className="text-3xl font-bold mb-4">What is Clinical RAG?</h2>
                <p className="text-teal-100 text-lg leading-relaxed">
                  Retrieval-Augmented Generation (RAG) combines information retrieval with LLMs to produce
                  responses grounded in authoritative medical sources. In clinical contexts, this enables
                  citation-traced access to guidelines, literature, and institutional protocols.
                </p>
              </div>
              <Link href="/what-is-clinical-rag" className="mt-6 md:mt-0 inline-flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Directory */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Clinical RAG Tools Directory</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Curated overview of frameworks, platforms, and tools for building medical RAG systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full">
                    {tool.tag}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">{tool.name}</h3>
                <p className="mt-2 text-gray-500 text-sm">{tool.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/tools" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
              View All Tools →
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Guides & Tutorials</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Practical guides to help you build, evaluate, and deploy clinical RAG systems.
            </p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-teal-200 hover:bg-teal-50 transition-all group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">{guide.title}</h3>
                <p className="mt-1 text-gray-500 text-sm">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Templates CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Safety-First Templates</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Prompt templates, checklists, and evaluation frameworks to accelerate your clinical RAG project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/templates/rag-prompt" className="bg-white border border-gray-200 px-5 py-3 rounded-lg hover:border-teal-300 hover:shadow transition-all text-sm font-medium text-gray-700">
                RAG Prompt Template
              </Link>
              <Link href="/templates/pdf-checklist" className="bg-white border border-gray-200 px-5 py-3 rounded-lg hover:border-teal-300 hover:shadow transition-all text-sm font-medium text-gray-700">
                PDF Prep Checklist
              </Link>
              <Link href="/templates/evaluation-sheet" className="bg-white border border-gray-200 px-5 py-3 rounded-lg hover:border-teal-300 hover:shadow transition-all text-sm font-medium text-gray-700">
                Evaluation Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated on Clinical AI</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Get the latest tools, guides, and research in clinical RAG delivered to your inbox.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

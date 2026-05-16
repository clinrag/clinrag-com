import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Clinical RAG Starter Kit — Checklists, Prompts & Templates",
  description: "Get the Clinical RAG Starter Kit: evaluation sheet, prompt template, and PDF preparation checklist. Everything you need to start building.",
  alternates: {
    canonical: "https://www.clinrag.com/starter-kit",
  },
};

export default function StarterKit() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 1v10h10V4H5z" clipRule="evenodd" />
          </svg>
          Free Resource
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get the Clinical RAG Starter Kit</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Three production-ready templates to start building safe, citation-grounded healthcare knowledge retrieval systems.
        </p>
      </div>

      {/* What's Included */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "Clinical RAG Prompt Template",
            desc: "Production-ready prompts with built-in safety constraints, citation requirements, and confidence scoring.",
            icon: (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            ),
            href: "/tools/clinical-rag-prompt-builder",
            linkLabel: "Try Prompt Builder →",
          },
          {
            title: "RAG Evaluation Sheet",
            desc: "Structured 50-row testing workbook for evaluating accuracy, citation quality, hallucinations, and safety.",
            icon: (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
              </svg>
            ),
            href: "/templates/rag-evaluation-sheet",
            linkLabel: "Download CSV →",
          },
          {
            title: "PDF Preparation Checklist",
            desc: "Step-by-step checklist for preparing medical documents — parsing, chunking, metadata, and quality checks.",
            icon: (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            href: "/templates/pdf-checklist",
            linkLabel: "View Checklist →",
          },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 text-teal-600 mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
            <Link href={item.href} className="text-teal-600 hover:text-teal-700 font-medium text-sm">
              {item.linkLabel}
            </Link>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Updates on Clinical RAG</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Join the Clinical RAG Weekly newsletter. Tools, papers, templates, and implementation notes for healthcare AI knowledge retrieval — delivered monthly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <a
            href="mailto:hello@clinrag.com?subject=ClinRAG%20Newsletter%20Subscription"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors flex-1"
          >
            Subscribe via Email
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-4">No spam. Unsubscribe anytime.</p>
      </div>

      {/* Additional Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More Free Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <Link href="/tools/clinical-rag-readiness-checker" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">Clinical RAG Readiness Checker</h3>
            <p className="mt-1 text-gray-500 text-sm">Interactive tool to assess your project readiness and get personalized recommendations.</p>
          </Link>
          <Link href="/guides/build-medical-rag-system" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">How to Build a Medical RAG System</h3>
            <p className="mt-1 text-gray-500 text-sm">Step-by-step guide from defining your use case to deploying with safety controls.</p>
          </Link>
          <Link href="/guides/clinical-rag-evaluation-checklist" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">Clinical RAG Evaluation Checklist</h3>
            <p className="mt-1 text-gray-500 text-sm">9 evaluation dimensions with comprehensive testing criteria for clinical RAG systems.</p>
          </Link>
          <Link href="/tools/best-clinical-rag-tools" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">Best Clinical RAG Tools</h3>
            <p className="mt-1 text-gray-500 text-sm">Comprehensive comparison of 7 tools with 11 evaluation criteria and decision table.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

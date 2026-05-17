import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implementation Notes — Real-World Clinical RAG Experience",
  description: "Practical notes from building, testing, and evaluating clinical RAG workflows, medical PDF pipelines, retrieval quality, and citation-grounded AI systems.",
  alternates: {
    canonical: "https://www.clinrag.com/implementation-notes",
  },
};

const notes = [
  {
    title: "What I Learned from Building a Medical PDF RAG Workflow",
    desc: "Real-world lessons from building a clinical RAG system that ingests medical PDFs — what went wrong, what worked, and what I would do differently.",
    href: "/implementation-notes/building-medical-pdf-rag-workflow",
    tag: "PDF Pipeline",
    readTime: "10 min",
  },
  {
    title: "Why Scanned Medical PDFs Break Many RAG Pipelines",
    desc: "A deep dive into why OCR-dependent medical documents cause RAG failures — drug name errors, table destruction, and what to do about it.",
    href: "/implementation-notes/scanned-medical-pdfs-rag-pipelines",
    tag: "Document Parsing",
    readTime: "12 min",
  },
  {
    title: "RAGFlow vs Cloud Knowledge Bases for Medical Documents",
    desc: "A practical comparison of self-hosted RAGFlow versus cloud knowledge base services for handling clinical documents — when each makes sense.",
    href: "/implementation-notes/ragflow-vs-cloud-knowledge-bases",
    tag: "Architecture",
    readTime: "10 min",
  },
  {
    title: "How to Evaluate Whether a Retrieved Citation Actually Supports the Answer",
    desc: "A practical approach to evaluating whether RAG citations are accurate, relevant, and sufficient — not just present.",
    href: "/implementation-notes/evaluate-retrieved-citations",
    tag: "Evaluation",
    readTime: "12 min",
  },
  {
    title: "Why Clinical RAG Needs Safety Checklists, Not Just Better Prompts",
    desc: "Prompt engineering alone is insufficient for clinical RAG safety. Here's why systematic safety checklists are essential.",
    href: "/implementation-notes/clinical-rag-needs-safety-checklists",
    tag: "Safety",
    readTime: "12 min",
  },
];

export default function ImplementationNotesIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Implementation Notes</h1>
      <p className="text-xl text-gray-500 mb-12">
        Practical notes from building, testing, and evaluating clinical RAG workflows, medical PDF pipelines, retrieval quality, and citation-grounded AI systems.
      </p>

      <div className="space-y-6">
        {notes.map((note) => (
          <Link
            key={note.href}
            href={note.href}
            className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full">
                {note.tag}
              </span>
              <span className="text-xs text-gray-400">{note.readTime}</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">{note.title}</h2>
            <p className="mt-2 text-gray-500 text-sm">{note.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

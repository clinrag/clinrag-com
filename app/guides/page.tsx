import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical RAG Guides — Build, Evaluate, and Deploy Medical RAG Systems",
  description: "Practical guides for building medical RAG systems, evaluating retrieval quality, reducing hallucinations, and designing privacy-conscious deployments.",
  alternates: {
    canonical: "https://www.clinrag.com/guides",
  },
};

const guideCategories = [
  {
    name: "Clinical RAG Basics",
    guides: [
      { title: "How to Build a Medical RAG System", desc: "Step-by-step guide from data ingestion to deployment", href: "/guides/build-medical-rag-system", icon: "🏗️", difficulty: "Intermediate", readTime: "15 min" },
      { title: "RAG vs Fine-tuning in Healthcare", desc: "Compare the two approaches for medical AI applications", href: "/guides/rag-vs-fine-tuning-healthcare", icon: "⚖️", difficulty: "Beginner", readTime: "10 min" },
      { title: "Clinical RAG vs Medical Chatbot", desc: "Understand the key differences and when to use each", href: "/guides/clinical-rag-vs-medical-chatbot", icon: "🤖", difficulty: "Beginner", readTime: "10 min" },
      { title: "Citation Grounding in Medical RAG", desc: "Why every answer needs traceable sources", href: "/guides/citation-grounding-medical-rag", icon: "📚", difficulty: "Intermediate", readTime: "12 min" },
    ],
  },
  {
    name: "Build & Deploy",
    guides: [
      { title: "Medical PDF RAG: Prepare Clinical Documents", desc: "Parsing, chunking, and preparing medical PDFs for knowledge bases", href: "/guides/medical-pdf-rag-prepare-clinical-documents", icon: "📄", difficulty: "Advanced", readTime: "14 min" },
      { title: "Private Medical RAG Deployment", desc: "Design considerations for privacy-conscious deployments", href: "/guides/private-medical-rag-deployment", icon: "🔒", difficulty: "Advanced", readTime: "18 min" },
    ],
  },
  {
    name: "Document Preparation",
    guides: [
      { title: "Medical PDF RAG: Prepare Clinical Documents", desc: "Step-by-step checklist for preparing medical documents for RAG ingestion", href: "/guides/medical-pdf-rag-prepare-clinical-documents", icon: "📋", difficulty: "Advanced", readTime: "14 min" },
    ],
  },
  {
    name: "Evaluation & Safety",
    guides: [
      { title: "Clinical RAG Evaluation Checklist", desc: "Comprehensive checklist for evaluating medical RAG systems", href: "/guides/clinical-rag-evaluation-checklist", icon: "✅", difficulty: "Advanced", readTime: "12 min" },
      { title: "How to Evaluate Medical RAG Answers", desc: "Systematic approach to testing clinical RAG quality", href: "/guides/evaluate-medical-rag-answers", icon: "🔬", difficulty: "Advanced", readTime: "12 min" },
      { title: "How to Reduce Hallucinations in Medical AI", desc: "Techniques to minimize hallucinations in clinical contexts", href: "/guides/reduce-hallucinations-medical-ai", icon: "🛡️", difficulty: "Intermediate", readTime: "12 min" },
      { title: "Clinical RAG Safety Checklist", desc: "Safety checklist covering input validation, output safety, and monitoring", href: "/guides/clinical-rag-safety-checklist", icon: "⚠️", difficulty: "Advanced", readTime: "14 min" },
    ],
  },
];

export default function GuidesIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Clinical RAG Guides</h1>
        <p className="text-xl text-gray-500">
          Practical guides for building, evaluating, and deploying citation-grounded healthcare knowledge retrieval systems.
        </p>
      </div>

      {guideCategories.map((category) => (
        <section key={category.name} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group"
              >
                <div className="text-3xl mb-4">{guide.icon}</div>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded">{guide.difficulty}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded">{guide.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">{guide.title}</h3>
                <p className="mt-2 text-gray-500 text-sm">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

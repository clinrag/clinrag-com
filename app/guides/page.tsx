import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical RAG Guides — Build, Evaluate, and Deploy Medical RAG Systems",
  description: "Practical guides for building medical RAG systems, evaluating retrieval quality, reducing hallucinations, and designing privacy-conscious deployments.",
  alternates: {
    canonical: "https://www.clinrag.com/guides",
  },
};

const guides = [
  {
    title: "How to Build a Medical RAG System",
    desc: "Step-by-step guide from data ingestion to deployment",
    href: "/guides/build-medical-rag",
    icon: "🏗️",
    difficulty: "Intermediate",
    readTime: "15 min",
  },
  {
    title: "RAG vs Fine-tuning in Healthcare",
    desc: "Compare the two approaches for medical AI applications",
    href: "/guides/rag-vs-finetuning",
    icon: "⚖️",
    difficulty: "Beginner",
    readTime: "10 min",
  },
  {
    title: "Clinical RAG Evaluation Checklist",
    desc: "Comprehensive checklist for evaluating medical RAG systems",
    href: "/guides/evaluation-checklist",
    icon: "✅",
    difficulty: "Advanced",
    readTime: "12 min",
  },
  {
    title: "How to Reduce Hallucinations in Medical AI",
    desc: "Techniques to minimize hallucinations in clinical contexts",
    href: "/guides/reduce-hallucinations",
    icon: "🛡️",
    difficulty: "Intermediate",
    readTime: "12 min",
  },
  {
    title: "Private Medical RAG Deployment",
    desc: "Design considerations for privacy-conscious clinical RAG deployments",
    href: "/guides/private-deployment",
    icon: "🔒",
    difficulty: "Advanced",
    readTime: "18 min",
  },
];

export default function GuidesIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Guides & Tutorials</h1>
        <p className="text-xl text-gray-500">
          Practical guides to help you build, evaluate, and deploy clinical RAG systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
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
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">{guide.title}</h2>
            <p className="mt-2 text-gray-500 text-sm">{guide.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

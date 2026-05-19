import type { Metadata } from "next";
import ReadinessChecker from "./ReadinessChecker";

export const metadata: Metadata = {
  title: "Clinical RAG Readiness Checker — Assess Your Project Readiness",
  description: "Free interactive tool to assess your clinical RAG project readiness. Get a readiness score, recommended architecture, and next steps.",
  alternates: {
    canonical: "https://www.clinrag.com/tools/clinical-rag-readiness-checker",
  },
};

export default function Page() {
  return (
    <>
      <ReadinessChecker />
      <noscript>
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">This interactive checker requires JavaScript. You can also use the <a href="/guides/clinical-rag-evaluation-checklist" className="text-teal-600 underline">Clinical RAG Evaluation Checklist</a> as a static alternative.</p>
        </div>
      </noscript>
    </>
  );
}

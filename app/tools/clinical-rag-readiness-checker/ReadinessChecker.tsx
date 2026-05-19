"use client";

import Link from "next/link";
import type { Metadata } from "next";
import { useState, useCallback } from "react";

export const metadata: Metadata = {
  title: "Clinical RAG Readiness Checker — Assess Your Project Readiness",
  description: "Free interactive tool to assess your clinical RAG project readiness. Get a readiness score, recommended architecture, and next steps.",
  alternates: {
    canonical: "https://www.clinrag.com/tools/clinical-rag-readiness-checker",
  },
};

interface ChecklistState {
  documentTypes: string[];
  pdfVolume: string;
  scannedRatio: string;
  privateDeploy: boolean;
  citationGrounding: boolean;
  evaluationWorkflow: boolean;
  humanReview: boolean;
}

interface Result {
  score: number;
  level: string;
  architecture: string;
  tools: { name: string; reason: string; href: string }[];
  risks: string[];
  nextSteps: { label: string; href: string }[];
}

function calculateResult(state: ChecklistState): Result {
  let score = 50;

  // Positive factors
  if (state.privateDeploy) score += 10;
  if (state.citationGrounding) score += 10;
  if (state.evaluationWorkflow) score += 5;
  if (state.humanReview) score += 5;

  // Complexity penalties (higher volume/scanned = harder)
  if (state.pdfVolume === "100-500") score -= 5;
  else if (state.pdfVolume === "500-2000") score -= 10;
  else if (state.pdfVolume === "2000+") score -= 15;

  if (state.scannedRatio === "10-30") score -= 5;
  else if (state.scannedRatio === "30-60") score -= 10;
  else if (state.scannedRatio === "60+") score -= 15;

  score = Math.max(30, Math.min(100, score));

  let level: string;
  let architecture: string;
  let tools: { name: string; reason: string; href: string }[] = [];
  let risks: string[] = [];
  let nextSteps: { label: string; href: string }[] = [];

  if (score >= 85) {
    level = "High Readiness";
    architecture = "Your project has clear requirements. Recommended: Self-hosted RAGFlow or LangChain with a local vector store (Milvus/pgvector), local embedding model (BGE-large), and Ollama for local LLM serving. Deploy behind your institution&apos;s firewall with TLS and role-based access control.";
    tools = [
      { name: "RAGFlow", reason: "Advanced PDF parsing for complex medical documents", href: "/tools/ragflow-healthcare" },
      { name: "LangChain", reason: "Flexible pipeline composition with privacy controls", href: "/tools/langchain-medical-rag" },
      { name: "LlamaIndex", reason: "Knowledge graph support for multi-document reasoning", href: "/tools/llamaindex-clinical-rag" },
    ];
    nextSteps = [
      { label: "How to Build a Medical RAG System", href: "/guides/build-medical-rag-system" },
      { label: "Private Medical RAG Deployment Guide", href: "/guides/private-medical-rag-deployment" },
      { label: "Clinical RAG Evaluation Checklist", href: "/guides/clinical-rag-evaluation-checklist" },
    ];
  } else if (score >= 70) {
    level = "Medium Readiness";
    architecture = "Your project has moderate complexity. Recommended: Start with Dify for rapid prototyping, then migrate to RAGFlow or LangChain as requirements solidify. Use local embedding models if privacy is a concern. Build a small test set before scaling.";
    tools = [
      { name: "Dify", reason: "Quick prototyping with visual workflow builder", href: "/tools/dify-medical-rag" },
      { name: "RAGFlow", reason: "Production-ready PDF parsing for medical documents", href: "/tools/ragflow-healthcare" },
    ];
    nextSteps = [
      { label: "How to Build a Medical RAG System", href: "/guides/build-medical-rag-system" },
      { label: "Medical PDF RAG: How to Prepare Clinical Documents", href: "/guides/medical-pdf-rag-prepare-clinical-documents" },
      { label: "RAG Evaluation Sheet", href: "/templates/evaluation-sheet" },
    ];
  } else {
    level = "Early Stage";
    architecture = "Your project is in the planning phase. Recommended: Start by documenting your use case and source documents. Use Dify&apos;s visual builder for quick experiments, or read our step-by-step guide before committing to a framework. Focus on document preparation first — this is often the most challenging part.";
    tools = [
      { name: "Dify", reason: "Low-code experimentation without infrastructure setup", href: "/tools/dify-medical-rag" },
    ];
    nextSteps = [
      { label: "What Is Clinical RAG?", href: "/what-is-clinical-rag" },
      { label: "How to Build a Medical RAG System", href: "/guides/build-medical-rag-system" },
      { label: "Medical PDF Preparation Checklist", href: "/templates/pdf-checklist" },
    ];
  }

  // Risks based on answers
  if (state.scannedRatio === "30-60" || state.scannedRatio === "60+") {
    risks.push("High scanned PDF ratio — OCR quality for medical terminology will be a significant challenge.");
  }
  if (state.pdfVolume === "500-2000" || state.pdfVolume === "2000+") {
    risks.push("Large document volume — plan for systematic document preparation and chunking strategy.");
  }
  if (!state.citationGrounding) {
    risks.push("Citation grounding not prioritized — consider adding source citation requirements to avoid unverifiable outputs.");
  }
  if (!state.evaluationWorkflow) {
    risks.push("No evaluation workflow planned — test with clinical questions before deploying to production.");
  }
  if (!state.humanReview) {
    risks.push("No human review workflow — establish a process for clinicians to review and flag AI outputs.");
  }
  if (state.privateDeploy && (state.pdfVolume === "2000+" || state.scannedRatio === "60+")) {
    risks.push("Self-hosted with large volume — ensure adequate GPU and storage infrastructure.");
  }

  return { score, level, architecture, tools, risks, nextSteps };
}

export default function ReadinessChecker() {
  const [state, setState] = useState<ChecklistState>({
    documentTypes: [],
    pdfVolume: "",
    scannedRatio: "",
    privateDeploy: false,
    citationGrounding: false,
    evaluationWorkflow: false,
    humanReview: false,
  });
  const [result, setResult] = useState<Result | null>(null);

  const toggleDocType = useCallback((type: string) => {
    setState((prev) => ({
      ...prev,
      documentTypes: prev.documentTypes.includes(type)
        ? prev.documentTypes.filter((t) => t !== type)
        : [...prev.documentTypes, type],
    }));
  }, []);

  const handleCalculate = () => {
    setResult(calculateResult(state));
  };

  const scoreColor = result
    ? result.score >= 85
      ? "text-green-600"
      : result.score >= 70
        ? "text-yellow-600"
        : "text-orange-600"
    : "text-gray-900";

  const scoreBg = result
    ? result.score >= 85
      ? "bg-green-50 border-green-200"
      : result.score >= 70
        ? "bg-yellow-50 border-yellow-200"
        : "bg-orange-50 border-orange-200"
    : "bg-gray-50 border-gray-200";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/tools" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Tools Directory</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Clinical RAG Readiness Checker</h1>
      <p className="text-xl text-gray-500 mb-12">Answer a few questions about your project to get a readiness score, recommended architecture, and next steps.</p>

      <div className="space-y-8">
        {/* Document Types */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">What types of documents will you work with?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Clinical guidelines", "Research papers", "Drug databases", "Hospital protocols", "Patient education materials"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-teal-300 hover:bg-teal-50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={state.documentTypes.includes(type)}
                  onChange={() => toggleDocType(type)}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* PDF Volume */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Approximately how many documents?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[{ label: "<100", value: "0-100" }, { label: "100–500", value: "100-500" }, { label: "500–2,000", value: "500-2000" }, { label: "2,000+", value: "2000+" }].map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer text-center transition-colors ${state.pdfVolume === opt.value ? "border-teal-500 bg-teal-50 text-teal-700 font-medium" : "border-gray-200 hover:border-teal-300 hover:bg-teal-50"}`}
              >
                <input
                  type="radio"
                  name="pdfVolume"
                  value={opt.value}
                  checked={state.pdfVolume === opt.value}
                  onChange={() => setState((prev) => ({ ...prev, pdfVolume: opt.value }))}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Scanned PDF Ratio */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">What percentage are scanned PDFs (images)?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[{ label: "<10%", value: "0-10" }, { label: "10–30%", value: "10-30" }, { label: "30–60%", value: "30-60" }, { label: "60%+", value: "60+" }].map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer text-center transition-colors ${state.scannedRatio === opt.value ? "border-teal-500 bg-teal-50 text-teal-700 font-medium" : "border-gray-200 hover:border-teal-300 hover:bg-teal-50"}`}
              >
                <input
                  type="radio"
                  name="scannedRatio"
                  value={opt.value}
                  checked={state.scannedRatio === opt.value}
                  onChange={() => setState((prev) => ({ ...prev, scannedRatio: opt.value }))}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Which requirements apply to your project?</h2>
          <div className="space-y-3">
            {[
              { key: "privateDeploy", label: "Private/on-premise deployment", desc: "Data must stay within controlled infrastructure" },
              { key: "citationGrounding", label: "Citation-grounded answers", desc: "Every claim must cite a source document" },
              { key: "evaluationWorkflow", label: "Evaluation workflow", desc: "Systematic testing before and after deployment" },
              { key: "humanReview", label: "Human review workflow", desc: "Clinicians review and flag AI outputs" },
            ].map((item) => (
              <label
                key={item.key}
                className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 cursor-pointer hover:border-teal-300 hover:bg-teal-50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={state[item.key as keyof ChecklistState] as boolean}
                  onChange={() => setState((prev) => ({ ...prev, [item.key]: !prev[item.key as keyof ChecklistState] }))}
                  className="w-4 h-4 mt-0.5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <div>
                  <span className="text-sm font-medium text-gray-900">{item.label}</span>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200"
        >
          Calculate Readiness Score
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-12 space-y-6">
          {/* Score */}
          <div className={`rounded-xl border p-8 text-center ${scoreBg}`}>
            <div className={`text-6xl font-bold ${scoreColor}`}>{result.score}</div>
            <p className={`text-lg font-medium mt-2 ${scoreColor}`}>{result.level}</p>
          </div>

          {/* Architecture */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommended Architecture</h3>
            <p className="text-gray-600 leading-relaxed">{result.architecture}</p>
          </div>

          {/* Suggested Tools */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Suggested Tools</h3>
            <div className="space-y-3">
              {result.tools.map((tool) => (
                <Link key={tool.name} href={tool.href} className="flex items-start gap-3 group p-3 rounded-lg hover:bg-teal-50 transition-colors">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="text-teal-600 font-medium group-hover:text-teal-700">{tool.name}</span>
                    <p className="text-gray-500 text-sm">{tool.reason}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Risks */}
          {result.risks.length > 0 && (
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Checklist</h3>
              <ul className="space-y-2">
                {result.risks.map((risk) => (
                  <li key={risk} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
            <div className="space-y-3">
              {result.nextSteps.map((step) => (
                <Link key={step.label} href={step.href} className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium group">
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  {step.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <p className="text-sm text-gray-400 mt-12 text-center">This tool provides general guidance only. Consult your institution&apos;s clinical governance and IT security teams for project-specific recommendations.</p>
      <p className="text-sm text-gray-400 mt-2 text-center">For a non-interactive alternative, see the <Link href="/guides/clinical-rag-evaluation-checklist" className="text-teal-600 hover:text-teal-700">Clinical RAG Evaluation Checklist</Link>.</p>
    </div>
  );
}

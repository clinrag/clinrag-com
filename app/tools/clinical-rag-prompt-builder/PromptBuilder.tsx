"use client";

import Link from "next/link";
import type { Metadata } from "next";
import { useState, useCallback } from "react";

export const metadata: Metadata = {
  title: "Clinical RAG Prompt Builder — Generate Safe Medical Prompts",
  description: "Generate production-ready prompt templates for clinical RAG systems with built-in safety constraints and citation requirements.",
  alternates: {
    canonical: "https://www.clinrag.com/tools/clinical-rag-prompt-builder",
  },
};

const prompts: Record<string, string> = {
  "guideline-qa": `You are a clinical information assistant. Your role is to help
healthcare professionals find and synthesize information from
clinical guidelines and medical literature. You are NOT a doctor
and your responses do not constitute medical advice.

Instructions:
1. Answer the question using ONLY the provided clinical guideline
   excerpts below.
2. If the guidelines do not contain sufficient information to
   answer the question, state: "The available clinical guidelines
   do not provide sufficient information to fully answer this
   question."
3. Cite the specific guideline source for each recommendation
   (include guideline name, publication year, and section).
4. Do NOT invent treatment recommendations, dosages, or clinical
   opinions that are not explicitly stated in the provided guidelines.
5. If multiple guidelines provide conflicting recommendations,
   note the disagreement and cite both sources.
6. Include a confidence level based on evidence strength:
   - HIGH: Supported by multiple consistent guidelines
   - MEDIUM: Supported by one guideline or moderate evidence
   - LOW: Limited evidence or conflicting guidelines

Guideline excerpts:
---
{context}
---

Question: {question}

Response format:
Answer: [Direct answer based on guidelines]

Supporting Evidence:
- [Recommendation] (Source: [Guideline name, year, section])

Evidence Strength: [HIGH/MEDIUM/LOW]

Note: Always verify guideline currency and consult current
institutional protocols before making clinical decisions.`,

  "pdf-summarization": `You are a clinical information assistant. Your role is to help
healthcare professionals understand and summarize complex
medical documents. You are NOT a doctor and your responses
do not constitute medical advice.

Instructions:
1. Summarize the provided medical document excerpt using ONLY
   the information contained in the text below.
2. Preserve the document&apos;s key findings, recommendations,
   and any stated limitations of evidence.
3. Do NOT add interpretations, conclusions, or clinical
   opinions that are not explicitly stated in the source document.
4. If the document discusses treatments, dosages, or clinical
   protocols, note that this information requires verification
   against current institutional policies and prescribing information.
5. Preserve the document structure: use headings, bullet points,
   and tables where appropriate.
6. Flag any sections of the document that appear incomplete,
   outdated, or superseded.

Medical document excerpt:
---
{context}
---

Document: {document_name}

Summarization request: {instruction}

Summary format:
Key Findings:
- [Finding 1] (Source: [Section/page])
- [Finding 2] (Source: [Section/page])

Recommendations:
- [Recommendation 1] (Source: [Section/page])

Limitations / Caveats:
- [Any noted limitations or areas of uncertainty]

Note: This summary is for information retrieval purposes only.
All clinical information should be verified against current
guidelines and institutional protocols.`,

  "protocol-search": `You are a clinical information assistant. Your role is to help
healthcare professionals locate and reference institutional
protocols and clinical pathways. You are NOT a doctor and
your responses do not constitute medical advice.

Instructions:
1. Identify the relevant institutional protocol or clinical
   pathway from the provided documents below.
2. Extract the specific steps, criteria, or recommendations
   that apply to the user&apos;s question.
3. Cite the specific protocol document, version, and section
   for each piece of information.
4. If the protocol does not address the specific scenario,
   state: "The institutional protocol does not address this
   specific scenario. Consult [relevant department/contact]
   for guidance."
5. Do NOT extrapolate from related protocols to answer
   questions outside the scope of the provided documents.
6. Note the protocol version and effective date — if the
   document appears outdated, flag this for review.

Institutional documents:
---
{context}
---

Query: {question}

Response format:
Applicable Protocol: [Protocol name, version, section]

Relevant Steps/Criteria:
- [Step or criterion] (Source: [Document, version, section])

Notes:
- [Any caveats, version concerns, or escalation guidance]

Note: Institutional protocols should be verified against
current versions. Consult the clinical governance team for
protocol updates or clarifications.`,

  "patient-education": `You are a clinical information assistant. Your role is to help
create patient-friendly educational materials based on clinical
references. You are NOT a doctor and your content must be
reviewed by a qualified healthcare professional before sharing
with patients.

Instructions:
1. Create patient-friendly language based ONLY on the clinical
   reference material provided below.
2. Use plain language (8th grade reading level). Avoid medical
   jargon where possible; when unavoidable medical terms are
   necessary, provide a simple definition.
3. Do NOT add medical advice, treatment recommendations, or
   diagnostic information beyond what is stated in the reference.
4. Include a note that patients should consult their healthcare
   provider for personalized guidance.
5. Structure the content with clear headings and bullet points
   for readability.
6. Flag any information that requires clinician review before
   sharing with patients.

Clinical reference:
---
{context}
---

Topic: {topic}

Target audience: [Patient / Caregiver / Both]

Educational material:

[Title]

What you need to know:
- [Key point in plain language]

When to contact your healthcare provider:
- [Warning signs / follow-up guidance from reference]

Questions to ask your provider:
- [Suggested questions based on the topic]

Note: This material is for educational purposes only and does
not replace professional medical advice. Always consult your
healthcare provider for personalized guidance.`,

  "teaching-support": `You are a clinical information assistant. Your role is to help
educators create teaching materials and case-based learning
exercises based on clinical literature. This content is for
educational purposes only and does not constitute clinical
guidance.

Instructions:
1. Create educational content based ONLY on the provided
   clinical reference material.
2. Structure the content for teaching: include learning
   objectives, key concepts, discussion questions, and
   reference to evidence.
3. Do NOT create content that presents itself as clinical
   decision-making guidance. Clearly label all content as
   educational.
4. When discussing treatments or protocols, cite the source
   guideline or study.
5. Include discussion prompts that encourage critical thinking
   about evidence quality, guideline limitations, and
   clinical judgment.
6. Flag areas where current evidence is evolving or where
   guidelines have changed recently.

Clinical reference:
---
{context}
---

Teaching topic: {topic}

Teaching material format:

Learning Objectives:
- [Objective 1: Understand...]
- [Objective 2: Compare...]

Key Concepts:
- [Concept with source citation]

Case Scenario (if applicable):
- [Scenario based on reference material]

Discussion Questions:
- [Question that promotes critical thinking about the evidence]

Key References:
- [Cited guidelines, studies, or protocols]

Note: This material is for educational purposes only. Clinical
decisions should be based on current guidelines and professional
judgment.`,
};

const purposeLabels: Record<string, string> = {
  "guideline-qa": "Guideline Q&A",
  "pdf-summarization": "Medical PDF Summarization",
  "protocol-search": "Institutional Protocol Search",
  "patient-education": "Patient Education Draft",
  "teaching-support": "Clinical Teaching Support",
};

export default function PromptBuilder() {
  const [purpose, setPurpose] = useState<string>("guideline-qa");
  const [copied, setCopied] = useState(false);

  const currentPrompt = prompts[purpose];

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(currentPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = currentPrompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [currentPrompt]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/tools" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Tools Directory</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Clinical RAG Prompt Builder</h1>
      <p className="text-xl text-gray-500 mb-4">Generate production-ready prompt templates for clinical RAG systems with built-in safety constraints and citation requirements.</p>
      <p className="text-sm text-gray-400 mb-12">All prompts are designed for information retrieval and clinician review support — they do not generate diagnostic or prescribing guidance.</p>

      {/* Purpose Selector */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">What is the prompt for?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(purposeLabels).map(([key, label]) => (
            <label
              key={key}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-colors ${purpose === key ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-teal-300 hover:bg-teal-50"}`}
            >
              <input
                type="radio"
                name="purpose"
                value={key}
                checked={purpose === key}
                onChange={() => setPurpose(key)}
                className="sr-only"
              />
              <span className={`font-medium ${purpose === key ? "text-teal-700" : "text-gray-900"}`}>{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Generated Prompt */}
      <div className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
        {currentPrompt}
      </div>

      {/* Copy Button */}
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={handleCopy}
          className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${copied ? "bg-green-600 text-white" : "bg-teal-600 text-white hover:bg-teal-700"}`}
        >
          {copied ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Prompt
            </>
          )}
        </button>
      </div>

      {/* Safety Notes */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Safety Design Notes
        </h3>
        <ul className="space-y-2 text-sm text-amber-800">
          <li><strong>All prompts enforce source grounding:</strong> The LLM is instructed to answer only from the provided context, never from its internal training data.</li>
          <li><strong>No diagnostic or prescribing guidance:</strong> Prompts are designed for information retrieval and clinician review support. They do not generate individualized clinical recommendations.</li>
          <li><strong>Citation requirements:</strong> Every prompt requires the model to cite specific source documents for each factual claim.</li>
          <li><strong>Disclaimer included:</strong> Every prompt template includes a disclaimer that outputs should be verified by qualified healthcare professionals.</li>
          <li><strong>Confidence levels:</strong> Prompts require the model to state its confidence level based on evidence quality.</li>
        </ul>
      </div>

      {/* Related Resources */}
      <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h3>
        <div className="space-y-3">
          <Link href="/templates/rag-prompt" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium group">
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Clinical RAG Prompt Template (Extended)
          </Link>
          <Link href="/guides/reduce-hallucinations-medical-ai" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium group">
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            How to Reduce Hallucinations in Medical AI
          </Link>
          <Link href="/templates/evaluation-sheet" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium group">
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            RAG Evaluation Sheet
          </Link>
        </div>
      </div>
    </div>
  );
}

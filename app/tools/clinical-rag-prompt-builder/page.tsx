import type { Metadata } from "next";
import PromptBuilder from "./PromptBuilder";

export const metadata: Metadata = {
  title: "Clinical RAG Prompt Builder — Generate Safe Medical Prompts",
  description: "Generate production-ready prompt templates for clinical RAG systems with built-in safety constraints and citation requirements.",
  alternates: {
    canonical: "https://www.clinrag.com/tools/clinical-rag-prompt-builder",
  },
};

export default function Page() {
  return <PromptBuilder />;
}

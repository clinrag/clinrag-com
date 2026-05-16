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
  return <ReadinessChecker />;
}

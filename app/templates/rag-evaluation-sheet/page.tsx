import type { Metadata } from "next";
import RAGEvalSheet from "./RAGEvalSheet";

export const metadata: Metadata = {
  title: "RAG Evaluation Sheet — Download Clinical RAG Testing Template",
  description: "Download a structured CSV evaluation sheet for testing clinical RAG systems. Track accuracy, citations, hallucinations, and safety.",
  alternates: {
    canonical: "https://www.clinrag.com/templates/rag-evaluation-sheet",
  },
};

export default function Page() {
  return <RAGEvalSheet />;
}

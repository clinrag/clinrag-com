import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.clinrag.com";
  const today = new Date().toISOString().split("T")[0];

  const routes = [
    { path: "", priority: 1, changeFreq: "weekly" as const },
    { path: "/what-is-clinical-rag", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/tools", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/tools/best-clinical-rag-tools", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/open-source-medical-rag-tools", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/clinical-rag-readiness-checker", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/tools/clinical-rag-prompt-builder", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/tools/ragflow-healthcare", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/dify-medical-rag", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/llamaindex-clinical-rag", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/langchain-medical-rag", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/openevidence-overview", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/glass-health-overview", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/clinicalkey-ai-overview", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/guides", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/guides/build-medical-rag-system", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/guides/rag-vs-fine-tuning-healthcare", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/guides/clinical-rag-evaluation-checklist", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/guides/reduce-hallucinations-medical-ai", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/guides/private-medical-rag-deployment", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/guides/clinical-rag-vs-medical-chatbot", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/guides/citation-grounding-medical-rag", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/guides/medical-pdf-rag-prepare-clinical-documents", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/guides/evaluate-medical-rag-answers", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/guides/clinical-rag-safety-checklist", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/templates", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/templates/rag-prompt", priority: 0.5, changeFreq: "monthly" as const },
    { path: "/templates/pdf-checklist", priority: 0.5, changeFreq: "monthly" as const },
    { path: "/templates/evaluation-sheet", priority: 0.5, changeFreq: "monthly" as const },
    { path: "/templates/rag-evaluation-sheet", priority: 0.5, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.4, changeFreq: "yearly" as const },
    { path: "/starter-kit", priority: 0.8, changeFreq: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: today,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.clinrag.com";
  const today = new Date().toISOString().split("T")[0];

  const routes = [
    { path: "", priority: 1, changeFreq: "weekly" as const },
    { path: "/what-is-clinical-rag", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/tools", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/tools/ragflow-healthcare", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/dify-medical-rag", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/llamaindex-clinical-rag", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/langchain-medical-rag", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/openevidence-overview", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/glass-health-overview", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/clinicalkey-ai-overview", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/guides", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/guides/build-medical-rag", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/guides/rag-vs-finetuning", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/guides/evaluation-checklist", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/guides/reduce-hallucinations", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/guides/private-deployment", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/templates", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/templates/rag-prompt", priority: 0.5, changeFreq: "monthly" as const },
    { path: "/templates/pdf-checklist", priority: 0.5, changeFreq: "monthly" as const },
    { path: "/templates/evaluation-sheet", priority: 0.5, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.4, changeFreq: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: today,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical RAG Evaluation Checklist — Assess Safety, Accuracy, and Reliability",
  description: "A comprehensive checklist for evaluating retrieval quality, citation grounding, and safety risks in clinical RAG systems.",
  alternates: {
    canonical: "https://www.clinrag.com/guides/clinical-rag-evaluation-checklist",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Clinical RAG Evaluation Checklist",
  description: "A practical checklist for evaluating retrieval quality, citation grounding, and safety risks in clinical RAG systems.",
  author: { "@type": "Organization", name: "ClinRAG" },
  publisher: { "@type": "Organization", name: "ClinRAG" },
  datePublished: "2026-05-15",
  dateModified: "2026-05-15",
  mainEntityOfPage: "https://www.clinrag.com/guides/clinical-rag-evaluation-checklist",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.clinrag.com" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.clinrag.com/guides" },
    { "@type": "ListItem", position: 3, name: "Evaluation Checklist", item: "https://www.clinrag.com/guides/clinical-rag-evaluation-checklist" },
  ],
};

export default function EvaluationChecklist() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mb-8">
        <Link href="/guides" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Guides</Link>
      </div>

      <article className="prose-clinical">
        <h1>Clinical RAG Evaluation Checklist</h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
          <span><strong>Author:</strong> ClinRAG Editorial Team</span>
          <span><strong>Last updated:</strong> May 15, 2026</span>
          <span><strong>Reading time:</strong> 12 min</span>
        </div>

        <p className="text-xl text-gray-500 mb-8">A comprehensive checklist for evaluating the safety, accuracy, and reliability of medical RAG systems.</p>

        <h2>Factual Accuracy</h2>
        <ul>
          <li>[ ] Answers are consistent with current clinical guidelines for the topic</li>
          <li>[ ] Drug names, dosages, and contraindications are correct</li>
          <li>[ ] No fabricated studies, authors, or medical facts (hallucination check)</li>
          <li>[ ] Statistical claims match the source documents</li>
          <li>[ ] Medical terminology is used correctly and consistently</li>
        </ul>

        <h2>Source Quality</h2>
        <ul>
          <li>[ ] Retrieved sources are from authoritative, peer-reviewed publications</li>
          <li>[ ] Source documents are current (not superseded guidelines)</li>
          <li>[ ] Citations accurately support the claims made in the response</li>
          <li>[ ] Response includes source links that the user can verify</li>
          <li>[ ] System acknowledges when evidence is weak or conflicting</li>
        </ul>

        <h2>Retrieval Quality</h2>
        <ul>
          <li>[ ] Relevant documents are retrieved for typical clinical queries</li>
          <li>[ ] Irrelevant documents are not included in the context</li>
          <li>[ ] Retrieval works across different medical specialties</li>
          <li>[ ] System handles edge cases (rare conditions, emerging treatments)</li>
          <li>[ ] Retrieval latency is acceptable for clinical workflow (&lt;2 seconds)</li>
        </ul>

        <h2>Safety</h2>
        <ul>
          <li>[ ] System refuses to answer questions outside its knowledge scope</li>
          <li>[ ] Responses include appropriate disclaimers (not medical advice)</li>
          <li>[ ] No recommendations for off-label use without clear labeling</li>
          <li>[ ] System handles adversarial prompts safely</li>
          <li>[ ] High-risk recommendations (e.g., medication changes) are clearly flagged</li>
        </ul>

        <h2>Bias and Equity</h2>
        <ul>
          <li>[ ] Responses are equitable across demographic groups</li>
          <li>[ ] Clinical guidelines for diverse populations are represented</li>
          <li>[ ] System does not perpetuate known medical biases</li>
          <li>[ ] Testing includes scenarios from underrepresented populations</li>
        </ul>

        <h2>Performance</h2>
        <ul>
          <li>[ ] Response time is acceptable for the clinical use case</li>
          <li>[ ] System handles concurrent users without degradation</li>
          <li>[ ] Knowledge base updates do not cause downtime</li>
          <li>[ ] Error handling is graceful with informative messages</li>
        </ul>

        <h2>Compliance</h2>
        <ul>
          <li>[ ] Data handling complies with applicable privacy regulations</li>
          <li>[ ] Audit logging is in place for clinical safety review</li>
          <li>[ ] User access controls are appropriate for the deployment</li>
          <li>[ ] Data retention policies are defined and implemented</li>
        </ul>

        <h2>Evaluation Methods</h2>
        <p>Use these methods to assess each criterion:</p>
        <ol>
          <li><strong>Expert review:</strong> Have clinicians evaluate sample Q&amp;A pairs</li>
          <li><strong>Automated testing:</strong> Use a gold-standard test set of clinical questions</li>
          <li><strong>Red team testing:</strong> Try to elicit incorrect or unsafe responses</li>
          <li><strong>A/B comparison:</strong> Compare against established clinical references</li>
          <li><strong>Continuous monitoring:</strong> Track real-world usage and flag anomalies</li>
        </ol>

        <p>See our <Link href="/templates/evaluation-sheet">RAG Evaluation Framework</Link> template for a structured testing workbook.</p>

        <hr className="my-8 border-gray-200" />

        <h2>Related Resources</h2>
        <ul>
          <li><Link href="/guides/build-medical-rag-system">How to Build a Medical RAG System</Link></li>
          <li><Link href="/guides/reduce-hallucinations-medical-ai">How to Reduce Hallucinations in Medical AI</Link></li>
          <li><Link href="/templates/rag-prompt">Clinical RAG Prompt Template</Link></li>
          <li><Link href="/tools">Clinical RAG Tools Directory</Link></li>
        </ul>
      </article>
    </div>
  );
}

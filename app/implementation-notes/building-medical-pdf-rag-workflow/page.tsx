import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What I Learned Building a Medical PDF RAG Workflow — Implementation Notes",
  description: "Real-world lessons from building a clinical RAG system that ingests medical PDFs — what went wrong, what worked, and what I would do differently.",
  alternates: {
    canonical: "https://www.clinrag.com/implementation-notes/building-medical-pdf-rag-workflow",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What I Learned Building a Medical PDF RAG Workflow",
  description: "Real-world lessons from building a clinical RAG system that ingests medical PDFs.",
  author: { "@type": "Organization", name: "ClinRAG" },
  publisher: { "@type": "Organization", name: "ClinRAG" },
  datePublished: "2026-05-15",
  dateModified: "2026-05-15",
  mainEntityOfPage: "https://www.clinrag.com/implementation-notes/building-medical-pdf-rag-workflow",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.clinrag.com" },
    { "@type": "ListItem", position: 2, name: "Implementation Notes", item: "https://www.clinrag.com/implementation-notes" },
    { "@type": "ListItem", position: 3, name: "Building a Medical PDF RAG Workflow", item: "https://www.clinrag.com/implementation-notes/building-medical-pdf-rag-workflow" },
  ],
};

export default function MedicalPDFRAGLessons() {
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
        <Link href="/implementation-notes" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Implementation Notes</Link>
      </div>

      <article className="prose-clinical">
        <h1>What I Learned Building a Medical PDF RAG Workflow</h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
          <span><strong>Author:</strong> ClinRAG Editorial Team</span>
          <span><strong>Last updated:</strong> May 15, 2026</span>
          <span><strong>Series:</strong> Implementation Notes</span>
        </div>

        <p className="text-xl text-gray-500 mb-8">Real-world lessons from building a clinical RAG system that ingests medical PDFs — what went wrong, what worked, and what I would do differently. This is not a tutorial. It&apos;s a field report.</p>

        <h2>The Setup</h2>
        <p>We set out to build a RAG system that could answer clinical questions using a knowledge base of medical guidelines — AHA, NICE, IDSA, and institutional protocols. The source material was almost entirely PDF: hundreds of documents, ranging from well-formatted prescribing information to scanned copies of older hospital policies.</p>
        <p>The first version took about three weeks. It worked in the sense that it returned answers to most queries. It failed in the sense that many of those answers were wrong in subtle, dangerous ways. Here is what we learned.</p>

        <h2>Lesson 1: The PDF Parser Determines Everything</h2>
        <p>This was the single biggest lesson. No matter how good your embedding model is, no matter how sophisticated your retrieval strategy, if the PDF parser loses critical information during ingestion, your RAG system is built on sand.</p>
        <p>Our first attempt used a standard PyPDF2-based loader. It extracted text fine for simple documents. But for clinical guidelines — which often have multi-column layouts, tables of drug dosages, sidebars with safety warnings, and footnotes with important qualifiers — the output was frequently garbled. Table rows were concatenated into single paragraphs. Column boundaries disappeared. Footnotes were either duplicated or lost entirely.</p>
        <p><strong>What we did:</strong> Switched to RAGFlow for document parsing. Its layout analysis engine preserved the structure of complex medical PDFs significantly better. Tables stayed as tables. Multi-column layouts were handled correctly. Footnotes remained attached to their reference points.</p>
        <p><strong>What I would do differently:</strong> Start with the parser. Don&apos;t build the rest of the pipeline until you can verify that your ingestion process correctly handles the full range of your source documents. This is the foundation — everything else is secondary.</p>

        <h2>Lesson 2: Chunking Strategy Should Match Document Structure</h2>
        <p>Our initial approach used fixed-size chunks of 500 tokens with 10% overlap. This worked okay for narrative text but destroyed the coherence of guideline recommendations, which are often organized as hierarchical lists with conditions, subconditions, and evidence grades.</p>
        <p><strong>What we did:</strong> Switched to section-based chunking where possible. We configured the chunker to split at heading boundaries and keep related recommendation blocks together. This meant uneven chunk sizes — some chunks were 200 tokens, others 1,200 — but retrieval quality improved dramatically because the LLM received coherent recommendation blocks rather than fragmented snippets.</p>

        <h2>Lesson 3: Drug Dosage Tables Are a Special Case</h2>
        <p>Drug interaction tables and dosing schedules present a unique challenge. They are often dense, multi-column, and contain abbreviations that are critical for correct interpretation (e.g., &quot;q6h&quot; vs &quot;q12h&quot;). Standard chunking splits these tables across chunks, losing the row-column relationships.</p>
        <p><strong>What we did:</strong> Extracted tables as separate chunks with preserved structure. We used RAGFlow&apos;s table extraction to convert each table to a structured format, then stored it as a separate document with metadata linking it to the parent guideline. This allowed the retrieval system to return complete tables rather than fragmented rows.</p>

        <h2>Lesson 4: Metadata Is as Important as the Text</h2>
        <p>Our first knowledge base had no metadata beyond the document name. This meant that when the system retrieved a guideline, it couldn&apos;t distinguish between the 2019 version and the 2024 update. In clinical practice, this distinction can be the difference between an obsolete and a current recommendation.</p>
        <p><strong>What we did:</strong> Added structured metadata to every chunk: document source, publication date, version number, medical specialty, evidence level, and guideline type. This enabled specialty-specific filtering and version-aware retrieval, which significantly improved answer accuracy.</p>

        <h2>Lesson 5: Test with Questions That Have Known Answers</h2>
        <p>It&apos;s easy to convince yourself that your RAG system works because it returns fluent, confident answers. The reality is that fluent wrong answers are more dangerous than hesitant correct ones.</p>
        <p><strong>What we did:</strong> Built a test set of 50 clinical questions with documented correct answers. Questions ranged from straightforward (&quot;What is the first-line treatment for hypertension in adults?&quot;) to edge cases (&quot;What are the dosing adjustments for amoxicillin in patients with severe renal impairment?&quot;). We evaluated each response for factual accuracy, citation quality, and safety.</p>
        <p>The results were humbling. Our initial system scored a 3.2 out of 5 on average — with several &quot;Dangerous&quot; scores where fabricated drug names or incorrect dosages appeared. After improving the parser and chunking strategy, the score improved to 4.1.</p>

        <h2>Lesson 6: Citation Grounding Is Non-Negotiable</h2>
        <p>The most important design decision in a clinical RAG system is whether every generated claim is linked to a specific source document. Without citations, there is no way for a clinician to verify the answer. Without verification, there is no safety net.</p>
        <p><strong>What we did:</strong> Designed the prompt template to require source citations for every factual claim. We also built a post-processing step that extracts cited sources and verifies they are present in the retrieved context. If a citation references a document that was not retrieved, it&apos;s flagged as a potential hallucination.</p>

        <h2>Lesson 7: Plan for Maintenance From Day One</h2>
        <p>Clinical guidelines are updated regularly. Drug monographs change. New research supersedes old recommendations. A RAG system that works today will produce outdated answers tomorrow if the knowledge base is not maintained.</p>
        <p><strong>What we did:</strong> Built a document versioning system that tracks when each guideline was last updated. We set up alerts for new guideline releases from major organizations (AHA, NICE, IDSA) and established a quarterly review cycle for the knowledge base.</p>
        <p><strong>What I would do differently:</strong> Build this from the start, not as an afterthought. Versioning and update workflows are not optional — they are core to the system&apos;s safety.</p>

        <h2>Bottom Line</h2>
        <p>Building a medical PDF RAG workflow is 80% document preparation and 20% everything else. The quality of your parser, chunking strategy, and metadata tagging determines whether your system will produce reliable, verifiable answers or fluent fabrications. Invest in the foundation.</p>

        <p className="text-sm text-gray-500 mt-8"><strong>Disclaimer:</strong> This is a technical field report about building RAG systems. It does not constitute medical or legal advice. All clinical RAG deployments should be reviewed by qualified healthcare professionals.</p>

        <hr className="my-8 border-gray-200" />

        <h2>Related Resources</h2>
        <ul>
          <li><Link href="/guides/build-medical-rag-system">How to Build a Medical RAG System</Link></li>
          <li><Link href="/guides/medical-pdf-rag-prepare-clinical-documents">Medical PDF RAG: How to Prepare Clinical Documents</Link></li>
          <li><Link href="/implementation-notes/scanned-medical-pdfs-rag-pipelines">Why Scanned Medical PDFs Break RAG Pipelines</Link></li>
          <li><Link href="/tools/ragflow-healthcare">RAGFlow for Healthcare</Link></li>
          <li><Link href="/guides/clinical-rag-evaluation-checklist">Clinical RAG Evaluation Checklist</Link></li>
        </ul>
      </article>
    </div>
  );
}

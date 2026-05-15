import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical PDF Preparation Checklist — Document Prep for Clinical RAG",
  description: "Step-by-step checklist for preparing medical documents for RAG ingestion, including chunking, metadata tagging, and quality checks.",
  alternates: {
    canonical: "https://www.clinrag.com/templates/pdf-checklist",
  },
};

export default function PDFChecklist() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/templates" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Templates</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical PDF Preparation Checklist</h1>
      <p className="text-xl text-gray-500 mb-8">Step-by-step checklist for preparing medical documents for RAG ingestion.</p>

      <article className="prose-clinical">
        <h2>Document Collection</h2>
        <ul>
          <li>[ ] Identify all relevant medical document sources</li>
          <li>[ ] Collect clinical guidelines (NICE, AHA, ACC, IDSA, etc.)</li>
          <li>[ ] Gather drug databases and prescribing information</li>
          <li>[ ] Download relevant medical literature (PubMed Central open-access)</li>
          <li>[ ] Include hospital-specific protocols and pathways</li>
          <li>[ ] Verify all documents are from authoritative sources</li>
          <li>[ ] Note the publication date of each document</li>
        </ul>

        <h2>Document Validation</h2>
        <ul>
          <li>[ ] Check that PDFs are text-based (not scanned images)</li>
          <li>[ ] For scanned PDFs, run OCR with medical vocabulary</li>
          <li>[ ] Verify table and figure extraction quality</li>
          <li>[ ] Check for encoding issues in medical notation (subscripts, Greek letters)</li>
          <li>[ ] Ensure references and citations are parseable</li>
          <li>[ ] Flag documents with complex layouts for manual review</li>
        </ul>

        <h2>Chunking Strategy</h2>
        <ul>
          <li>[ ] Choose chunk size: 500-1000 tokens for medical content</li>
          <li>[ ] Set overlap: 10-20% to preserve context across boundaries</li>
          <li>[ ] Split by section headings where possible</li>
          <li>[ ] Keep tables intact as single chunks when possible</li>
          <li>[ ] Keep drug dosage tables as single chunks</li>
          <li>[ ] Preserve hierarchical structure (document → section → subsection)</li>
        </ul>

        <h2>Metadata Tagging</h2>
        <ul>
          <li>[ ] Document source (journal, organization, database)</li>
          <li>[ ] Publication date and version</li>
          <li>[ ] Medical specialty (cardiology, oncology, etc.)</li>
          <li>[ ] Document type (guideline, research paper, drug label)</li>
          <li>[ ] Evidence level (if applicable)</li>
          <li>[ ] Author and institution</li>
          <li>[ ] DOI or unique identifier</li>
        </ul>

        <h2>Quality Checks</h2>
        <ul>
          <li>[ ] Sample retrieval test: query each document and verify relevant chunks are found</li>
          <li>[ ] Check for duplicate content across documents</li>
          <li>[ ] Verify that drug names and dosages survive chunking intact</li>
          <li>[ ] Test with medical abbreviations and acronyms</li>
          <li>[ ] Ensure superseded guidelines are marked or removed</li>
          <li>[ ] Validate encoding of special characters (chemical formulas, units)</li>
        </ul>

        <h2>Storage and Versioning</h2>
        <ul>
          <li>[ ] Store original documents in version-controlled repository</li>
          <li>[ ] Maintain a document inventory with metadata</li>
          <li>[ ] Set up a process for regular document updates</li>
          <li>[ ] Track which document versions are in the current knowledge base</li>
          <li>[ ] Archive superseded documents with expiration dates</li>
        </ul>

        <h2>Recommended Tools</h2>
        <ul>
          <li><strong>PDF parsing:</strong> <Link href="/tools/ragflow-healthcare">RAGFlow</Link> for complex layouts, PyMuPDF for simple PDFs</li>
          <li><strong>OCR:</strong> Tesseract with medical dictionary</li>
          <li><strong>Chunking:</strong> LangChain RecursiveCharacterTextSplitter or LlamaIndex SentenceSplitter</li>
          <li><strong>Validation:</strong> Manual review sample + automated retrieval quality test</li>
        </ul>
      </article>
    </div>
  );
}

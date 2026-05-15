import Link from "next/link";

export default function WhatIsClinicalRAG() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      <article className="prose-clinical">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">What is Clinical RAG?</h1>
        <p className="text-xl text-gray-500 mb-8">Understanding Retrieval-Augmented Generation in healthcare and clinical applications.</p>

        <h2>The Problem with LLMs in Healthcare</h2>
        <p>Large Language Models (LLMs) like GPT-4 and Claude are trained on vast corpora of text, but this training data has a cutoff date and may contain inaccuracies. In healthcare, where decisions can be life-critical, relying solely on an LLM&apos;s parametric memory is dangerous. These models can <strong>hallucinate</strong> — generate plausible-sounding but incorrect information — which is unacceptable in clinical contexts.</p>
        <p>Additionally, medical knowledge evolves rapidly. New guidelines, drug approvals, and clinical trial results are published daily. An LLM trained on data from 2023 cannot answer questions about a drug approved in 2024.</p>

        <h2>What is RAG?</h2>
        <p><strong>Retrieval-Augmented Generation (RAG)</strong> is an architecture that combines information retrieval with generative AI. Instead of asking an LLM to answer from memory alone, RAG:</p>
        <ol>
          <li><strong>Retrieves</strong> relevant documents from a knowledge base (medical literature, guidelines, EHR data)</li>
          <li><strong>Augments</strong> the user&apos;s query with these retrieved documents as context</li>
          <li><strong>Generates</strong> a response grounded in the retrieved evidence</li>
        </ol>

        <blockquote>
          RAG essentially gives the LLM an &quot;open book test&quot; — it can reference authoritative sources rather than guessing from memory.
        </blockquote>

        <h2>Why RAG is Especially Important in Clinical Settings</h2>

        <h3>1. Evidence-Based Responses</h3>
        <p>Every answer can be traced back to source documents — clinical guidelines, peer-reviewed papers, or hospital protocols. This creates an <strong>audit trail</strong> that clinicians can verify.</p>

        <h3>2. Up-to-Date Knowledge</h3>
        <p>When new research is published or guidelines are updated, you simply add the documents to the knowledge base. No retraining required.</p>

        <h3>3. Domain Specificity</h3>
        <p>Clinical RAG systems can be scoped to specific specialties — cardiology, oncology, emergency medicine — retrieving only from relevant sources.</p>

        <h3>4. Reduced Hallucination Risk</h3>
        <p>By grounding responses in retrieved evidence, RAG dramatically reduces the chance of fabricated drug names, incorrect dosages, or non-existent treatment protocols.</p>

        <h3>5. Compliance and Privacy</h3>
        <p>Unlike public LLM APIs, RAG systems can be deployed on-premise with full control over data flow — essential for HIPAA compliance.</p>

        <h2>How Clinical RAG Works</h2>

        <h3>Architecture Overview</h3>
        <pre>{`Clinical Query → Embedding Model → Vector Database → Relevant Documents → LLM → Grounded Answer
                                                                    ↑
                                                      Medical Knowledge Base
                                                      (Guidelines, Papers, EHR)`}</pre>

        <h3>Key Components</h3>
        <ul>
          <li><strong>Document Ingestion:</strong> Medical PDFs, clinical guidelines, EHR records are chunked and embedded</li>
          <li><strong>Vector Store:</strong> Embeddings stored in databases like Pinecone, Milvus, or FAISS</li>
          <li><strong>Retrieval:</strong> Semantic search finds the most relevant documents for each query</li>
          <li><strong>LLM Generation:</strong> The model generates responses conditioned on both the query and retrieved context</li>
          <li><strong>Citation:</strong> Responses include source references for verification</li>
        </ul>

        <h2>Clinical RAG Use Cases</h2>

        <h3>Clinical Decision Support</h3>
        <p>Physicians query patient symptoms, lab results, and history to get differential diagnoses and treatment recommendations grounded in current guidelines.</p>

        <h3>Medical Literature Review</h3>
        <p>Researchers quickly synthesize findings across thousands of papers for systematic reviews or meta-analyses.</p>

        <h3>Patient Education</h3>
        <p>Generate patient-friendly explanations from clinical notes and medical references.</p>

        <h3>Drug Interaction Checking</h3>
        <p>Query pharmacological databases and clinical papers to identify potential drug-drug interactions.</p>

        <h3>Coding and Billing</h3>
        <p>Match clinical documentation to appropriate ICD-10 and CPT codes using guideline-grounded RAG.</p>

        <h2>Challenges in Clinical RAG</h2>
        <ul>
          <li><strong>Document quality:</strong> Medical documents require careful parsing (tables, figures, references)</li>
          <li><strong>Regulatory compliance:</strong> HIPAA, GDPR, and FDA regulations for AI in healthcare</li>
          <li><strong>Latency:</strong> Clinical workflows require fast responses</li>
          <li><strong>Evaluation:</strong> Measuring accuracy in high-stakes medical contexts</li>
          <li><strong>Bias:</strong> Ensuring equitable recommendations across populations</li>
        </ul>

        <h2>Next Steps</h2>
        <p>Ready to explore the tools and build your own clinical RAG system?</p>
        <ul>
          <li>Browse the <Link href="/tools">Tools Directory</Link> for frameworks and platforms</li>
          <li>Read <Link href="/guides/build-medical-rag">How to Build a Medical RAG System</Link></li>
          <li>Download the <Link href="/templates/rag-prompt">Clinical RAG Prompt Template</Link></li>
        </ul>
      </article>
    </div>
  );
}

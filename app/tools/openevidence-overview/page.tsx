import Link from "next/link";

export default function OpenEvidenceOverview() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/tools" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Tools Directory</Link>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-medium bg-teal-50 text-teal-700 px-3 py-1 rounded-full">SaaS</span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">OpenEvidence</h1>

      <div className="mb-8">
        <a href="https://www.openevidence.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition-colors">
          Visit Official Website
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6" />
          </svg>
        </a>
      </div>

      <article className="prose-clinical">
        <h2>What is OpenEvidence?</h2>
        <p>OpenEvidence is an AI-powered medical information tool that uses RAG to answer clinical questions with citations to peer-reviewed medical evidence. The platform is designed to give clinicians access to evidence-based information sourced from medical literature and clinical guidelines.</p>

        <h2>Key Features</h2>
        <ul>
          <li>Evidence-grounded answers with citations to medical literature</li>
          <li>Real-time access to current clinical guidelines and research</li>
          <li>Information retrieval at the point of care</li>
          <li>Answers sourced from peer-reviewed references</li>
          <li>Mobile-friendly interface for convenient access</li>
        </ul>

        <h2>Healthcare Use Case</h2>
        <p>Clinicians can ask clinical questions — such as &quot;What is the first-line treatment for community-acquired pneumonia in adults?&quot; — and receive information sourced from current medical literature with citations. All outputs should be verified against authoritative clinical sources.</p>

        <h2>How It Works</h2>
        <p>OpenEvidence indexes a curated database of peer-reviewed medical literature, clinical guidelines, and evidence-based medicine resources. When a user asks a question, the system retrieves relevant evidence and generates a synthesized answer with source citations.</p>

        <h2>Getting Started</h2>
        <ol>
          <li>Visit <a href="https://www.openevidence.com" target="_blank" rel="noopener noreferrer">openevidence.com</a> to create an account</li>
          <li>Access the web interface or mobile app</li>
          <li>Ask clinical questions in natural language</li>
          <li>Review answers with source citations for verification</li>
          <li>Explore specific clinical topics and guideline summaries</li>
        </ol>

        <h2>Limitations</h2>
        <ul>
          <li>SaaS model may not meet all institutional data privacy requirements</li>
          <li>Curated literature scope may not cover rare conditions or emerging research</li>
          <li>Not designed for patient-specific queries using EHR data</li>
          <li>Information should be verified by qualified healthcare professionals</li>
        </ul>
      </article>
    </div>
  );
}

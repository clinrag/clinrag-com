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
      <h1 className="text-4xl font-bold text-gray-900 mb-6">OpenEvidence Overview</h1>

      <article className="prose-clinical">
        <h2>What is OpenEvidence?</h2>
        <p>OpenEvidence is an AI-powered clinical decision support platform that uses RAG to answer medical questions with citations to peer-reviewed medical evidence. Founded by Dr. Bryan Roberts, the platform is designed to give clinicians instant, evidence-based answers to clinical questions at the point of care.</p>

        <h2>Key Features</h2>
        <ul>
          <li>Evidence-based answers with citations to medical literature</li>
          <li>Real-time access to current clinical guidelines and research</li>
          <li>Clinical decision support at the point of care</li>
          <li>Answers grounded exclusively in peer-reviewed sources</li>
          <li>Mobile-friendly interface for use during patient rounds</li>
        </ul>

        <h2>Healthcare Use Case</h2>
        <p>Clinicians can ask clinical questions — such as &quot;What is the first-line treatment for community-acquired pneumonia in adults?&quot; — and receive answers backed by current medical literature with citations. This makes it a practical tool for point-of-care decision support.</p>

        <h2>How It Works</h2>
        <p>OpenEvidence indexes a curated database of peer-reviewed medical literature, clinical guidelines, and evidence-based medicine resources. When a clinician asks a question, the system retrieves relevant evidence and generates a synthesized answer with source citations.</p>

        <h2>Getting Started</h2>
        <ol>
          <li>Visit <a href="https://www.openevidence.com" target="_blank" rel="noopener noreferrer">openevidence.com</a> to create an account</li>
          <li>Access the web interface or mobile app</li>
          <li>Ask clinical questions in natural language</li>
          <li>Review evidence-based answers with source citations</li>
          <li>Explore specific clinical topics and guideline summaries</li>
        </ol>

        <h2>Limitations</h2>
        <ul>
          <li>SaaS model may not meet all institutional data privacy requirements</li>
          <li>Curated literature scope may not cover rare conditions or emerging research</li>
          <li>Not designed for patient-specific queries using EHR data</li>
        </ul>
      </article>
    </div>
  );
}

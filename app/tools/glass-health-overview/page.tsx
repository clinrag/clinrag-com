import Link from "next/link";

export default function GlassHealthOverview() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/tools" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Tools Directory</Link>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-medium bg-teal-50 text-teal-700 px-3 py-1 rounded-full">SaaS</span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Glass Health Overview</h1>

      <article className="prose-clinical">
        <h2>What is Glass Health?</h2>
        <p>Glass Health provides AI-powered clinical documentation and decision support tools. The platform leverages RAG to ground its recommendations in current clinical guidelines, helping clinicians create comprehensive patient notes, differential diagnoses, and treatment plans.</p>

        <h2>Key Features</h2>
        <ul>
          <li>AI-assisted clinical note generation</li>
          <li>Differential diagnosis suggestions with evidence</li>
          <li>Treatment recommendations grounded in guidelines</li>
          <li>SOAP note templates and structured documentation</li>
          <li>Real-time clinical guideline lookup</li>
        </ul>

        <h2>Healthcare Use Case</h2>
        <p>Glass Health streamlines clinical documentation while ensuring that treatment recommendations are grounded in evidence. Clinicians input patient information and receive AI-generated notes, differential diagnoses, and care plans — all backed by current clinical guidelines.</p>

        <h2>Getting Started</h2>
        <ol>
          <li>Visit <a href="https://glass.health" target="_blank" rel="noopener noreferrer">glass.health</a> to create an account</li>
          <li>Input patient presentation information</li>
          <li>Review AI-generated differential diagnoses</li>
          <li>Generate clinical notes using SOAP templates</li>
          <li>Verify treatment recommendations against guidelines</li>
        </ol>

        <h2>Limitations</h2>
        <ul>
          <li>Cloud-based service — verify institutional data privacy policies</li>
          <li>AI recommendations should be verified by a licensed clinician</li>
          <li>Not a replacement for clinical judgment</li>
        </ul>
      </article>
    </div>
  );
}

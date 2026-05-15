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
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Glass Health</h1>

      <div className="mb-8">
        <a href="https://glass.health" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition-colors">
          Visit Official Website
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6" />
          </svg>
        </a>
      </div>

      <article className="prose-clinical">
        <h2>What is Glass Health?</h2>
        <p>Glass Health provides AI-assisted clinical documentation and information support tools. The platform leverages RAG to ground its outputs in current clinical guidelines, helping clinicians create structured patient notes and explore evidence-based information. The platform is intended to support, not replace, clinical judgment.</p>

        <h2>Key Features</h2>
        <ul>
          <li>AI-assisted clinical note generation</li>
          <li>Evidence-grounded information retrieval</li>
          <li>Information resources aligned with clinical guidelines</li>
          <li>SOAP note templates and structured documentation</li>
          <li>Real-time clinical guideline lookup</li>
        </ul>

        <h2>Healthcare Use Case</h2>
        <p>Glass Health streamlines clinical documentation workflows while providing information resources grounded in evidence. Clinicians can use the platform to generate structured notes and explore guideline-based information — all intended to support professional clinical judgment, not replace it.</p>

        <h2>Getting Started</h2>
        <ol>
          <li>Visit <a href="https://glass.health" target="_blank" rel="noopener noreferrer">glass.health</a> to create an account</li>
          <li>Input patient presentation information</li>
          <li>Review AI-generated documentation outputs</li>
          <li>Generate clinical notes using SOAP templates</li>
          <li>Verify all information against authoritative clinical sources</li>
        </ol>

        <h2>Limitations</h2>
        <ul>
          <li>Cloud-based service — verify institutional data privacy policies</li>
          <li>AI outputs should always be reviewed by a licensed clinician</li>
          <li>Not a substitute for clinical judgment or professional medical advice</li>
        </ul>
      </article>
    </div>
  );
}

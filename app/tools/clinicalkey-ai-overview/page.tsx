import Link from "next/link";

export default function ClinicalKeyAIOverview() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/tools" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Tools Directory</Link>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-medium bg-teal-50 text-teal-700 px-3 py-1 rounded-full">Enterprise</span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">ClinicalKey AI</h1>

      <div className="mb-8">
        <a href="https://www.clinicalkey.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition-colors">
          Visit Official Website
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6" />
          </svg>
        </a>
      </div>

      <article className="prose-clinical">
        <h2>What is ClinicalKey AI?</h2>
        <p>ClinicalKey AI by Elsevier combines the vast medical content library of ClinicalKey with AI-powered search and summarization. It provides access to Elsevier&apos;s comprehensive collection of peer-reviewed journals, textbooks, clinical guidelines, and drug information — all searchable through a natural language interface powered by RAG technology.</p>

        <h2>Key Features</h2>
        <ul>
          <li>Access to Elsevier&apos;s comprehensive medical content library</li>
          <li>AI-powered natural language search</li>
          <li>Peer-reviewed sources across 75+ medical specialties</li>
          <li>Enterprise-grade security and compliance</li>
          <li>Integration with institutional authentication (SSO, Shibboleth)</li>
          <li>Clinical overview summaries with evidence grading</li>
        </ul>

        <h2>Healthcare Use Case</h2>
        <p>ClinicalKey AI is ideal for healthcare institutions that need authoritative, evidence-based answers from trusted sources. Medical librarians, researchers, and clinicians can ask clinical questions and receive answers grounded in Elsevier&apos;s curated content — including textbooks, journals, and guidelines.</p>

        <h2>Getting Started</h2>
        <ol>
          <li>Contact Elsevier for institutional access or individual subscription</li>
          <li>Access through your institution&apos;s library portal</li>
          <li>Use the AI search interface to ask clinical questions</li>
          <li>Review synthesized answers with source links</li>
          <li>Explore the full ClinicalKey content library for deep dives</li>
        </ol>

        <h2>Limitations</h2>
        <ul>
          <li>Requires institutional or individual subscription</li>
          <li>Limited to Elsevier content library scope</li>
          <li>Enterprise pricing may be prohibitive for small practices</li>
        </ul>
      </article>
    </div>
  );
}

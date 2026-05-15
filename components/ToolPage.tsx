import Link from "next/link";

interface ToolPageProps {
  name: string;
  tag: string;
  overview: string;
  features: string[];
  healthcareUse: string;
  gettingStarted: string[];
  limitations?: string[];
  website?: string;
  jsonLd?: object;
}

export default function ToolPage({ name, tag, overview, features, healthcareUse, gettingStarted, limitations, website, jsonLd }: ToolPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="mb-8">
        <Link href="/tools" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Tools Directory</Link>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-medium bg-teal-50 text-teal-700 px-3 py-1 rounded-full">{tag}</span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{name}</h1>

      {website && (
        <div className="mb-8">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Visit Official Website
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6" />
            </svg>
          </a>
        </div>
      )}

      <article className="prose-clinical">
        <h2>What is {name}?</h2>
        <p>{overview}</p>

        <h2>Key Features</h2>
        <ul>
          {features.map((f) => <li key={f}>{f}</li>)}
        </ul>

        <h2>Healthcare Use Case</h2>
        <p>{healthcareUse}</p>

        <h2>Getting Started</h2>
        <ol>
          {gettingStarted.map((s) => <li key={s}>{s}</li>)}
        </ol>

        {limitations && limitations.length > 0 && (
          <>
            <h2>Limitations</h2>
            <ul>
              {limitations.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </>
        )}
      </article>
    </div>
  );
}

export { ToolPage };

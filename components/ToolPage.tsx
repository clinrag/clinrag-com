import Link from "next/link";

interface ToolPageProps {
  name: string;
  tag: string;
  overview: string;
  features: string[];
  healthcareUse: string;
  gettingStarted: string[];
  limitations?: string[];
}

export default function ToolPage({ name, tag, overview, features, healthcareUse, gettingStarted, limitations }: ToolPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/tools" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Tools Directory</Link>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-medium bg-teal-50 text-teal-700 px-3 py-1 rounded-full">{tag}</span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Overview</h1>

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

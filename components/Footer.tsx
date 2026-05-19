import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4" aria-label="ClinRAG">
              <svg aria-hidden="true" className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-lg font-bold text-white">
                Clin<span className="text-teal-400">RAG</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              ClinRAG is a practical resource hub for clinical retrieval-augmented generation, medical AI knowledge retrieval, tool comparison, evaluation workflows, and safety-first implementation templates.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/what-is-clinical-rag" className="hover:text-teal-400 transition-colors">What is Clinical RAG?</Link></li>
              <li><Link href="/tools" className="hover:text-teal-400 transition-colors">Tools Directory</Link></li>
              <li><Link href="/guides" className="hover:text-teal-400 transition-colors">Guides</Link></li>
              <li><Link href="/templates" className="hover:text-teal-400 transition-colors">Templates</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="hover:text-teal-400 transition-colors">Guides</Link></li>
              <li><Link href="/tools" className="hover:text-teal-400 transition-colors">Tools Directory</Link></li>
              <li><Link href="/templates" className="hover:text-teal-400 transition-colors">Templates</Link></li>
              <li><Link href="/implementation-notes" className="hover:text-teal-400 transition-colors">Implementation Notes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/starter-kit" className="hover:text-teal-400 transition-colors">Free Starter Kit</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Clinical RAG Weekly</Link></li>
              <li><Link href="/sponsor" className="hover:text-teal-400 transition-colors">Sponsor</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} ClinRAG — All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            <Link href="/about" className="hover:text-teal-400 transition-colors">About</Link>
            {" · "}
            <Link href="/editorial-policy" className="hover:text-teal-400 transition-colors">Editorial Policy</Link>
            {" · "}
            <Link href="/disclaimer" className="hover:text-teal-400 transition-colors">Disclaimer</Link>
          </p>
          <p className="mt-2 text-gray-600 text-xs">
            Content is for informational purposes only and does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsor ClinRAG — Support Clinical AI Education",
  description: "Sponsor ClinRAG and reach healthcare AI builders, clinical informatics teams, and medical developers. Transparent, disclosed sponsorship with no editorial influence.",
  alternates: {
    canonical: "https://www.clinrag.com/sponsor",
  },
};

export default function Sponsor() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Sponsor ClinRAG</h1>
      <p className="text-xl text-gray-500 mb-12">Reach healthcare AI builders, clinical informatics teams, and medical developers exploring clinical RAG.</p>

      <article className="prose-clinical">
        <h2>Why Sponsor ClinRAG?</h2>
        <p>ClinRAG is a focused resource for professionals building clinical RAG systems. Our audience includes:</p>
        <ul>
          <li>Healthcare AI engineers and developers</li>
          <li>Clinical informatics teams</li>
          <li>Medical researchers and clinicians</li>
          <li>Healthcare technology decision-makers</li>
        </ul>
        <p>If your product or service serves this audience, sponsorship provides a targeted way to reach qualified professionals in the clinical RAG space.</p>

        <h2>Sponsorship Options</h2>
        <div className="not-prose space-y-6 my-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Logo Placement</h3>
            <p className="text-gray-600 text-sm mb-3">Your logo displayed in the sponsor section of relevant pages, with a link to your website.</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>Visible across the entire site</li>
              <li>Clearly marked as &quot;Sponsored&quot;</li>
              <li>Monthly placement</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Newsletter Inclusion</h3>
            <p className="text-gray-600 text-sm mb-3">Your product or service featured in the Clinical RAG Weekly newsletter.</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>Reach our subscriber base directly</li>
              <li>Clear sponsorship disclosure</li>
              <li>Includes tracking links</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Featured Tool Placement</h3>
            <p className="text-gray-600 text-sm mb-3">Your tool featured prominently in our Tools Directory with an enhanced listing.</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>Highlighted in the tools index</li>
              <li>Extended description and feature list</li>
              <li>&quot;Sponsored&quot; label clearly displayed</li>
            </ul>
          </div>
        </div>

        <h2>Editorial Independence</h2>
        <p>We maintain strict editorial independence:</p>
        <ul>
          <li>Sponsored content does not influence our editorial reviews or tool comparisons</li>
          <li>All sponsored placements are clearly disclosed with a &quot;Sponsored&quot; label</li>
          <li>We retain full control over our editorial content and opinions</li>
          <li>Our free guides, templates, and tools remain free regardless of sponsorship</li>
        </ul>
        <p>See our <Link href="/editorial-policy">Editorial Policy</Link> for full details on how we handle sponsored content.</p>

        <h2>Get Started</h2>
        <p>Interested in sponsoring ClinRAG? Contact us to discuss options that fit your goals and budget.</p>
        <div className="not-prose my-8">
          <a
            href="mailto:hello@clinrag.com?subject=Sponsorship Inquiry"
            className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Contact Us About Sponsorship
          </a>
        </div>
        <p className="text-sm text-gray-500">Or email us directly at: <a href="mailto:hello@clinrag.com" className="text-teal-600 hover:text-teal-700">hello@clinrag.com</a></p>
      </article>
    </div>
  );
}

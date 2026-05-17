import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy — ClinRAG Editorial Standards and Practices",
  description: "ClinRAG's editorial policy: how we review content for clarity, safety, and source-groundedness, and how we handle conflicts of interest and sponsored content.",
  alternates: {
    canonical: "https://www.clinrag.com/editorial-policy",
  },
};

export default function EditorialPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">Editorial Policy</h1>

      <article className="prose-clinical">
        <h2>Our Approach</h2>
        <p>ClinRAG is an independent resource hub for clinical retrieval-augmented generation. Our editorial approach is guided by the following principles:</p>

        <h2>Content Review Standards</h2>
        <p>All content published on ClinRAG is reviewed for:</p>
        <ul>
          <li><strong>Clarity:</strong> Writing should be accessible to healthcare professionals with varying levels of technical expertise.</li>
          <li><strong>Safety:</strong> Content emphasizes verification, evaluation, and human review. We avoid absolute claims about AI capabilities and always include appropriate disclaimers.</li>
          <li><strong>Source-groundedness:</strong> Factual claims should be backed by references to clinical guidelines, peer-reviewed research, or documented tool capabilities. We distinguish between documented facts and our own analysis.</li>
          <li><strong>Accuracy:</strong> We verify tool features against publicly available documentation and, where possible, hands-on testing. We note when information is based on public sources rather than direct experience.</li>
        </ul>

        <h2>Medical Advice Disclaimer</h2>
        <p>No content on ClinRAG is intended as medical advice. Our articles discuss AI tools, techniques, and workflows for healthcare knowledge retrieval — they do not provide clinical recommendations, diagnostic guidance, or treatment advice. All content should be reviewed by qualified healthcare professionals before use in clinical contexts.</p>

        <h2>Tool Reviews and Endorsements</h2>
        <p>Tool pages on ClinRAG are informational and do not constitute endorsements. We aim to provide balanced assessments that include both strengths and limitations. When reviewing a tool, we consider:</p>
        <ul>
          <li>Technical capabilities and limitations</li>
          <li>Suitability for healthcare use cases</li>
          <li>Privacy and deployment options</li>
          <li>Community and ecosystem support</li>
          <li>Cost and accessibility</li>
        </ul>
        <p>We update tool reviews as capabilities change and welcome corrections from tool developers.</p>

        <h2>Sponsored Content and Conflicts of Interest</h2>
        <p>We believe in full transparency regarding any commercial relationships:</p>
        <ul>
          <li><strong>Sponsored placements:</strong> Any sponsored tool listings, featured placements, or paid content will be clearly disclosed with a &quot;Sponsored&quot; label.</li>
          <li><strong>Affiliate links:</strong> If we use affiliate links, these will be disclosed at the point of use.</li>
          <li><strong>Editorial independence:</strong> Sponsored content does not influence our editorial reviews or tool comparisons. Our assessment of any tool is based on its technical merits, not on any commercial relationship.</li>
          <li><strong>Free tools and resources:</strong> Our guides, templates, and interactive tools are free for all users and will remain free regardless of sponsorship arrangements.</li>
        </ul>

        <h2>Corrections and Updates</h2>
        <p>We are committed to maintaining accurate and current content:</p>
        <ul>
          <li>Each article displays its last updated date</li>
          <li>We correct factual errors promptly when identified</li>
          <li>We update tool reviews as capabilities evolve</li>
          <li>Significant corrections are noted at the top of the affected article</li>
        </ul>
        <p>If you find an error in our content, please contact us at <a href="mailto:hello@clinrag.com" className="text-teal-600 hover:text-teal-700">hello@clinrag.com</a>.</p>

        <h2>Authorship</h2>
        <p>Each article is attributed to the ClinRAG Editorial Team. This reflects our collaborative approach — content may be written, reviewed, and updated by multiple team members with clinical and technical expertise.</p>

        <h2>Contact</h2>
        <p>Questions about our editorial policy? Contact us at <a href="mailto:hello@clinrag.com" className="text-teal-600 hover:text-teal-700">hello@clinrag.com</a> or visit our <Link href="/about">About page</Link>.</p>
      </article>
    </div>
  );
}

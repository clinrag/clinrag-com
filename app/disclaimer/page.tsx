import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer — ClinRAG Legal and Medical Notice",
  description: "Important medical and legal disclaimer for ClinRAG content. No content is intended as medical advice. All information is for educational purposes only.",
  alternates: {
    canonical: "https://www.clinrag.com/disclaimer",
  },
};

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">Medical Disclaimer</h1>

      <article className="prose-clinical">
        <h2>No Medical Advice</h2>
        <p>The content on ClinRAG is for <strong>informational and educational purposes only</strong>. Nothing on this website constitutes medical advice, clinical guidance, or professional healthcare recommendations.</p>
        <p>ClinRAG discusses AI tools, techniques, and workflows for healthcare knowledge retrieval. We do not diagnose conditions, recommend treatments, or provide any form of clinical decision-making guidance. All information should be verified by qualified healthcare professionals before use in clinical contexts.</p>

        <h2>AI Tool Information</h2>
        <p>Our tool reviews and comparisons are based on publicly available information and hands-on evaluation. We do not guarantee the accuracy, completeness, or currency of any information about third-party tools or services. Tool capabilities evolve rapidly — always verify current features directly with the vendor.</p>
        <p>Mention of any tool, framework, or platform on ClinRAG does not constitute an endorsement or recommendation. We provide balanced assessments that include both strengths and limitations.</p>

        <h2>No Clinical Decision-Making</h2>
        <p>ClinRAG content is not intended for use in clinical decision-making. AI-generated outputs from any RAG system should always be reviewed and verified by qualified healthcare professionals. No AI system — including those discussed on this site — should replace professional clinical judgment.</p>

        <h2>Regulatory Compliance</h2>
        <p>Mentions of regulatory frameworks (such as HIPAA, GDPR, or FDA requirements) are for informational purposes only. ClinRAG does not provide legal or regulatory advice. Compliance requirements vary by jurisdiction, institution, and use case. Consult qualified legal and compliance professionals for guidance specific to your situation.</p>

        <h2>External Links</h2>
        <p>ClinRAG contains links to external websites and tools. We are not responsible for the content, privacy practices, or availability of linked sites. Inclusion of a link does not imply endorsement of the linked content.</p>

        <h2>Accuracy and Completeness</h2>
        <p>While we strive to provide accurate and current information, we make no warranties regarding the completeness, accuracy, reliability, or suitability of the content on ClinRAG. Medical knowledge and AI technology evolve rapidly — content that is accurate today may become outdated.</p>
        <p>We update articles regularly and display the last updated date on each page. If you find outdated or incorrect information, please contact us at <a href="mailto:hello@clinrag.com" className="text-teal-600 hover:text-teal-700">hello@clinrag.com</a>.</p>

        <h2>Use at Your Own Risk</h2>
        <p>You use the information on ClinRAG at your own risk. ClinRAG, its editors, contributors, and affiliates shall not be liable for any damages or losses arising from the use of information on this website, including but not limited to errors, omissions, or inaccuracies in the content.</p>

        <h2>Contact</h2>
        <p>Questions about this disclaimer? Contact us at <a href="mailto:hello@clinrag.com" className="text-teal-600 hover:text-teal-700">hello@clinrag.com</a> or visit our <Link href="/about">About page</Link>.</p>
      </article>
    </div>
  );
}

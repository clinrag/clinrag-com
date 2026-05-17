import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ClinRAG — Clinical RAG Resources for Healthcare AI",
  description: "Learn about ClinRAG's mission, editorial approach, and the people behind this independent resource hub for clinical RAG.",
  alternates: {
    canonical: "https://www.clinrag.com/about",
  },
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">About ClinRAG</h1>

      <article className="prose-clinical">
        <h2>What Is ClinRAG?</h2>
        <p>ClinRAG is an independent resource hub focused on clinical retrieval-augmented generation, medical AI knowledge retrieval, and citation-grounded healthcare AI workflows.</p>
        <p>The site provides practical guides, tool comparisons, evaluation frameworks, and prompt templates for healthcare AI builders, clinical informatics teams, and medical developers who are exploring RAG for clinical knowledge retrieval.</p>

        <h2>Our Mission</h2>
        <p>Healthcare AI is moving fast. Large language models are increasingly used in clinical contexts — from information retrieval to documentation support. But these models are prone to hallucination, outdated knowledge, and unverifiable claims. Clinical RAG offers a safer approach: grounding AI responses in authoritative medical sources with traceable citations.</p>
        <p>ClinRAG exists to help healthcare professionals navigate this landscape. We compare tools, write practical guides, and provide safety-first templates so teams can build citation-grounded clinical RAG systems with confidence.</p>

        <h2>Who Is Behind ClinRAG?</h2>
        <p>ClinRAG is maintained by clinicians and AI builders exploring practical RAG implementation, evaluation, and safety workflows.</p>
        <p>Our team brings hands-on experience in:</p>
        <ul>
          <li><strong>Clinical medicine:</strong> Direct patient care experience in orthopedic medicine and medical education</li>
          <li><strong>Healthcare knowledge systems:</strong> Building and evaluating clinical decision support tools</li>
          <li><strong>AI engineering:</strong> Deploying RAG pipelines, embedding models, and evaluation frameworks</li>
        </ul>
        <p>We are not a large editorial team or a commercial publisher. We are practitioners writing for other practitioners — sharing what we learn as we build clinical RAG systems.</p>

        <h2>What We Offer</h2>
        <ul>
          <li><strong>Tool comparisons:</strong> In-depth reviews of RAG frameworks and platforms for healthcare use cases</li>
          <li><strong>Practical guides:</strong> Step-by-step tutorials for building, evaluating, and deploying clinical RAG systems</li>
          <li><strong>Evaluation frameworks:</strong> Checklists and testing templates for assessing clinical RAG quality and safety</li>
          <li><strong>Prompt templates:</strong> Production-ready prompt designs with built-in safety constraints</li>
          <li><strong>Interactive tools:</strong> Free online tools for readiness assessment, evaluation, and prompt generation</li>
        </ul>

        <h2>What We Do Not Offer</h2>
        <p>ClinRAG is an informational resource. We do not provide:</p>
        <ul>
          <li>Medical advice or clinical recommendations</li>
          <li>Regulatory or legal guidance</li>
          <li>Endorsements of specific vendors or products</li>
          <li>Guarantees of completeness or accuracy for any tool or technique</li>
        </ul>
        <p>All content is for educational purposes and should be reviewed by qualified healthcare professionals before use in clinical contexts.</p>

        <h2>Our Editorial Standards</h2>
        <p>Every article and review on ClinRAG follows these principles:</p>
        <ul>
          <li><strong>Source-grounded:</strong> Claims are backed by references to guidelines, research, or documented tool capabilities</li>
          <li><strong>Safety-first:</strong> We emphasize verification, evaluation, and human review at every stage</li>
          <li><strong>Transparent:</strong> Tool reviews note limitations as well as strengths; sponsored content is clearly disclosed</li>
          <li><strong>Practical:</strong> Content focuses on actionable guidance rather than abstract theory</li>
        </ul>
        <p>See our <Link href="/editorial-policy">Editorial Policy</Link> for more details.</p>

        <h2>Get in Touch</h2>
        <p>Have a question, suggestion, or want to contribute content? We&apos;d love to hear from you.</p>
        <p>Contact us at <a href="mailto:hello@clinrag.com" className="text-teal-600 hover:text-teal-700">hello@clinrag.com</a> or visit our <Link href="/contact">Contact page</Link>.</p>
        <p>For sponsorship inquiries, see our <Link href="/sponsor">Sponsor page</Link>.</p>
      </article>
    </div>
  );
}

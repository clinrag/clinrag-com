import Link from "next/link";

export default function RagVsFinetuning() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/guides" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Guides</Link>
      </div>

      <article className="prose-clinical">
        <h1>RAG vs Fine-tuning in Healthcare</h1>
        <p className="text-xl text-gray-500 mb-8">Understanding when to use RAG vs fine-tuning for medical AI applications.</p>

        <h2>The Two Approaches</h2>
        <p>In healthcare AI, there are two primary ways to give an LLM domain-specific knowledge:</p>

        <h3>Retrieval-Augmented Generation (RAG)</h3>
        <p>RAG retrieves relevant information from a knowledge base at query time and provides it as context to the LLM. The model itself is not modified — it simply receives more context.</p>

        <h3>Fine-tuning</h3>
        <p>Fine-tuning updates the model&apos;s weights by training on domain-specific data. The model internalizes patterns and knowledge from the training data.</p>

        <h2>Comparison Table</h2>

        <table>
          <thead>
            <tr><th>Criterion</th><th>RAG</th><th>Fine-tuning</th></tr>
          </thead>
          <tbody>
            <tr><td>Knowledge freshness</td><td>Instant — add new documents anytime</td><td>Requires retraining</td></tr>
            <tr><td>Hallucination risk</td><td>Lower — grounded in retrieved evidence</td><td>Higher — model still generates from memory</td></tr>
            <tr><td>Source citations</td><td>Built-in — every answer has sources</td><td>Not available</td></tr>
            <tr><td>Cost</td><td>Low — no training needed</td><td>High — GPU costs for training</td></tr>
            <tr><td>Privacy</td><td>Can be fully local</td><td>Depends on training infrastructure</td></tr>
            <tr><td>Response style/format</td><td>Controlled via prompts</td><td>Baked into model weights</td></tr>
            <tr><td>Domain language</td><td>Retrieved, not learned</td><td>Model learns medical terminology</td></tr>
            <tr><td>Auditability</td><td>High — traceable to sources</td><td>Low — opaque weight changes</td></tr>
          </tbody>
        </table>

        <h2>When to Use RAG in Healthcare</h2>
        <ul>
          <li><strong>Evidence-based answers needed:</strong> Clinical decisions require citations to guidelines</li>
          <li><strong>Knowledge changes frequently:</strong> Drug approvals, updated guidelines, new research</li>
          <li><strong>Regulatory compliance:</strong> You need an audit trail of which sources informed each answer</li>
          <li><strong>Multiple knowledge domains:</strong> Different specialties require different document sets</li>
          <li><strong>Budget constraints:</strong> RAG is significantly cheaper than fine-tuning</li>
        </ul>

        <h2>When to Use Fine-tuning in Healthcare</h2>
        <ul>
          <li><strong>Specific output format:</strong> You need consistent structured outputs (SOAP notes, discharge summaries)</li>
          <li><strong>Domain language mastery:</strong> The model needs to understand medical abbreviations and jargon</li>
          <li><strong>Style adaptation:</strong> Matching a hospital&apos;s documentation style</li>
          <li><strong>Latency-critical:</strong> Fine-tuned models don&apos;t need retrieval, so responses are faster</li>
        </ul>

        <h2>The Best Approach: Both</h2>
        <p>In practice, the most effective clinical AI systems combine both approaches:</p>
        <ol>
          <li><strong>Fine-tune</strong> the model for medical language understanding and output formatting</li>
          <li><strong>Add RAG</strong> on top for evidence-based, up-to-date answers with citations</li>
        </ol>
        <p>This gives you the language mastery of fine-tuning with the factual grounding and auditability of RAG.</p>

        <h2>Recommendation</h2>
        <p>For most healthcare RAG projects, start with RAG alone. It&apos;s cheaper, faster to deploy, and provides the evidence-based responses that clinical users expect. Add fine-tuning later if you need better output formatting or domain language understanding.</p>
        <p>Ready to build? See our <Link href="/guides/build-medical-rag">Build Guide</Link> for step-by-step instructions.</p>
      </article>
    </div>
  );
}

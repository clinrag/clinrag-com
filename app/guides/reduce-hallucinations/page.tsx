import Link from "next/link";

export default function ReduceHallucinations() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/guides" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Guides</Link>
      </div>

      <article className="prose-clinical">
        <h1>How to Reduce Hallucinations in Medical AI</h1>
        <p className="text-xl text-gray-500 mb-8">Practical techniques to minimize hallucinations when building clinical RAG systems.</p>

        <h2>What Are Hallucinations in Medical AI?</h2>
        <p>In the context of medical RAG, hallucinations occur when the LLM generates information that is not present in the retrieved documents or contradicts established medical knowledge. Examples include:</p>
        <ul>
          <li>Inventing drug names or dosages that don&apos;t exist</li>
          <li>Citing non-existent studies or guidelines</li>
          <li>Making up statistics about treatment outcomes</li>
          <li>Attributing claims to the wrong source</li>
          <li>Combining facts from different contexts incorrectly</li>
        </ul>

        <h2>Why Hallucinations Are Especially Dangerous in Healthcare</h2>
        <p>A hallucinated drug dosage could lead to patient harm. A fabricated clinical guideline could result in inappropriate treatment. In healthcare, hallucinations aren&apos;t just annoying — they are potentially dangerous. This makes hallucination reduction the single most important quality concern for medical RAG systems.</p>

        <h2>Technique 1: Improve Retrieval Quality</h2>
        <p>The best defense against hallucinations is ensuring the LLM has the right context:</p>
        <ul>
          <li><strong>Increase top-k:</strong> Retrieve more documents (5-10 instead of 3) for medical queries</li>
          <li><strong>Use hybrid search:</strong> Combine semantic search with keyword matching (BM25) for medical terminology</li>
          <li><strong>Filter by source quality:</strong> Prioritize peer-reviewed sources over general medical content</li>
          <li><strong>Metadata filtering:</strong> Filter by medical specialty, date, and evidence level</li>
        </ul>

        <h2>Technique 2: System Prompt Design</h2>
        <p>Craft prompts that explicitly discourage fabrication:</p>
        <pre>{`You are a clinical assistant. Answer ONLY using the provided medical context.
If the context does not contain sufficient information to answer the question,
respond with: "The available medical literature does not provide sufficient
information to answer this question."

Do NOT:
- Invent drug names, dosages, or treatment protocols
- Cite studies not present in the context
- Make statistical claims without supporting evidence
- Provide medical advice

Always cite which source document supports each claim.`}</pre>

        <h2>Technique 3: Constrain Generation</h2>
        <ul>
          <li><strong>Lower temperature:</strong> Use temperature 0.1 or lower for factual medical responses</li>
          <li><strong>Logit bias:</strong> Penalize hedging language that can mask hallucinations</li>
          <li><strong>Max tokens:</strong> Limit response length to reduce drift from source material</li>
          <li><strong>Structured output:</strong> Force JSON output with required fields for citations</li>
        </ul>

        <h2>Technique 4: Self-Consistency Checks</h2>
        <p>Run the same query multiple times and check for consistency. If the model gives different answers with the same context, flag it for human review.</p>

        <h2>Technique 5: Fact Verification Pipeline</h2>
        <p>Add a second RAG pass that verifies the generated answer:</p>
        <ol>
          <li>Generate answer from retrieved context</li>
          <li>Extract key claims from the answer</li>
          <li>Verify each claim against the source documents</li>
          <li>Flag unverifiable claims for human review</li>
        </ol>

        <h2>Technique 6: Use Medical-Specific Models</h2>
        <p>Models fine-tuned on medical text are less likely to hallucinate medical facts:</p>
        <ul>
          <li><strong>Meditron:</strong> Medical LLM from EPFL</li>
          <li><strong>BioMistral:</strong> Biomedical-focused Mistral variant</li>
          <li><strong>ClinicalBERT:</strong> Fine-tuned on clinical notes</li>
        </ul>

        <h2>Technique 7: Confidence Scoring</h2>
        <p>Add explicit confidence levels to responses:</p>
        <pre>{`Based on the retrieved clinical guidelines:
Answer: First-line treatment is ACE inhibitors.
Confidence: HIGH (supported by 3 guidelines in context)
Sources: AHA 2023, NICE 2022, ESC 2023

Note: This does not constitute medical advice.`}</pre>

        <h2>Testing for Hallucinations</h2>
        <p>Regularly test your system with:</p>
        <ul>
          <li><strong>Known questions:</strong> Questions with documented correct answers</li>
          <li><strong>Trap questions:</strong> Questions designed to elicit hallucinations (e.g., asking about non-existent drugs)</li>
          <li><strong>Out-of-scope questions:</strong> Questions outside the knowledge base to test refusal behavior</li>
        </ul>

        <p>See our <Link href="/guides/evaluation-checklist">Evaluation Checklist</Link> for a complete testing framework.</p>
      </article>
    </div>
  );
}

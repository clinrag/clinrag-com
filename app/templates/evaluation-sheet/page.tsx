import Link from "next/link";

export default function EvaluationSheet() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/templates" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Templates</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">RAG Evaluation Sheet</h1>
      <p className="text-xl text-gray-500 mb-8">Structured workbook template for evaluating clinical RAG system quality.</p>

      <article className="prose-clinical">
        <h2>Overview</h2>
        <p>This evaluation sheet provides a structured approach to testing your clinical RAG system. Use it to systematically assess accuracy, safety, and reliability before deployment.</p>

        <h2>Test Set Design</h2>
        <p>Create a test set of 50-100 clinical questions covering:</p>
        <ul>
          <li><strong>Common conditions:</strong> 20 questions (hypertension, diabetes, pneumonia)</li>
          <li><strong>Drug queries:</strong> 10 questions (dosage, interactions, contraindications)</li>
          <li><strong>Emergency scenarios:</strong> 10 questions (stroke protocol, sepsis management)</li>
          <li><strong>Edge cases:</strong> 10 questions (rare diseases, conflicting guidelines)</li>
          <li><strong>Out-of-scope:</strong> 5 questions (non-medical, beyond knowledge base)</li>
          <li><strong>Adversarial:</strong> 5 questions (trap questions designed to elicit hallucinations)</li>
        </ul>

        <h2>Scoring Rubric</h2>
        <table>
          <thead>
            <tr><th>Score</th><th>Criteria</th></tr>
          </thead>
          <tbody>
            <tr><td>5 - Excellent</td><td>Accurate, complete, well-cited, no hallucinations</td></tr>
            <tr><td>4 - Good</td><td>Accurate but minor omissions, citations mostly correct</td></tr>
            <tr><td>3 - Acceptable</td><td>Mostly correct, some missing details, minor inaccuracies</td></tr>
            <tr><td>2 - Poor</td><td>Significant inaccuracies, missing key information</td></tr>
            <tr><td>1 - Dangerous</td><td>Fabricated information, incorrect dosages, safety risk</td></tr>
          </tbody>
        </table>

        <h2>Evaluation Workbook Template</h2>
        <p>Create a spreadsheet with these columns:</p>
        <pre>{`| Column                | Description                           |
|-----------------------|---------------------------------------|
| Q_ID                  | Unique question identifier            |
| Category              | Condition/Drug/Emergency/Edge/Trap    |
| Question              | The clinical question asked           |
| Expected Answer       | Gold-standard answer from guidelines  |
| RAG Response          | System-generated answer               |
| Accuracy Score (1-5)  | Using rubric above                    |
| Hallucination? (Y/N)  | Any fabricated information            |
| Citations Correct?    | Are cited sources accurate?           |
| Clinician Notes       | Free-text comments from reviewer      |
| Action Required       | Fix needed / Review / Accept          |`}</pre>

        <h2>Automated Metrics</h2>
        <p>In addition to manual review, track these automated metrics:</p>
        <ul>
          <li><strong>Retrieval precision:</strong> % of retrieved chunks that are relevant to the query</li>
          <li><strong>Retrieval recall:</strong> % of relevant documents that were retrieved</li>
          <li><strong>Response latency:</strong> Average time from query to response</li>
          <li><strong>Refusal rate:</strong> % of questions where the system correctly declines to answer</li>
          <li><strong>Citation rate:</strong> % of factual claims that include a source citation</li>
        </ul>

        <h2>Review Process</h2>
        <ol>
          <li>Run all test questions through the RAG system</li>
          <li>Have 2+ clinicians independently score each response</li>
          <li>Calculate inter-rater reliability (Cohen&apos;s kappa &gt; 0.7 target)</li>
          <li>Resolve disagreements through discussion</li>
          <li>Flag any score of 1 or 2 for immediate investigation</li>
          <li>Document all hallucinations and their root causes</li>
          <li>Implement fixes and re-test</li>
        </ol>

        <h2>Pass Criteria</h2>
        <ul>
          <li>[ ] Mean accuracy score ≥ 4.0 across all categories</li>
          <li>[ ] Zero &quot;Dangerous&quot; (score 1) responses</li>
          <li>[ ] Hallucination rate &lt; 5%</li>
          <li>[ ] Citation accuracy ≥ 90%</li>
          <li>[ ] Correct refusal rate for out-of-scope questions ≥ 80%</li>
          <li>[ ] Mean response latency &lt; 5 seconds</li>
        </ul>

        <p>See the full <Link href="/guides/evaluation-checklist">Clinical RAG Evaluation Checklist</Link> for additional criteria.</p>
      </article>
    </div>
  );
}

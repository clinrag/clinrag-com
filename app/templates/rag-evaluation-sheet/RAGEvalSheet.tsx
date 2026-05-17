"use client";

import Link from "next/link";

const csvHeaders = [
  "Question ID",
  "Question",
  "Category",
  "Expected Source",
  "Retrieved Source",
  "Answer",
  "Citation Present (Y/N)",
  "Unsupported Claim (Y/N)",
  "Clinical Risk Level (Low/Medium/High)",
  "Reviewer Notes",
  "Pass/Fail",
];

const templateQuestions = [
  ["Q001", "What is the first-line treatment for hypertension in adults?", "Clinical guideline", "JNC 8 / AHA 2023", "", "", "Y", "N", "", "", ""],
  ["Q002", "What are the contraindications for metformin?", "Drug database", "FDA prescribing info", "", "", "Y", "N", "", "", ""],
  ["Q003", "What is the recommended antibiotic for community-acquired pneumonia?", "Clinical guideline", "IDSA/ATS 2019", "", "", "Y", "N", "", "", ""],
  ["Q004", "What is the dosing schedule for insulin glargine?", "Drug database", "Prescribing information", "", "", "Y", "N", "", "", ""],
  ["Q005", "What are the red flag symptoms for stroke?", "Clinical guideline", "AHA/ASA guidelines", "", "", "Y", "N", "", "", ""],
];

function generateCSV(): string {
  const rows: string[][] = [csvHeaders];
  for (const q of templateQuestions) {
    rows.push(q);
  }
  for (let i = 6; i <= 50; i++) {
    rows.push([`Q${String(i).padStart(3, "0")}`, "", "", "", "", "", "", "", "", "", ""]);
  }
  return rows.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
}

function downloadCSV() {
  const csv = generateCSV();
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "clinical-rag-evaluation-sheet.csv";
  link.click();
  URL.revokeObjectURL(url);
}

export default function RAGEvaluationSheet() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/templates" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Templates</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">RAG Evaluation Sheet</h1>
      <p className="text-xl text-gray-500 mb-12">Download a structured testing workbook for evaluating clinical RAG system accuracy, citation quality, and safety.</p>

      {/* Download CTA */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white text-center mb-12">
        <h2 className="text-2xl font-bold mb-3">Download Evaluation Sheet</h2>
        <p className="text-teal-100 mb-6 max-w-lg mx-auto">
          A structured CSV template with 50 rows for testing clinical RAG accuracy, citations, hallucinations, and safety.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="/downloads/clinical-rag-evaluation-sheet.csv"
            download
            className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CSV
          </a>
          <button
            onClick={downloadCSV}
            className="bg-teal-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-800 transition-colors inline-flex items-center gap-2"
          >
            Generate Fresh CSV
          </button>
        </div>
        <p className="text-teal-200 text-sm mt-4">50 rows with 5 example questions included</p>
      </div>

      {/* Sheet Contents */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Sheet Fields</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 font-semibold text-gray-700">Field</th>
                <th className="text-left px-3 py-2 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Question ID", "Unique identifier for each test question (Q001–Q050)"],
                ["Question", "The clinical question asked to the RAG system"],
                ["Category", "Question type: Clinical guideline, Drug query, Emergency, Edge case, Adversarial"],
                ["Expected Source", "The authoritative source document that should be retrieved"],
                ["Retrieved Source", "The actual source document returned by the system"],
                ["Answer", "The RAG system&apos;s generated response"],
                ["Citation Present (Y/N)", "Whether the answer includes source citations"],
                ["Unsupported Claim (Y/N)", "Whether the answer contains claims not supported by retrieved sources"],
                ["Clinical Risk Level", "Low / Medium / High — severity of potential harm if answer is incorrect"],
                ["Reviewer Notes", "Free-text comments from the clinician reviewer"],
                ["Pass/Fail", "Overall assessment for this test question"],
              ].map(([field, desc]) => (
                <tr key={field}>
                  <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">{field}</td>
                  <td className="px-3 py-2 text-gray-600">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* How to Use */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">How to Use This Sheet</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-600">
          <li>Open the CSV in a spreadsheet application (Excel, Google Sheets, or Numbers).</li>
          <li>Review and customize the 5 example questions, or replace them with your own clinical test set.</li>
          <li>Run each question through your RAG system and record the response.</li>
          <li>Have a clinician independently score each response for accuracy, citation quality, and safety.</li>
          <li>Track Pass/Fail rates by category to identify system weaknesses.</li>
          <li>Repeat evaluation after each system change or knowledge base update.</li>
        </ol>
      </div>

      {/* Related Resources */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h2>
        <div className="space-y-3">
          <Link href="/guides/clinical-rag-evaluation-checklist" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium group">
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Clinical RAG Evaluation Checklist
          </Link>
          <Link href="/guides/evaluate-medical-rag-answers" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium group">
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            How to Evaluate Medical RAG Answers
          </Link>
          <Link href="/templates/rag-prompt" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium group">
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Clinical RAG Prompt Template
          </Link>
        </div>
      </div>
    </div>
  );
}

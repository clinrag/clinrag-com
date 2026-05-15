import Link from "next/link";

const templates = [
  {
    title: "Clinical RAG Prompt Template",
    desc: "Production-ready prompt templates for medical RAG systems with built-in safety constraints",
    href: "/templates/rag-prompt",
    type: "Prompt",
    format: "Text",
  },
  {
    title: "Medical PDF Preparation Checklist",
    desc: "Step-by-step checklist for preparing medical documents for RAG ingestion",
    href: "/templates/pdf-checklist",
    type: "Checklist",
    format: "PDF",
  },
  {
    title: "RAG Evaluation Sheet",
    desc: "Structured workbook template for evaluating clinical RAG system quality",
    href: "/templates/evaluation-sheet",
    type: "Workbook",
    format: "Spreadsheet",
  },
];

export default function TemplatesIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Templates</h1>
        <p className="text-xl text-gray-500">
          Ready-to-use templates, checklists, and evaluation sheets for your clinical RAG project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Link
            key={template.href}
            href={template.href}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group"
          >
            <div className="flex gap-2 mb-4">
              <span className="text-xs font-medium bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full">{template.type}</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded">{template.format}</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">{template.title}</h2>
            <p className="mt-2 text-gray-500 text-sm">{template.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

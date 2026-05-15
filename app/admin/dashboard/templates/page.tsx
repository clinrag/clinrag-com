"use client";

import { useEffect, useState } from "react";

interface Template {
  id: string;
  title: string;
  desc: string;
  slug: string;
  content: string;
  type: string;
  format: string;
  created_at: string;
}

export default function TemplatesManager() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Template | null>(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: "", desc: "", slug: "", content: "", type: "Template", format: "Text" });

  useEffect(() => { loadTemplates(); }, []);

  async function loadTemplates() {
    try {
      const res = await fetch("/api/templates");
      if (res.ok) setTemplates(await res.json());
    } catch { /* */ }
    setLoading(false);
  }

  function resetForm() {
    setForm({ title: "", desc: "", slug: "", content: "", type: "Template", format: "Text" });
    setEditing(null);
    setShowForm(false);
  }

  function startEdit(t: Template) {
    setEditing(t);
    setForm({ title: t.title, desc: t.desc, slug: t.slug, content: t.content, type: t.type, format: t.format });
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { id: editing?.id || Date.now().toString(), ...form, created_at: editing?.created_at || new Date().toISOString() };
    await fetch("/api/templates", { method: editing ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    resetForm();
    loadTemplates();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this template?")) return;
    await fetch(`/api/templates?id=${id}`, { method: "DELETE" });
    loadTemplates();
  }

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Templates Management</h1>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700">+ Add Template</button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">{editing ? "Edit Template" : "Add Template"}</h2>
              <button onClick={resetForm} className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full px-3 py-2 border rounded-lg">
                    <option>Template</option><option>Checklist</option><option>Workbook</option><option>Prompt</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
                  <select value={form.format} onChange={(e) => setForm({ ...form, format: e.target.value })} className="w-full px-3 py-2 border rounded-lg">
                    <option>Text</option><option>PDF</option><option>Spreadsheet</option><option>JSON</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content (HTML/Markdown)</label>
                <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="w-full px-3 py-2 border rounded-lg font-mono text-sm" rows={10} />
              </div>
              <div className="flex gap-3 justify-end">
                <button type="button" onClick={resetForm} className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700">{editing ? "Update" : "Create"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Title</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Type</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Format</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((t) => (
              <tr key={t.id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{t.title}</td>
                <td className="px-4 py-3"><span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded text-xs">{t.type}</span></td>
                <td className="px-4 py-3"><span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">{t.format}</span></td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => startEdit(t)} className="text-purple-600 hover:text-purple-700 mr-3 text-sm">Edit</button>
                  <button onClick={() => handleDelete(t.id)} className="text-red-600 hover:text-red-700 text-sm">Delete</button>
                </td>
              </tr>
            ))}
            {templates.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-500">No templates yet. Click &quot;+ Add Template&quot; to create one.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

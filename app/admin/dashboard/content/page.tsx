"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Tool {
  id: string;
  name: string;
  tag: string;
  description: string;
  features: string[];
  healthcare_use: string;
  getting_started: string[];
  limitations: string[];
  slug: string;
  created_at: string;
}

export default function ToolsManager() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Tool | null>(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    tag: "",
    description: "",
    features: "",
    healthcare_use: "",
    getting_started: "",
    limitations: "",
    slug: "",
  });

  useEffect(() => { loadTools(); }, []);

  async function loadTools() {
    try {
      const res = await fetch("/api/tools");
      if (res.ok) setTools(await res.json());
    } catch { /* */ }
    setLoading(false);
  }

  function resetForm() {
    setForm({ name: "", tag: "", description: "", features: "", healthcare_use: "", getting_started: "", limitations: "", slug: "" });
    setEditing(null);
    setShowForm(false);
  }

  function startEdit(tool: Tool) {
    setEditing(tool);
    setForm({
      name: tool.name,
      tag: tool.tag,
      description: tool.description,
      features: tool.features.join("\n"),
      healthcare_use: tool.healthcare_use,
      getting_started: tool.getting_started.join("\n"),
      limitations: tool.limitations?.join("\n") || "",
      slug: tool.slug,
    });
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      id: editing?.id || Date.now().toString(),
      name: form.name,
      tag: form.tag,
      description: form.description,
      features: form.features.split("\n").filter(Boolean),
      healthcare_use: form.healthcare_use,
      getting_started: form.getting_started.split("\n").filter(Boolean),
      limitations: form.limitations.split("\n").filter(Boolean),
      slug: form.slug || form.name.toLowerCase().replace(/\\s+/g, "-"),
      created_at: editing?.created_at || new Date().toISOString(),
    };

    await fetch("/api/tools", {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    resetForm();
    loadTools();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this tool?")) return;
    await fetch(`/api/tools?id=${id}`, { method: "DELETE" });
    loadTools();
  }

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tools Management</h1>
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
        >
          + Add Tool
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">{editing ? "Edit Tool" : "Add Tool"}</h2>
              <button onClick={resetForm} className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 border rounded-lg" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tag</label>
                  <input value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })} className="w-full px-3 py-2 border rounded-lg" placeholder="Open Source, SaaS, etc." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 border rounded-lg" placeholder="tool-slug" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 border rounded-lg" rows={3} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Features (one per line)</label>
                <textarea value={form.features} onChange={(e) => setForm({ ...form, features: e.target.value })} className="w-full px-3 py-2 border rounded-lg" rows={4} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Healthcare Use</label>
                <textarea value={form.healthcare_use} onChange={(e) => setForm({ ...form, healthcare_use: e.target.value })} className="w-full px-3 py-2 border rounded-lg" rows={2} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Getting Started (one per line)</label>
                <textarea value={form.getting_started} onChange={(e) => setForm({ ...form, getting_started: e.target.value })} className="w-full px-3 py-2 border rounded-lg" rows={4} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Limitations (one per line)</label>
                <textarea value={form.limitations} onChange={(e) => setForm({ ...form, limitations: e.target.value })} className="w-full px-3 py-2 border rounded-lg" rows={2} />
              </div>
              <div className="flex gap-3 justify-end">
                <button type="button" onClick={resetForm} className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">{editing ? "Update" : "Create"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Tools List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Name</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Tag</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Slug</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool.id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{tool.name}</td>
                <td className="px-4 py-3">
                  <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded text-xs">{tool.tag}</span>
                </td>
                <td className="px-4 py-3 text-gray-500">{tool.slug}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => startEdit(tool)} className="text-teal-600 hover:text-teal-700 mr-3 text-sm">Edit</button>
                  <button onClick={() => handleDelete(tool.id)} className="text-red-600 hover:text-red-700 text-sm">Delete</button>
                </td>
              </tr>
            ))}
            {tools.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-500">No tools yet. Click &quot;+ Add Tool&quot; to create one.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

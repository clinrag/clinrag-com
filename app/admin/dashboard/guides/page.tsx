"use client";

import { useEffect, useState } from "react";

interface Guide {
  id: string;
  title: string;
  desc: string;
  slug: string;
  content: string;
  icon: string;
  difficulty: string;
  readTime: string;
  created_at: string;
}

export default function GuidesManager() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Guide | null>(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: "", desc: "", slug: "", content: "", icon: "📖", difficulty: "Intermediate", readTime: "10 min" });

  useEffect(() => { loadGuides(); }, []);

  async function loadGuides() {
    try {
      const res = await fetch("/api/guides");
      if (res.ok) setGuides(await res.json());
    } catch { /* */ }
    setLoading(false);
  }

  function resetForm() {
    setForm({ title: "", desc: "", slug: "", content: "", icon: "📖", difficulty: "Intermediate", readTime: "10 min" });
    setEditing(null);
    setShowForm(false);
  }

  function startEdit(guide: Guide) {
    setEditing(guide);
    setForm({ title: guide.title, desc: guide.desc, slug: guide.slug, content: guide.content, icon: guide.icon, difficulty: guide.difficulty, readTime: guide.readTime });
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { id: editing?.id || Date.now().toString(), ...form, created_at: editing?.created_at || new Date().toISOString() };
    await fetch("/api/guides", { method: editing ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    resetForm();
    loadGuides();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this guide?")) return;
    await fetch(`/api/guides?id=${id}`, { method: "DELETE" });
    loadGuides();
  }

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Guides Management</h1>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">+ Add Guide</button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">{editing ? "Edit Guide" : "Add Guide"}</h2>
              <button onClick={resetForm} className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                  <input value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                  <select value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value })} className="w-full px-3 py-2 border rounded-lg">
                    <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Read Time</label>
                  <input value={form.readTime} onChange={(e) => setForm({ ...form, readTime: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
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
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">{editing ? "Update" : "Create"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Icon</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Title</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Difficulty</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {guides.map((g) => (
              <tr key={g.id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="px-4 py-3 text-xl">{g.icon}</td>
                <td className="px-4 py-3 font-medium">{g.title}</td>
                <td className="px-4 py-3"><span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">{g.difficulty}</span></td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => startEdit(g)} className="text-blue-600 hover:text-blue-700 mr-3 text-sm">Edit</button>
                  <button onClick={() => handleDelete(g.id)} className="text-red-600 hover:text-red-700 text-sm">Delete</button>
                </td>
              </tr>
            ))}
            {guides.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-500">No guides yet. Click &quot;+ Add Guide&quot; to create one.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

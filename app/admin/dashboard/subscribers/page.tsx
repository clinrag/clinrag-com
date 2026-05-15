"use client";

import { useEffect, useState } from "react";

interface Subscriber {
  id: string;
  email: string;
  created_at: string;
}

export default function SubscribersManager() {
  const [subs, setSubs] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadSubs(); }, []);

  async function loadSubs() {
    try {
      const res = await fetch("/api/subscribers");
      if (res.ok) setSubs(await res.json());
    } catch { /* */ }
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Remove this subscriber?")) return;
    await fetch(`/api/subscribers?id=${id}`, { method: "DELETE" });
    loadSubs();
  }

  async function handleExport() {
    const csv = ["Email,Subscribed At", ...subs.map((s) => `${s.email},${s.created_at}`)].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "subscribers.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Newsletter Subscribers</h1>
        <div className="flex gap-3">
          <button onClick={handleExport} className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">Export CSV</button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Email</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Subscribed</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subs.map((s) => (
              <tr key={s.id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{s.email}</td>
                <td className="px-4 py-3 text-gray-500">{new Date(s.created_at).toLocaleDateString()}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => handleDelete(s.id)} className="text-red-600 hover:text-red-700 text-sm">Remove</button>
                </td>
              </tr>
            ))}
            {subs.length === 0 && (
              <tr><td colSpan={3} className="px-4 py-8 text-center text-gray-500">No subscribers yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-500">Total: {subs.length} subscriber{subs.length !== 1 ? "s" : ""}</p>
    </div>
  );
}

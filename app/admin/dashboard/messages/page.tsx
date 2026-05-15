"use client";

import { useEffect, useState } from "react";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  read: boolean;
}

export default function MessagesManager() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selected, setSelected] = useState<Message | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadMessages(); }, []);

  async function loadMessages() {
    try {
      const res = await fetch("/api/messages");
      if (res.ok) setMessages(await res.json());
    } catch { /* */ }
    setLoading(false);
  }

  async function markRead(msg: Message) {
    if (!msg.read) {
      await fetch(`/api/messages?id=${msg.id}`, { method: "PATCH" });
    }
    setSelected(msg);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this message?")) return;
    await fetch(`/api/messages?id=${id}`, { method: "DELETE" });
    if (selected?.id === id) setSelected(null);
    loadMessages();
  }

  if (loading) return <p className="text-gray-500">Loading...</p>;

  const unread = messages.filter((m) => !m.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Contact Messages
          {unread > 0 && <span className="ml-2 bg-red-100 text-red-600 text-sm px-2 py-0.5 rounded-full">{unread} unread</span>}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Message List */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="divide-y max-h-[600px] overflow-y-auto">
            {messages.map((msg) => (
              <button
                key={msg.id}
                onClick={() => markRead(msg)}
                className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${selected?.id === msg.id ? "bg-teal-50" : ""} ${!msg.read ? "bg-yellow-50/50" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{msg.name}</span>
                  <span className="text-xs text-gray-400">{new Date(msg.created_at).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1 truncate">{msg.message}</p>
                <p className="text-xs text-gray-400 mt-1">{msg.email}</p>
              </button>
            ))}
            {messages.length === 0 && (
              <div className="p-8 text-center text-gray-500">No messages yet.</div>
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          {selected ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold">{selected.name}</h2>
                  <p className="text-sm text-gray-500">{selected.email}</p>
                </div>
                <div className="flex gap-2">
                  <a href={`mailto:${selected.email}`} className="text-sm text-teal-600 hover:text-teal-700">Reply</a>
                  <button onClick={() => handleDelete(selected.id)} className="text-sm text-red-600 hover:text-red-700">Delete</button>
                </div>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-700 whitespace-pre-wrap">{selected.message}</p>
              </div>
              <p className="text-xs text-gray-400 mt-4">Received: {new Date(selected.created_at).toLocaleString()}</p>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              Select a message to view
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardHome() {
  const [stats, setStats] = useState({
    tools: 0,
    guides: 0,
    templates: 0,
    subscribers: 0,
    messages: 0,
    unread: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const [tools, guides, templates, subs, msgs] = await Promise.all([
          fetch("/api/tools").then((r) => r.json()),
          fetch("/api/guides").then((r) => r.json()),
          fetch("/api/templates").then((r) => r.json()),
          fetch("/api/subscribers").then((r) => r.json()),
          fetch("/api/messages").then((r) => r.json()),
        ]);
        setStats({
          tools: tools.length || 0,
          guides: guides.length || 0,
          templates: templates.length || 0,
          subscribers: subs.length || 0,
          messages: msgs.length || 0,
          unread: msgs.filter((m: { read: boolean }) => !m.read).length || 0,
        });
      } catch (e) {
        // silently fail
      }
    }
    loadStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard label="Tools" value={stats.tools} href="/admin/dashboard/content" color="teal" />
        <StatCard label="Guides" value={stats.guides} href="/admin/dashboard/guides" color="blue" />
        <StatCard label="Templates" value={stats.templates} href="/admin/dashboard/templates" color="purple" />
        <StatCard label="Subscribers" value={stats.subscribers} href="/admin/dashboard/subscribers" color="green" />
        <StatCard label="Messages" value={stats.messages} href="/admin/dashboard/messages" color="orange" />
        <StatCard label="Unread" value={stats.unread} href="/admin/dashboard/messages" color="red" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/dashboard/content" className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors">
            + Add Tool
          </Link>
          <Link href="/admin/dashboard/guides" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            + Add Guide
          </Link>
          <Link href="/admin/dashboard/templates" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
            + Add Template
          </Link>
          <a href="/" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, href, color }: { label: string; value: number; href: string; color: string }) {
  const colorMap: Record<string, string> = {
    teal: "bg-teal-50 text-teal-600",
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <Link href={href} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${colorMap[color] || colorMap.teal} mb-3`}>
        <span className="text-lg font-bold">{value}</span>
      </div>
      <p className="text-gray-600 text-sm">{label}</p>
    </Link>
  );
}

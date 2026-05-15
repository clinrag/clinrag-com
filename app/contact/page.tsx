"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState("");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactMsg, setContactMsg] = useState("");

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNewsletterMsg("");
    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: Date.now().toString(), email: newsletterEmail, created_at: new Date().toISOString() }),
      });
      if (res.ok) {
        setNewsletterMsg("success");
        setNewsletterEmail("");
      } else {
        setNewsletterMsg("error");
      }
    } catch {
      setNewsletterMsg("error");
    }
  }

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setContactMsg("");
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: Date.now().toString(), ...contactForm, created_at: new Date().toISOString(), read: false }),
      });
      if (res.ok) {
        setContactMsg("success");
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setContactMsg("error");
      }
    } catch {
      setContactMsg("error");
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Newsletter, Contact & Sponsor</h1>
      <p className="text-xl text-gray-500 mb-12">Stay connected with the ClinRAG community.</p>

      {/* Newsletter */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-3">ClinRAG Newsletter</h2>
          <p className="text-teal-100 mb-6 max-w-lg">
            Get the latest tools, research, and best practices in clinical RAG delivered to your inbox monthly.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          {newsletterMsg === "success" && <p className="text-green-200 text-sm mt-3 font-medium">Subscribed successfully! You will receive updates via email.</p>}
          {newsletterMsg === "error" && <p className="text-red-200 text-sm mt-3 font-medium">Subscription failed. Please try again or email us at <a href="mailto:hello@clinrag.com?subject=Newsletter Subscription" className="underline">hello@clinrag.com</a>.</p>}
          {!newsletterMsg && <p className="text-teal-200 text-sm mt-3">No spam. Unsubscribe anytime.</p>}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <p className="text-gray-600 mb-6">
            Have a question, suggestion, or want to contribute content? We&apos;d love to hear from you.
          </p>
          <form onSubmit={handleContactSubmit} className="space-y-4 max-w-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                id="name"
                type="text"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Send Message
            </button>
          </form>
          {contactMsg === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
              <p className="text-green-800 font-medium">Message sent successfully!</p>
              <p className="text-green-600 text-sm mt-1">We will get back to you within 1-2 business days.</p>
            </div>
          )}
          {contactMsg === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
              <p className="text-red-800 font-medium">Failed to send message.</p>
              <p className="text-red-600 text-sm mt-1">Please email us directly at <a href="mailto:hello@clinrag.com" className="text-teal-600 hover:text-teal-700 underline">hello@clinrag.com</a>.</p>
            </div>
          )}
        </div>
      </section>

      {/* Sponsor */}
      <section id="sponsor">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sponsor ClinRAG</h2>
        <div className="bg-gray-900 rounded-2xl p-8 text-white">
          <div className="md:flex md:gap-8 md:items-start">
            <div className="md:flex-1">
              <h3 className="text-xl font-semibold mb-3">Support Clinical AI Education</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                ClinRAG is a free resource for healthcare professionals building RAG systems.
                Sponsorship helps us create more guides, maintain our tools directory, and
                expand our template library.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Logo placement on all pages</p>
                    <p className="text-gray-500 text-sm">Visibility across the entire site</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Newsletter inclusion</p>
                    <p className="text-gray-500 text-sm">Reach our subscriber base directly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Featured tool/guide placement</p>
                    <p className="text-gray-500 text-sm">Highlight your product in our directory</p>
                  </div>
                </div>
              </div>
              <a
                href="mailto:hello@clinrag.com?subject=Sponsorship Inquiry"
                className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import type { FormEvent } from "react";
import { site } from "@/data/site";

export default function ContactForm() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "");
    const email = String(values.get("email") ?? "");
    const message = String(values.get("message") ?? "");
    const subject = `Portfolio enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <label className="block text-sm">
        <span className="mb-2 block text-ink/60">Name</span>
        <input
          name="name"
          autoComplete="name"
          required
          className="w-full rounded-lg border border-ink/15 bg-transparent px-4 py-3 outline-none focus:border-accent"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-2 block text-ink/60">Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-lg border border-ink/15 bg-transparent px-4 py-3 outline-none focus:border-accent"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-2 block text-ink/60">Message</span>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full resize-y rounded-lg border border-ink/15 bg-transparent px-4 py-3 outline-none focus:border-accent"
        />
      </label>

      <button
        type="submit"
        className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-80"
      >
        Send message
      </button>
    </form>
  );
}
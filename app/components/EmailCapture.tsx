"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to your mailing list / backend
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-[14px] text-[#b2b2b2] tracking-[0.35px]">
        You&apos;re on the list — we&apos;ll let you know when it&apos;s ready.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-sm">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-4 py-2 rounded-[9999px] bg-[rgba(212,212,212,0.1)] border border-[#e5e5e5]/20 text-[#e5e5e5] placeholder-[#686868] text-[14px] tracking-[0.35px] outline-none focus:border-[#e5e5e5]/60 transition-colors"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-[9999px] bg-[#ffffff] text-[#161616] text-[14px] font-medium whitespace-nowrap hover:bg-[#e5e5e5] transition-colors"
      >
        Notify me
      </button>
    </form>
  );
}

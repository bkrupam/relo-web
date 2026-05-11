"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    num: "01",
    title: "Always in reach",
    description:
      "Lives in your menu bar — no separate window, no dock clutter. Your reminders are one glance away, always there when you need them.",
    mockup: <ReminderListMockup />,
  },
  {
    num: "02",
    title: "Timely and smart",
    description:
      "Set it once. Relo surfaces reminders at exactly the right moment. Snooze, dismiss, or reschedule without breaking your flow.",
    mockup: <SnoozeMockup />,
  },
  {
    num: "03",
    title: "Featherweight",
    description:
      "Under 10 MB. Uses almost no CPU or memory in the background. Your Mac stays as fast as you need it to be.",
    mockup: <StatsMockup />,
  },
];

export default function FeaturesScroll() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        // Fire when the card's top edge crosses 20vh from top (where the left panel sticks)
        { rootMargin: "-20% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section id="features" className="w-full">

      {/* Section header */}
      <div className="max-w-[1060px] mx-auto px-8 pt-20 pb-32 text-center">
        <p className="text-[13px] text-[#686868] tracking-[0.35px] mb-3 font-[family-name:var(--font-dm-sans)]">
          Why Relo
        </p>
        <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.4px] text-[#e5e5e5] font-[family-name:var(--font-geist)]">
          Built for people who get things done
        </h2>
      </div>

      {/* Split — items-start keeps both columns top-aligned */}
      <div className="max-w-[1060px] mx-auto px-8 flex gap-16 items-start">

        {/* LEFT — sticky, align-self:flex-start is critical for sticky inside flexbox */}
        <div
          className="w-[36%] flex-shrink-0 sticky flex flex-col"
          style={{ top: "20vh", alignSelf: "flex-start" }}
        >
          {features.map((f, i) => {
            const isActive = active === i;
            return (
              <div
                key={f.num}
                className="py-5"
                // opacity only — no height/size changes so sticky never reflows
                style={{ opacity: isActive ? 1 : 0.18, transition: "opacity 0.4s ease" }}
              >
                <p className="text-[12px] tracking-[0.35px] text-[#686868] mb-3 font-[family-name:var(--font-dm-sans)]">
                  {f.num}
                </p>
                {/* Fixed font-size — no layout shift */}
                <h3
                  className="text-[24px] font-semibold leading-[1.25] font-[family-name:var(--font-geist)]"
                  style={{ color: isActive ? "#e5e5e5" : "#686868", transition: "color 0.4s ease" }}
                >
                  {f.title}
                </h3>
                {/* Description: always in DOM at full height, only opacity transitions */}
                <p
                  className="text-[14px] text-[#686868] leading-[1.6] mt-3 font-[family-name:var(--font-dm-sans)]"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    // pointer-events off when invisible so it doesn't interfere
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* RIGHT — scrolls, gap between cards like Dia's spacing */}
        <div className="flex-1 flex flex-col pb-40" style={{ gap: "160px" }}>
          {features.map((f, i) => (
            <div
              key={f.num}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="w-full rounded-[20px] overflow-hidden"
              style={{
                background: "rgba(18,18,18,0.95)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.03), 0 24px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-2 px-5 py-3.5 border-b border-[#e5e5e5]/6"
                style={{ background: "rgba(255,255,255,0.015)" }}
              >
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[12px] text-[#686868] tracking-[0.3px] font-[family-name:var(--font-dm-sans)]">
                  Relo
                </span>
              </div>
              <div style={{ aspectRatio: "16/9" }}>
                {f.mockup}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── Mockups ── */

function ReminderListMockup() {
  const items = [
    { icon: "📬", title: "Reply to design feedback", time: "In 20 min", tag: "Work" },
    { icon: "💊", title: "Take evening medication", time: "7:00 PM", tag: "Health" },
    { icon: "📞", title: "Call with investors", time: "Tomorrow, 10 AM", tag: "Meeting" },
    { icon: "🛒", title: "Pick up groceries", time: "On the way home", tag: "Personal" },
    { icon: "📖", title: "Read for 30 minutes", time: "9:00 PM", tag: "Personal" },
  ];
  return (
    <div className="w-full h-full flex overflow-hidden">
      <div className="w-44 flex-shrink-0 border-r border-[#e5e5e5]/6 p-4">
        <p className="text-[10px] text-[#686868] tracking-[0.35px] mb-4 font-[family-name:var(--font-dm-sans)]">Today · 5</p>
        {items.map((r) => (
          <div key={r.title} className="flex items-center gap-2 px-2 py-2 rounded-[8px] mb-1">
            <span className="text-[12px] flex-shrink-0">{r.icon}</span>
            <p className="text-[11px] text-[#b2b2b2] truncate font-[family-name:var(--font-dm-sans)]">{r.title}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col justify-center gap-2 p-6" style={{ background: "rgba(255,255,255,0.01)" }}>
        {items.slice(0, 3).map((r) => (
          <div
            key={r.title}
            className="flex items-center gap-3 px-4 py-3 rounded-[10px]"
            style={{ background: "rgba(212,212,212,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="text-[14px] flex-shrink-0">{r.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] text-[#e5e5e5] font-medium truncate font-[family-name:var(--font-dm-sans)]">{r.title}</p>
              <p className="text-[10px] text-[#686868] font-[family-name:var(--font-dm-sans)]">{r.time}</p>
            </div>
            <span className="text-[9px] px-2 py-0.5 rounded-[9999px] text-[#686868] flex-shrink-0 border border-white/8 font-[family-name:var(--font-dm-sans)]">{r.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SnoozeMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-12 p-10" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div
        className="flex-shrink-0 w-64 rounded-[16px] p-5"
        style={{ background: "rgba(212,212,212,0.06)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-start gap-3 mb-5">
          <span className="text-xl">📞</span>
          <div>
            <p className="text-[13px] text-[#e5e5e5] font-semibold font-[family-name:var(--font-geist)]">Call with investors</p>
            <p className="text-[11px] text-[#686868] mt-0.5 font-[family-name:var(--font-dm-sans)]">Starting in 5 minutes</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2.5">
          {["5 min", "15 min", "1 hour", "Tomorrow"].map((t) => (
            <button key={t} className="py-1.5 rounded-[9999px] text-[11px] text-[#b2b2b2] font-[family-name:var(--font-dm-sans)]"
              style={{ background: "rgba(212,212,212,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {t}
            </button>
          ))}
        </div>
        <button className="w-full py-1.5 rounded-[9999px] text-[12px] font-medium text-[#161616] bg-white font-[family-name:var(--font-dm-sans)]">
          Dismiss
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[22px] font-semibold text-[#e5e5e5] leading-tight font-[family-name:var(--font-geist)]">Never lose the moment</p>
        <p className="text-[13px] text-[#686868] leading-relaxed max-w-[200px] font-[family-name:var(--font-dm-sans)]">
          Snooze or dismiss without leaving what you&apos;re doing.
        </p>
      </div>
    </div>
  );
}

function StatsMockup() {
  return (
    <div className="w-full h-full flex items-center gap-10 p-8" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="flex-1 space-y-4">
        <p className="text-[10px] text-[#686868] tracking-[0.35px] mb-4 font-[family-name:var(--font-dm-sans)]">System usage</p>
        {[
          { label: "Memory", value: "8.2 MB", bar: 8, color: "#4ade80" },
          { label: "CPU (idle)", value: "0.0%", bar: 1, color: "#60a5fa" },
          { label: "Battery impact", value: "None", bar: 2, color: "#a78bfa" },
        ].map((s) => (
          <div key={s.label}>
            <div className="flex justify-between mb-1.5">
              <span className="text-[11px] text-[#b2b2b2] font-[family-name:var(--font-dm-sans)]">{s.label}</span>
              <span className="text-[11px] text-[#e5e5e5] font-medium font-[family-name:var(--font-dm-sans)]">{s.value}</span>
            </div>
            <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(212,212,212,0.1)" }}>
              <div className="h-full rounded-full" style={{ width: `${Math.max(s.bar, 1)}%`, background: s.color, opacity: 0.6 }} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 grid grid-cols-2 gap-3">
        {[
          { label: "App size", value: "9.4 MB" },
          { label: "Launch time", value: "0.3s" },
          { label: "Runs since", value: "Boot" },
          { label: "Background", value: "Silent" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-3 rounded-[12px]"
            style={{ background: "rgba(212,212,212,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[10px] text-[#686868] font-[family-name:var(--font-dm-sans)]">{s.label}</p>
            <p className="text-[16px] font-semibold text-[#e5e5e5] mt-1 font-[family-name:var(--font-geist)]">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

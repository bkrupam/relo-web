"use client";

import { useEffect, useRef, useState } from "react";

export default function DemoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-24 flex flex-col items-center max-w-[1100px] mx-auto w-full">
      <p className="text-[14px] text-[#686868] tracking-[0.35px] mb-3 font-[family-name:var(--font-dm-sans)]">
        See it in action
      </p>
      <h2 className="text-[36px] font-semibold leading-[1.11] text-[#e5e5e5] text-center mb-12 font-[family-name:var(--font-geist)]">
        Your reminders, always within reach
      </h2>

      {/* macOS window mockup */}
      <div
        className="w-full max-w-2xl transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px) scale(1)" : "translateY(32px) scale(0.97)",
        }}
      >
        {/* Window chrome */}
        <div className="rounded-[24px] overflow-hidden border border-[#e5e5e5]/10 bg-[rgba(0,0,0,0.2)] backdrop-blur-md"
          style={{ filter: "drop-shadow(rgba(255,255,255,0.02) 0px 3px 4.5px) drop-shadow(rgba(0,0,0,0.4) 0px 20px 40px)" }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[rgba(212,212,212,0.06)] border-b border-[#e5e5e5]/8">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[12px] text-[#686868] tracking-[0.35px] font-[family-name:var(--font-dm-sans)]">
              Relo
            </span>
          </div>

          {/* App content mockup */}
          <div className="p-6 space-y-3 min-h-[280px]">
            {reminders.map((r, i) => (
              <div
                key={r.title}
                className="flex items-center gap-3 px-4 py-3 rounded-[10px] bg-[rgba(212,212,212,0.06)] border border-[#e5e5e5]/8 transition-all duration-500"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-12px)",
                  transitionDelay: `${200 + i * 80}ms`,
                }}
              >
                <span className="text-base">{r.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] text-[#e5e5e5] font-medium tracking-[0.35px] font-[family-name:var(--font-dm-sans)]">
                    {r.title}
                  </p>
                  <p className="text-[12px] text-[#686868] tracking-[0.35px] font-[family-name:var(--font-dm-sans)]">
                    {r.time}
                  </p>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-[9999px] bg-[rgba(212,212,212,0.1)] text-[#b2b2b2] border border-[#e5e5e5]/10 font-[family-name:var(--font-dm-sans)]">
                  {r.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const reminders = [
  { icon: "📬", title: "Reply to design feedback", time: "In 20 minutes", tag: "Work" },
  { icon: "💊", title: "Take evening medication", time: "7:00 PM", tag: "Health" },
  { icon: "📞", title: "Call with investors", time: "Tomorrow, 10 AM", tag: "Meeting" },
  { icon: "🛒", title: "Pick up groceries", time: "On the way home", tag: "Personal" },
];

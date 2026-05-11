"use client";

import { useEffect, useRef, useState } from "react";
import EmailCapture from "./EmailCapture";

export default function ScrollHeroDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = containerRef.current;
      if (!el) return;
      const scrolled = -el.getBoundingClientRect().top;
      const scrollable = el.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(scrolled / scrollable, 0), 1);
      setProgress(p);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Easing
  const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  // Phase 1 (0 → 0.55): hold hero, start shrinking late
  // Phase 2 (0.45 → 1): panel shrinks into window, demo fades in
  const shrinkP = ease(Math.min(Math.max((progress - 0.35) / 0.65, 0), 1));
  const heroFade = Math.max(1 - progress * 4, 0);
  const demoFade = ease(Math.min(Math.max((progress - 0.55) / 0.45, 0), 1));

  const borderRadius = lerp(0, 24, shrinkP);
  const insetX = lerp(0, 13, shrinkP);   // percent
  const insetTop = lerp(0, 9, shrinkP);  // percent
  const insetBot = lerp(0, 9, shrinkP);  // percent

  return (
    // Tall container drives the scroll distance
    <div ref={containerRef} style={{ height: "280vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── The morphing panel ── */}
        <div
          style={{
            position: "absolute",
            left: `${insetX}%`,
            right: `${insetX}%`,
            top: `${insetTop}%`,
            bottom: `${insetBot}%`,
            borderRadius: `${borderRadius}px`,
            background: "linear-gradient(160deg, rgb(52,80,145) 0%, rgb(120,140,165) 50%, rgb(170,120,95) 100%)",
            overflow: "hidden",
            willChange: "left, right, top, bottom, border-radius",
          }}
        >
          {/* Noise/grain overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(0,0,0,0.25)", mixBlendMode: "multiply" }}
          />

          {/* ── Hero content (fades out while scrolling) ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            style={{ opacity: heroFade, pointerEvents: heroFade < 0.1 ? "none" : "auto" }}
          >
            <p className="text-[14px] text-white/50 tracking-[0.35px] mb-5 font-[family-name:var(--font-dm-sans)]">
              Menu bar reminders for macOS
            </p>
            <h1 className="text-[56px] font-semibold leading-[1.05] tracking-[-0.672px] text-white max-w-2xl font-[family-name:var(--font-geist)]">
              Remember what matters,{" "}
              <span className="text-white/70">without the noise</span>
            </h1>
            <p className="mt-5 text-[18px] text-white/55 leading-[1.5] tracking-[0.45px] max-w-sm font-[family-name:var(--font-dm-sans)]">
              Relo lives quietly in your menu bar — surfacing the right reminder at exactly the right moment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
              <a
                href="/Relo.dmg"
                className="px-5 py-2.5 rounded-[9999px] bg-white text-[#161616] text-[14px] font-medium whitespace-nowrap hover:bg-[#e5e5e5] transition-colors font-[family-name:var(--font-dm-sans)]"
              >
                Download for macOS
              </a>
              <span className="text-white/30 hidden sm:block text-[14px]">or</span>
              <EmailCapture />
            </div>

            <p className="mt-4 text-[12px] text-white/30 tracking-[0.35px] font-[family-name:var(--font-dm-sans)]">
              macOS 13 Ventura or later · Free
            </p>

            {/* Scroll hint */}
            <div
              className="absolute bottom-8 flex flex-col items-center gap-2"
              style={{ opacity: Math.max(1 - progress * 8, 0) }}
            >
              <span className="text-[12px] text-white/30 tracking-[0.35px] font-[family-name:var(--font-dm-sans)]">
                scroll to see a demo
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/20 animate-bounce">
                <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* ── Demo content (fades in as panel shrinks) ── */}
          <div
            className="absolute inset-0 flex flex-col"
            style={{ opacity: demoFade, pointerEvents: demoFade < 0.1 ? "none" : "auto" }}
          >
            {/* Window chrome / title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-black/20 border-b border-white/10 flex-shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[12px] text-white/40 tracking-[0.35px] font-[family-name:var(--font-dm-sans)]">
                Relo
              </span>
            </div>

            {/* Demo CTA */}
            <div className="flex-1 flex flex-col items-center justify-center gap-5">
              <p className="text-[22px] font-semibold text-white tracking-[-0.2px] font-[family-name:var(--font-geist)]">
                Ready to see how it works?
              </p>
              <button
                className="flex items-center gap-3 px-5 py-3 rounded-[9999px] font-[family-name:var(--font-dm-sans)]"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                {/* Play icon circle */}
                <span
                  className="flex items-center justify-center w-7 h-7 rounded-full"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
                    <path d="M1 1l8 5-8 5V1z" />
                  </svg>
                </span>
                Play Demo
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

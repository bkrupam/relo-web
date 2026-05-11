export default function DownloadCTA() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Subtle gradient aura behind the text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(72,103,175,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-[1060px] mx-auto px-8 py-36 flex flex-col items-center text-center gap-8">
        <p className="text-[13px] text-[#686868] tracking-[0.35px] font-[family-name:var(--font-dm-sans)]">
          Free · macOS 13 Ventura or later
        </p>

        <h2 className="text-[48px] font-semibold leading-[1.05] tracking-[-0.672px] text-[#e5e5e5] max-w-lg font-[family-name:var(--font-geist)]">
          Start remembering what matters.
        </h2>

        <p className="text-[16px] text-[#686868] leading-[1.6] max-w-sm font-[family-name:var(--font-dm-sans)]">
          Relo sits quietly in your menu bar and makes sure nothing slips through the cracks.
        </p>

        <div className="flex items-center gap-3 mt-2">
          <a
            href="/Relo.dmg"
            className="flex items-center gap-2 px-6 py-3 rounded-[9999px] bg-white text-[#161616] text-[14px] font-medium hover:bg-[#e5e5e5] transition-colors duration-150 font-[family-name:var(--font-dm-sans)]"
          >
            <AppleIcon />
            Download for macOS
          </a>
        </div>

        {/* Small social proof line */}
        <p className="text-[12px] text-[#686868]/60 tracking-[0.3px] font-[family-name:var(--font-dm-sans)]">
          Join the waitlist if the download isn&apos;t live yet
        </p>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
      <path d="M13.173 11.42c-.27.618-.4.895-.748 1.443-.486.743-1.17 1.67-2.019 1.677-.753.007-1.024-.491-1.906-.486-.882.005-1.17.495-1.924.489-.849-.007-1.494-.85-1.98-1.594C3.36 10.54 3.177 7.69 4.16 6.226c.7-1.054 1.804-1.672 2.843-1.672 1.058 0 1.722.492 2.597.492.85 0 1.367-.494 2.592-.494 1.122 0 2.09.614 2.782 1.568-2.447 1.34-2.05 4.83.199 5.3zM9.47 2.866C9.9 2.303 10.22 1.513 10.1.75c-.69.047-1.5.463-1.978 1.06-.43.543-.785 1.34-.647 2.094.758.023 1.537-.393 1.995-.038z" />
    </svg>
  );
}

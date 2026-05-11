export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f8f8f8]">
      {/* Nav */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-[#efefef]/80 backdrop-blur-md">
        <span className="text-[14px] font-medium tracking-tight text-black">Relo</span>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-[14px] text-black hover:opacity-60 transition-opacity">Features</a>
          <a href="#download" className="text-[14px] text-black hover:opacity-60 transition-opacity">Download</a>
        </nav>
        <a
          href="#download"
          className="text-[14px] font-medium px-5 py-2 rounded-[30px] bg-[#d9d9d9] text-black hover:bg-black hover:text-white transition-colors duration-200"
        >
          Download
        </a>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center text-center px-6 pt-28 pb-32 overflow-hidden">
        {/* Ambient gradient glow */}
        <div
          className="absolute inset-x-0 top-0 h-72 spectrum-glow pointer-events-none"
          aria-hidden
        />

        <p className="relative text-[18px] text-[#636363] font-normal mb-4">
          Menu bar reminders for macOS
        </p>
        <h1 className="relative text-[72px] font-light leading-[1.11] tracking-[-2.88px] text-black max-w-3xl">
          Remember what matters, effortlessly
        </h1>
        <p className="relative mt-6 text-[16px] text-[#636363] max-w-md">
          Relo lives quietly in your menu bar — surfacing reminders at exactly the right moment, without interrupting your flow.
        </p>

        <div className="relative mt-10 flex items-center gap-4" id="download">
          <a
            href="/Relo.dmg"
            className="text-[14px] font-medium px-6 py-3 rounded-[30px] bg-[#d9d9d9] text-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            Download for macOS
          </a>
          <span className="text-[13px] text-[#959595]">macOS 13+ · Free</span>
        </div>

        {/* Spectrum strip */}
        <div className="relative mt-16 w-full max-w-2xl h-[3px] rounded-full spectrum-strip opacity-60" aria-hidden />
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 max-w-[1200px] mx-auto w-full">
        <h2 className="text-[50px] font-light leading-[1.18] tracking-[-2px] text-black text-center mb-16">
          Built for focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-[30px] bg-white/90 backdrop-blur-md"
              style={{ boxShadow: "rgba(0,0,0,0.08) 0px 0px 8px 0px" }}
            >
              <div className="text-2xl mb-4">{f.icon}</div>
              <h3 className="text-[22px] font-medium text-black leading-snug mb-2">{f.title}</h3>
              <p className="text-[16px] text-[#636363] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto px-8 py-10 border-t border-[#efefef] flex items-center justify-between text-[14px] text-[#959595]">
        <span>© {new Date().getFullYear()} Relo</span>
        <span>Made for macOS</span>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: "⏰",
    title: "Menu bar native",
    description:
      "Lives exactly where you already look. No separate window, no dock icon — just a quiet presence in your menu bar.",
  },
  {
    icon: "🔔",
    title: "Timely nudges",
    description:
      "Set reminders once and let Relo surface them at the right moment. Snooze, dismiss, or reschedule in one click.",
  },
  {
    icon: "⚡",
    title: "Lightweight by design",
    description:
      "Runs in the background using almost no memory or CPU. Your Mac stays fast, your reminders stay reliable.",
  },
];

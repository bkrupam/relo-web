export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e5e5e5]/6">
      <div className="max-w-[1060px] mx-auto px-8 py-10 flex items-center justify-between">

        {/* Left — brand + tagline */}
        <div className="flex items-center gap-6">
          <span className="text-[14px] font-semibold text-[#e5e5e5] font-[family-name:var(--font-geist)]">
            Relo
          </span>
          <span className="text-[13px] text-[#686868] font-[family-name:var(--font-dm-sans)]">
            Menu bar reminders for macOS
          </span>
        </div>

        {/* Right — links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#686868] hover:text-[#e5e5e5] transition-colors duration-150 font-[family-name:var(--font-dm-sans)]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#686868] hover:text-[#e5e5e5] transition-colors duration-150 font-[family-name:var(--font-dm-sans)]"
          >
            LinkedIn
          </a>
          <span className="text-[13px] text-[#686868]/40 font-[family-name:var(--font-dm-sans)]">
            © {new Date().getFullYear()} Relo
          </span>
        </div>

      </div>
    </footer>
  );
}

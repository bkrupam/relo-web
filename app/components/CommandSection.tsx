export default function CommandSection() {
  return (
    <div className="max-w-[1060px] mx-auto px-8 pt-40 pb-8">
      {/* Card wrapper */}
      <div
        className="w-full rounded-[24px] px-16 py-16 flex items-center gap-16"
        style={{
          background: "rgba(212,212,212,0.04)",
          border: "1px solid rgba(229,229,229,0.08)",
        }}
      >
        {/* Left — copy */}
        <div className="flex-1 max-w-xs">
          <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.4px] text-[#e5e5e5] mb-4 font-[family-name:var(--font-geist)]">
            At your command.
          </h2>
          <p className="text-[14px] text-[#686868] leading-[1.6] tracking-[0.2px] font-[family-name:var(--font-dm-sans)]">
            Open Relo instantly from anywhere on your Mac. No mouse, no switching apps — your reminders are one shortcut away.
          </p>
        </div>

        {/* Right — keyboard keys */}
        <div className="flex-1 flex items-center justify-center gap-4">
          <Key symbol="⌘" label="command" wide />
          <Plus />
          <Key symbol="⇧" label="shift" />
          <Plus />
          <Key symbol="R" label="relo" />
        </div>
      </div>
    </div>
  );
}

function Key({ symbol, label, wide }: { symbol: string; label: string; wide?: boolean }) {
  return (
    <div
      className="flex flex-col items-center justify-between select-none"
      style={{
        width: wide ? 130 : 100,
        height: wide ? 130 : 100,
        background: "rgba(212,212,212,0.05)",
        border: "1px solid rgba(229,229,229,0.12)",
        borderRadius: 18,
        padding: "16px 18px 14px",
        boxShadow: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 -1px 0 0 rgba(0,0,0,0.3) inset",
      }}
    >
      <span
        className="text-[#c2c2c2] leading-none font-[family-name:var(--font-geist)]"
        style={{ fontSize: wide ? 30 : 26, fontWeight: 400 }}
      >
        {symbol}
      </span>
      <span
        className="text-[#686868] tracking-[0.2px] font-[family-name:var(--font-dm-sans)]"
        style={{ fontSize: 10, fontWeight: 400 }}
      >
        {label}
      </span>
    </div>
  );
}

function Plus() {
  return (
    <span
      className="text-[#2e2e2e] font-light font-[family-name:var(--font-geist)] select-none"
      style={{ fontSize: 24 }}
    >
      +
    </span>
  );
}

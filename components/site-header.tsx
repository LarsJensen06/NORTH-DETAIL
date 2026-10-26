"use client";

import { useState } from "react";

const links = [
  ["Services", "#services"],
  ["Our work", "#work"],
  ["The studio", "#studio"],
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20 flex h-[92px] items-center justify-between border-b border-white/15 px-[clamp(22px,5.3vw,88px)] max-[620px]:h-[72px]">
      <a className="inline-flex items-center gap-3" href="#top" aria-label="NORTH DETAIL home">
        <span className="flex size-[37px] items-center justify-center rounded-full border border-white/60 text-[11px] tracking-[-.08em] max-[620px]:size-[34px]">N<span className="text-silver">/</span>D</span>
        <span className="grid text-[11px] leading-[1.35] tracking-[.2em]">NORTH <b className="font-bold">DETAIL</b><small className="mt-1 text-[8px] tracking-[.15em] text-white/75">RIGA · AUTOMOTIVE CARE</small></span>
      </a>

      <button
        className="relative z-[22] grid size-10 content-center justify-items-end gap-1.5 border border-white/40 bg-white/5 p-[9px] md:hidden"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((open) => !open)}
        onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}
      >
        <span className={`h-px w-[18px] bg-white transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
        <span className={`h-px w-[18px] bg-white transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
      </button>

      <nav
        id="primary-navigation"
        aria-label="Main navigation"
        onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}
        className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-[71px] flex-col items-stretch gap-0 border-b border-white/15 bg-[#0c0e0f]/[.97] px-[clamp(22px,5.3vw,88px)] pb-[22px] pt-[10px] text-[12px] tracking-[.07em] md:static md:flex md:h-full md:flex-row md:items-center md:gap-[clamp(24px,3.2vw,49px)] md:border-0 md:bg-transparent md:p-0 md:text-[#d8dcdb]`}
        data-open={menuOpen}
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-3 transition-colors hover:text-white md:border-0 md:py-0">{label}</a>
        ))}
        <a href="#booking" onClick={() => setMenuOpen(false)} className="nav-cta mt-[13px] inline-flex items-center justify-between gap-[18px] border border-white/50 px-[13px] py-3 text-white transition-colors hover:bg-white hover:text-[#101212] md:mt-0 md:px-4 md:py-[11px]">
          Book a consultation <span aria-hidden="true" className="text-[15px]">↗</span>
        </a>
      </nav>
    </header>
  );
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-[#111415]">
      <div className="page-width grid grid-cols-[1fr_1fr_auto] items-center py-[45px] max-[620px]:grid-cols-[1fr_auto] max-[620px]:gap-[23px] max-[620px]:py-8">
        <a className="inline-flex items-center gap-3" href="#top" aria-label="NORTH DETAIL home">
          <span className="flex size-[37px] items-center justify-center rounded-full border border-white/60 text-[11px] tracking-[-.08em]">N<span className="text-silver">/</span>D</span>
          <span className="grid text-[11px] leading-[1.35] tracking-[.2em]">NORTH <b className="font-bold">DETAIL</b><small className="mt-1 text-[8px] tracking-[.15em] text-white/65">RIGA · AUTOMOTIVE CARE</small></span>
        </a>
        <p className="m-0 text-base leading-[1.35] tracking-[-.03em] text-[#d9dddc] max-[620px]:col-start-1 max-[620px]:row-start-2 max-[620px]:text-sm">Care that meets<br />the road ahead.</p>
        <a className="flex items-center gap-[15px] text-[11px] tracking-[.05em] text-[#c3c9c8] max-[620px]:col-start-2 max-[620px]:row-span-2" href="#top">Back to top <span className="text-[15px]" aria-hidden="true">↑</span></a>
      </div>
      <div className="page-width flex min-h-[57px] items-center justify-between gap-[15px] border-t border-white/15 text-[9px] tracking-[.1em] text-[#8e9695] max-[620px]:flex-wrap max-[620px]:gap-x-[15px] max-[620px]:gap-y-2 max-[620px]:py-[14px] max-[620px]:text-[8px]">
        <span>© {new Date().getFullYear()} NORTH DETAIL · CONCEPT STUDIO</span>
        <div className="flex gap-[22px] text-[11px] tracking-[.02em] text-[#c0c6c5] max-[620px]:order-3 max-[620px]:w-full max-[620px]:justify-between max-[620px]:text-[10px]">
          <a href="mailto:studio@northdetail.example" className="hover:text-white">studio@northdetail.example</a><span>Riga, Latvia</span>
        </div>
        <span>DESIGNED FOR THE DETAILS.</span>
      </div>
    </footer>
  );
}

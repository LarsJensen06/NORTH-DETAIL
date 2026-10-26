export default function Intro() {
  return (
    <section className="border-b border-white/15 py-[73px] max-[620px]:py-[52px]" aria-label="Our approach">
      <div className="page-width grid grid-cols-[1fr_2fr_auto] items-start gap-[22px] max-[800px]:grid-cols-[.75fr_2fr] max-[620px]:block">
        <p className="eyebrow pt-3 max-[620px]:mb-[15px]">A considered approach</p>
        <p className="m-0 text-[clamp(24px,3.2vw,42px)] font-normal leading-[1.35] tracking-[-.055em] max-[620px]:text-[clamp(25px,7vw,36px)]">A well-kept car feels different.<br /><span className="text-muted">We make every return to the driver’s seat feel like the first.</span></p>
        <p className="m-0 mt-[5px] text-right text-[9px] leading-[1.9] tracking-[.15em] text-muted max-[800px]:hidden">01 — 04<br />OUR PHILOSOPHY</p>
      </div>
    </section>
  );
}

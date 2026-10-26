import Image from "next/image";

const principles = [
  ["01", "One car at a time", "Focused studio time lets us give your vehicle the attention it deserves."],
  ["02", "Work with a purpose", "We’ll walk you through the options and explain what each service can achieve."],
  ["03", "Respect for every surface", "From clear coat to cabin trim, we choose a careful approach for the material."],
];

export default function Studio() {
  return (
    <section className="section-pad border-t border-white/15 bg-[#121516]" id="studio" aria-labelledby="studio-heading">
      <div className="page-width grid grid-cols-[1fr_.92fr] items-center gap-[clamp(48px,9vw,125px)] max-[800px]:gap-12 max-[620px]:grid-cols-1 max-[620px]:gap-[38px]">
        <div className="relative">
          <Image className="max-h-[660px] object-cover object-[56%_center] brightness-[.83] max-[620px]:aspect-[1.08]" src="/assets/hero-porsche.jpg" alt="A dark Porsche showing the play of light on its bodywork" width={1200} height={800} sizes="(max-width: 620px) 90vw, 45vw" />
          <span className="absolute bottom-[15px] left-[15px] bg-black/55 px-[9px] py-1.5 text-[8px] tracking-[.14em] text-[#e3e7e6] backdrop-blur">CRAFTED WITH INTENTION · RIGA</span>
        </div>
        <div>
          <p className="eyebrow">Why NORTH DETAIL</p>
          <h2 className="mt-[17px] text-[clamp(44px,5.8vw,66px)] font-normal leading-[1.05] tracking-[-.075em] max-[620px]:mt-[13px] max-[620px]:text-[clamp(42px,11vw,58px)]" id="studio-heading">Care that’s<br /><span className="text-[#b7bdbd]">considered.</span></h2>
          <p className="mb-[27px] mt-[23px] max-w-[410px] text-[14px] leading-[1.85] text-[#b0b6b5] max-[620px]:mb-[23px] max-[620px]:mt-[17px] max-[620px]:text-[13px]">Good detailing isn’t about doing more. It’s knowing where to focus, which finish to preserve and when to stop.</p>
          <div className="border-t border-white/15">
            {principles.map(([number, title, text]) => (
              <article key={number} className="grid grid-cols-[35px_1fr] gap-[10px] border-b border-white/15 py-4 max-[620px]:py-[14px]">
                <span className="pt-[3px] text-[10px] tracking-[.08em] text-[#8f9695]">{number}</span>
                <div><h3 className="mb-1 mt-0 text-[15px] font-normal">{title}</h3><p className="m-0 max-w-[350px] text-[12px] leading-[1.7] text-[#9da4a3]">{text}</p></div>
              </article>
            ))}
          </div>
          <a className="text-link mt-[25px]" href="#booking">Talk with the studio <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

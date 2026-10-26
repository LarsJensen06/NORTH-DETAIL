"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import SectionHeading from "@/components/section-heading";

export default function WorkGallery() {
  const [split, setSplit] = useState(52);

  return (
    <section className="section-pad bg-background" id="work" aria-labelledby="work-heading">
      <div className="page-width">
        <SectionHeading label="A closer look" firstLine="The finish" secondLine="speaks for itself." id="work-heading" aside="A visual study of how light, preparation and a refined finish can change the way a surface reads." />
        <div className="relative isolate h-[clamp(310px,51vw,610px)] overflow-hidden bg-[#191c1d] max-[620px]:h-[430px]" style={{ "--split": `${split}%` } as CSSProperties}>
          <Image className="object-cover object-[center_48%]" src="/assets/paint-correction.jpg" alt="Illustrative polished paint finish with cloth detail" fill sizes="(max-width: 620px) 90vw, min(1240px, 90vw)" />
          <Image
            className="pointer-events-none absolute inset-0 z-[1] h-full object-cover object-[center_48%] brightness-[.57] saturate-[.45] contrast-[.83] blur-[1.1px]"
            src="/assets/paint-correction.jpg"
            alt=""
            fill
            aria-hidden="true"
            sizes="(max-width: 620px) 90vw, min(1240px, 90vw)"
            style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
          />
          <span className="comparison-label left-5 max-[620px]:left-3">Before · visual demo</span>
          <span className="comparison-label right-5 max-[620px]:right-3">After · visual demo</span>
          <span className="pointer-events-none absolute top-1/2 z-[2] grid size-9 place-items-center rounded-full border border-white bg-white text-[16px] text-[#0e1011]" style={{ left: `${split}%`, transform: "translate(-50%, -50%)" }} aria-hidden="true">↔</span>
          <label className="sr-only" htmlFor="comparison-range">Move slider to compare the illustrative before and after finish</label>
          <input id="comparison-range" className="absolute inset-0 z-[3] m-0 h-full w-full cursor-ew-resize opacity-0" type="range" min="5" max="95" value={split} aria-valuetext={`${split} percent`} onChange={(event) => setSplit(Number(event.target.value))} />
        </div>
        <p className="mt-3 flex gap-2 text-[11px] text-[#999f9f]"><span className="text-[#c6cccb]" aria-hidden="true">ⓘ</span>Illustrative visual only — this is not a client vehicle or a documented studio result.</p>
        <div className="mt-8 flex justify-between border-t border-white/15 pt-[18px] text-[10px] tracking-[.06em] text-[#adb3b2] max-[620px]:items-start max-[620px]:gap-[15px]">
          <span>Surface study — paint refinement</span><a className="text-link" href="#booking">Discuss your vehicle <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

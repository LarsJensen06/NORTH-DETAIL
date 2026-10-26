import SectionHeading from "@/components/section-heading";

const packages = [
  {
    type: "REFINE",
    title: "Paint correction",
    price: "€290",
    detail: "A one-step refinement for a brighter, more even finish.",
    service: "Paint correction",
    items: ["Hand wash & decontamination", "Paint depth assessment", "Single-stage machine polish", "Finishing sealant"],
  },
  {
    type: "PROTECT",
    badge: "FEATURED",
    title: "Ceramic coating",
    price: "€590",
    detail: "Refined paint with a protective, easy-care top layer.",
    service: "Ceramic coating",
    items: ["Wash & full decontamination", "Single-stage paint refinement", "Professional ceramic application", "Aftercare guidance"],
  },
  {
    type: "RESET",
    title: "Interior detail",
    price: "€160",
    detail: "A proper clean for the cabin, down to the last seam.",
    service: "Interior detailing",
    items: ["Full interior vacuum", "Leather or fabric treatment", "Dash, glass & detail clean", "Fresh finishing touches"],
  },
];

export default function Pricing() {
  return (
    <section className="section-pad border-t border-white/15 bg-[#111415]" aria-labelledby="pricing-heading">
      <div className="page-width">
        <SectionHeading
          label="A place to start"
          firstLine="Clear from"
          secondLine="the beginning."
          id="pricing-heading"
          aside="A guide to our most requested studio services. Final pricing is confirmed after we see your vehicle and understand what it needs."
        />
        <p className="mb-6 mt-[-19px] flex items-center gap-2 text-[12px] text-[#a7adac] max-[620px]:mt-[-12px] max-[620px]:items-start max-[620px]:text-[11px]"><span className="text-[13px] text-[#d1d6d5]">✳</span>Illustrative prices · EUR · Actual quotes depend on vehicle size and condition.</p>
        <div className="grid grid-cols-3 gap-3 max-[620px]:grid-cols-1">
          {packages.map((item, index) => (
            <article key={item.type} className={`flex min-h-[420px] flex-col border p-[clamp(23px,3vw,36px)] max-[800px]:px-[18px] max-[620px]:min-h-0 max-[620px]:px-[23px] max-[620px]:py-[26px] ${index === 1 ? "border-white/40 bg-[#1b1f20]" : "border-white/15 bg-white/[.015]"}`}>
              <p className="mb-[18px] flex min-h-5 items-center justify-between text-[10px] tracking-[.14em] text-[#bac0bf]">{item.type}{item.badge && <span className="border border-white/35 px-[7px] py-1 text-[8px] tracking-[.1em]">{item.badge}</span>}</p>
              <h3 className="m-0 text-[22px] font-normal tracking-[-.04em] max-[800px]:text-[19px]">{item.title}</h3>
              <p className="mb-[7px] mt-[15px] text-[12px] text-[#aeb4b3]">From <strong className="ml-1 text-[33px] font-normal tracking-[-.06em] text-white max-[800px]:text-[29px]">{item.price}</strong></p>
              <p className="m-0 min-h-10 text-[12px] leading-[1.7] text-muted">{item.detail}</p>
              <ul className="mb-7 mt-6 grid gap-[11px] border-t border-white/15 pt-5 text-[12px] text-[#d0d4d3] max-[620px]:mb-[23px]">{item.items.map((feature) => <li key={feature} className="list-none before:mr-[10px] before:text-[#9ca3a2] before:content-['—']">{feature}</li>)}</ul>
              <a className={`button mt-auto w-full justify-between text-[11px] ${index === 1 ? "button-light" : "button-outline"}`} href="#booking" data-service={item.service}>Enquire about this service <span aria-hidden="true" className="text-[15px]">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

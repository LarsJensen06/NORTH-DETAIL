import Image from "next/image";
import SectionHeading from "@/components/section-heading";

const services = [
  {
    number: "01",
    time: "Exterior · 4–8 hours",
    title: "Paint correction",
    description: "Careful machine polishing to soften swirls and bring back clarity, depth and a clean reflection.",
    image: "/assets/paint-correction.jpg",
    alt: "Microfiber cloth on the reflective blue paint of a freshly detailed car",
  },
  {
    number: "02",
    time: "Interior · 3–5 hours",
    title: "Interior detailing",
    description: "A thoughtful reset for leather, textiles and the small places that make a cabin feel cared for.",
    image: "/assets/interior-detail.jpg",
    alt: "Close detail of a finely finished leather car interior",
  },
  {
    number: "03",
    time: "Protection · 1–2 days",
    title: "Ceramic coating",
    description: "A durable, easier-to-care-for finish with a deep gloss that keeps the road’s mess at a distance.",
    image: "/assets/ceramic-finish.jpg",
    alt: "Sporting car with a rich gloss finish in a dark setting",
  },
];

export default function Services() {
  return (
    <section className="section-pad bg-background" id="services" aria-labelledby="services-heading">
      <div className="page-width">
        <SectionHeading
          label="Our services"
          firstLine="The details make"
          secondLine="the difference."
          id="services-heading"
          aside="Every vehicle is different. We start by understanding yours, then recommend only the work that makes sense."
        />
        <div className="grid grid-cols-3 gap-[23px] max-[800px]:gap-4 max-[620px]:grid-cols-1 max-[620px]:gap-[38px]">
          {services.map((service) => (
            <article key={service.number} className="service-card">
              <a className="group relative block aspect-[1.37] overflow-hidden bg-panel" href="#booking" aria-label={`Ask us about ${service.title}`}>
                <Image className="object-cover transition duration-700 group-hover:scale-[1.035] group-hover:brightness-110" src={service.image} alt={service.alt} fill sizes="(max-width: 620px) 90vw, (max-width: 800px) 30vw, 390px" />
                <span className="absolute bottom-3 right-3 grid size-9 place-items-center bg-[#f1f3f2] text-[16px] text-[#151718] transition group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-1 sm:opacity-0" aria-hidden="true">↗</span>
              </a>
              <div className="mt-5 flex justify-between text-[10px] uppercase tracking-[.12em] text-[#a3aaaa] max-[620px]:mt-4 max-[620px]:text-[9px]"><span className="text-[#d7dcdb]">{service.number}</span><span>{service.time}</span></div>
              <h3 className="mb-1 mt-[13px] text-[21px] font-normal tracking-[-.04em] max-[800px]:text-[19px] max-[620px]:mt-[10px] max-[620px]:text-[21px]">{service.title}</h3>
              <p className="m-0 min-h-[74px] max-w-[360px] text-[13px] leading-[1.8] text-muted max-[800px]:text-[12px] max-[620px]:min-h-0 max-[620px]:text-[13px]">{service.description}</p>
              <a className="mt-[13px] inline-flex items-center gap-3 text-[11px] tracking-[.04em] text-[#d9dddc] max-[620px]:mt-3" href="#booking">Explore {service.title.toLowerCase()} <span className="text-[15px] text-[#9ca3a2]">→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative flex min-h-[min(790px,95svh)] items-center overflow-hidden bg-[#101314] max-[620px]:min-h-[94svh]">
      <Image
        className="object-cover object-[center_60%] max-[620px]:object-[59%_center]"
        src="/assets/hero-porsche.jpg"
        alt="Dark Porsche travelling along a quiet road at dusk"
        fill
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,.92)_0%,rgba(5,7,7,.66)_32%,rgba(5,7,7,.26)_72%),linear-gradient(180deg,rgba(5,7,7,.4),rgba(5,7,7,.1)_58%,rgba(5,7,7,.45))] max-[620px]:bg-[linear-gradient(90deg,rgba(5,7,7,.86),rgba(5,7,7,.44)),linear-gradient(180deg,rgba(5,7,7,.45),rgba(5,7,7,.15)_60%,rgba(5,7,7,.55))]" />
      <div className="page-width animate-hero relative z-[1] pt-[60px] max-[620px]:pt-[46px]">
        <p className="eyebrow"><span className="status-dot" />Independent detailing studio · Riga</p>
        <h1 id="hero-heading" className="hero-title">Precision in<br /><span>Every Detail.</span></h1>
        <p className="max-w-[410px] text-[16px] leading-[1.8] text-[#d1d5d4] max-[620px]:max-w-[340px] max-[620px]:text-[15px]">Considered care for the car you love. We refine, protect and restore every surface with a little more patience.</p>
        <div className="mt-[34px] flex items-center gap-7 max-[620px]:mt-7 max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-[19px]">
          <a className="button button-light" href="#booking">Book a consultation <span aria-hidden="true" className="text-[15px]">↗</span></a>
          <a className="text-link" href="#services">Explore our services <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="absolute bottom-12 right-[clamp(22px,5.3vw,88px)] z-[1] flex items-center gap-[13px] text-[10px] tracking-[.08em] text-[#d4d8d7] max-[620px]:bottom-[25px] max-[620px]:text-[9px]">
        <span className="text-[#a8b0af]">01 / 03</span><span className="h-px w-[49px] bg-white/60" /><span>Made for the drive</span>
      </div>
      <a className="absolute bottom-[41px] left-[clamp(22px,5.3vw,88px)] flex items-center gap-3 text-[9px] tracking-[.14em] text-[#c5cbc9] max-[620px]:bottom-[22px] max-[620px]:text-[8px]" href="#services" aria-label="Scroll to services">
        <span className="h-[26px] w-px bg-white/35" />SCROLL TO DISCOVER
      </a>
    </section>
  );
}

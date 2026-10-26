import BookingForm from "@/components/booking-form";

export default function BookingSection() {
  return (
    <section className="section-pad border-t border-white/15 bg-background" id="booking" aria-labelledby="booking-heading">
      <div className="page-width grid grid-cols-[.82fr_1fr] gap-[clamp(50px,10vw,136px)] max-[800px]:gap-[55px] max-[620px]:grid-cols-1 max-[620px]:gap-[38px]">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2 className="section-title text-[clamp(46px,6.3vw,74px)] max-[620px]:text-[clamp(46px,12vw,64px)]" id="booking-heading">Let’s find the<br /><span>right finish.</span></h2>
          <p className="mt-5 max-w-[390px] text-[14px] leading-[1.85] text-[#aab0af] max-[620px]:text-[13px]">Tell us a little about your car and what you have in mind. We’ll help you work out a thoughtful next step.</p>
          <div className="mt-[34px] grid gap-1 border-t border-white/15 pt-[18px] max-[620px]:mt-6">
            <span className="text-[11px] text-[#9ca3a2]">Prefer a direct conversation?</span>
            <a className="text-base tracking-[-.02em]" href="tel:+37120000000">+371 20 000 000 <span className="text-sm">↗</span></a>
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

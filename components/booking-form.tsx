"use client";

import { useEffect, useState, type FormEvent } from "react";

type Fields = "name" | "phone" | "service";
type Errors = Partial<Record<Fields, string>>;

export default function BookingForm() {
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    const selectService = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLElement>("[data-service]");
      const value = link?.dataset.service;
      if (value) setService(value);
    };

    document.addEventListener("click", selectService);
    return () => document.removeEventListener("click", selectService);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const digits = phone.replace(/\D/g, "");
    const nextErrors: Errors = {};

    if (name.length < 2) nextErrors.name = "Please enter your name (at least 2 characters).";
    if (digits.length < 7 || digits.length > 15) nextErrors.phone = "Enter a phone number with 7 to 15 digits.";
    if (!service) nextErrors.service = "Choose a service to continue.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please check the highlighted fields and try again. This is a demo form; nothing will be sent.");
      window.requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }

    setStatus("Your details passed the demo validation. No booking was sent or saved. Connect a booking backend to receive real enquiries.");
  }

  function handleFieldChange(field?: Fields) {
    if (field) {
      setErrors((current) => {
        if (!current[field]) return current;
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
    if (status) setStatus("");
  }

  return (
    <form className="pt-[7px]" noValidate onSubmit={handleSubmit}>
      <p className="mb-[26px] text-[10px] tracking-[.12em] text-[#bac0bf] max-[620px]:mb-[22px]"><span className="status-dot" />DEMO FORM · NO DATA IS SENT</p>
      <div className="grid grid-cols-2 gap-[18px] max-[620px]:grid-cols-1 max-[620px]:gap-0">
        <div className="form-field">
          <label htmlFor="name">Your name <span className="text-[#a9b0af]">*</span></label>
          <input id="name" name="name" autoComplete="name" required minLength={2} maxLength={80} placeholder="Name" aria-invalid={Boolean(errors.name)} aria-describedby="name-error" onChange={() => handleFieldChange("name")} />
          <small className="field-error" id="name-error">{errors.name}</small>
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone number <span className="text-[#a9b0af]">*</span></label>
          <input id="phone" name="phone" autoComplete="tel" type="tel" required maxLength={24} placeholder="+371 20 000 000" aria-invalid={Boolean(errors.phone)} aria-describedby="phone-error" onChange={() => handleFieldChange("phone")} />
          <small className="field-error" id="phone-error">{errors.phone}</small>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="service">What would you like to explore? <span className="text-[#a9b0af]">*</span></label>
        <select id="service" name="service" required value={service} aria-invalid={Boolean(errors.service)} aria-describedby="service-error" onChange={(event) => { setService(event.target.value); handleFieldChange("service"); }}>
          <option value="" disabled>Select a service</option>
          <option>Paint correction</option><option>Interior detailing</option><option>Ceramic coating</option><option>Not sure yet</option>
        </select>
        <small className="field-error" id="service-error">{errors.service}</small>
      </div>
      <div className="form-field">
        <label className="flex justify-between" htmlFor="message">A little more about your car <span className="text-[8px] tracking-[.12em] text-[#8e9594]">OPTIONAL</span></label>
        <textarea id="message" name="message" rows={3} maxLength={600} placeholder="Make, model, and what you would like help with…" />
      </div>
      <button className="button button-light w-full justify-between" type="submit">Check this demo form <span aria-hidden="true" className="text-[15px]">↗</span></button>
      <p className="mt-[10px] text-[11px] leading-[1.6] text-[#a2a9a7]">Demo only. This form does not send or store your details and cannot make a real booking.</p>
      {status && <p className="mt-[17px] border border-white/40 bg-[#151919] px-[15px] py-[13px] text-[12px] leading-[1.6] text-[#e9eeec]" role="status" aria-live="polite" tabIndex={-1}>{status}</p>}
    </form>
  );
}

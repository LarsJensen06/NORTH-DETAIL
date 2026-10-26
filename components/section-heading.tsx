import type { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  firstLine: string;
  secondLine: string;
  aside: string;
  id?: string;
};

export default function SectionHeading({ label, firstLine, secondLine, aside, id }: SectionHeadingProps) {
  return (
    <div className="section-heading max-[620px]:mb-[34px]">
      <div>
        <p className="eyebrow">{label}</p>
        <h2 className="section-title" id={id}>{firstLine}<br /><span>{secondLine}</span></h2>
      </div>
      <p className="section-aside max-[620px]:mt-[19px] max-[620px]:text-[11px]">{aside}</p>
    </div>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="text-link" href={href}>{children}<span aria-hidden="true">↗</span></a>;
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "NORTH DETAIL — Precision in Every Detail",
  description:
    "Thoughtful automotive detailing, paint refinement and ceramic protection at NORTH DETAIL studio in Riga.",
  icons: { icon: "/assets/favicon.svg" },
  openGraph: {
    title: "NORTH DETAIL — Precision in Every Detail",
    description: "Considered care for the car you love.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

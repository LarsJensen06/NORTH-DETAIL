import BookingSection from "@/components/booking-section";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Pricing from "@/components/pricing";
import Services from "@/components/services";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Studio from "@/components/studio";
import WorkGallery from "@/components/work-gallery";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <Pricing />
        <WorkGallery />
        <Studio />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  );
}

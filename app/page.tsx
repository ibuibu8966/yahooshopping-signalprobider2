import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Steps />
        <Pricing />
        <Testimonials />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

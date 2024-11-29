// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";

import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import ClientTestimonials from "./client-testimonials";
import Faq from "./faq";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
     
      <AboutEvent />
      <OurStats />
      < ClientTestimonials/>
      <Faq />
      <Footer />
    </>
  );
}

import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Testimonials />
      <CaseStudies />
      <CTA />
      <Footer />
    </>
  );
}

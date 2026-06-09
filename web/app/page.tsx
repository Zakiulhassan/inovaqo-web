import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Problem } from '@/components/sections/Problem';
import { Services } from '@/components/sections/Services';
import { WhyInovaqo } from '@/components/sections/WhyInovaqo';
import { Process } from '@/components/sections/Process';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Nav /><Hero /><TrustBar /><Problem /><Services /><WhyInovaqo />
      <Process /><CaseStudies /><Testimonials /><CTA /><Footer />
    </>
  );
}

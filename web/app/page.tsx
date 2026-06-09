import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Work } from '@/components/sections/Work';
import { Mission } from '@/components/sections/Mission';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Mission />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}

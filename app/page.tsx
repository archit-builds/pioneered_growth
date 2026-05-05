import { Hero } from '@/app/components/sections/Hero';
import { TrustBar } from '@/app/components/sections/TrustBar';
import { Services } from '@/app/components/sections/Services';
import { About } from '@/app/components/sections/About';
import { Process } from '@/app/components/sections/Process';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Process />
    </main>
  );
}

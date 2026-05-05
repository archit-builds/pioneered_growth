import { Hero } from '@/app/components/sections/Hero';
import { TrustBar } from '@/app/components/sections/TrustBar';
import { Services } from '@/app/components/sections/Services';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TrustBar />
      <Services />
    </main>
  );
}

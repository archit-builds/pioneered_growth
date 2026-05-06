import { Hero } from "@/app/components/sections/Hero";
import { TrustBar } from "@/app/components/sections/TrustBar";
import { Services } from "@/app/components/sections/Services";
import { About } from "@/app/components/sections/About";
import { Process } from "@/app/components/sections/Process";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { FAQ } from "@/app/components/sections/FAQ";
import { ContactForm } from "@/app/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </div>
  );
}

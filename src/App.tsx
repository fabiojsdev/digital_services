import { Hero, Features, Testimonials } from '@/features/home';
import { Navbar, Footer } from '@/components';
import { LeadForm } from '@/features/leads';


export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <LeadForm />
      <Testimonials />
      <Footer />
    </main>
  );
}

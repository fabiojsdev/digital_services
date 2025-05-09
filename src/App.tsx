import Hero from "./components/Hero.tsx"
import Features from "./components/Features.tsx"
import LeadForm from "./components/LeadForm.tsx"
import Testimonials from "./components/Testimonials.tsx"
import Footer from "./components/Footer.tsx"
import Navbar from "./components/Navbar.tsx"
function App() {

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Features />
        <LeadForm />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}

export default App

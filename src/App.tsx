import Hero from "./components/Hero"
import Features from "./components/Features"
import LeadForm from "./components/LeadForm"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

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

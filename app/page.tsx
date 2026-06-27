import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HOME */}
      <section id="home">
        <Reveal>
          <Hero />
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about">
        <Reveal>
          <About />
        </Reveal>
      </section>

      {/* SERVICES */}
      <section id="services">
        <Reveal>
          <Services />
        </Reveal>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why">
        <Reveal>
          <WhyChooseUs />
        </Reveal>
      </section>

      {/* REVIEWS */}
      <section id="reviews">
        <Reveal>
          <Reviews />
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Reveal>
          <Contact />
        </Reveal>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
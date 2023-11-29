import About from "@/components/About/About";
import Benefit from "@/components/Benefit/Benefit";
import Experience from "@/components/Experience/Experience";
import Guides from "@/components/Guides/Guides";
import Hero from "@/components/Hero/Hero";
import Location from "@/components/Location/Location";
import Price from "@/components/Price/Price";
import Footer from "@/layout/Footer/Footer";
import Navbar from "@/layout/Header/Header";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section className="p-5 container  mx-auto" id="about">
        <About />
      </section>
      <section className="p-5" id="price">
        <Price />
      </section>
      <section className="p-5 container mx-auto" id="experience">
        <Experience />
      </section>
      <section className="p-5 container mx-auto" id="benefit">
        <Benefit />
      </section>
      <section className="p-5 container  mx-auto" id="guides">
        <Guides />
      </section>
      <section className="p-5 container  mx-auto" id="location">
        <Location />
      </section>
      <footer className="p-5 container  mx-auto">
        <Footer />
      </footer>
    </main>
  );
}

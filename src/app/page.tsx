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
      <Navbar />
      <Hero />
      <section className="p-5 container  mx-auto">
        <About />
      </section>
      <section className="p-5">
        <Price />
      </section>
      <section className="p-5">
        <Experience />
      </section>
      <section className="p-5 container mx-auto">
        <Benefit />
      </section>
      <section className="p-5 container  mx-auto">
        <Guides />
      </section>
      <section className="p-5 container  mx-auto">
        <Location />
      </section>
      <footer className="p-5 container  mx-auto">
        <Footer />
      </footer>
    </main>
  );
}

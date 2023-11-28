import About from "@/components/About/About";
import Benefit from "@/components/Benefit/Benefit";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Price from "@/components/Price/Price";
import Navbar from "@/layout/Header/Header";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="p-5">
        <About />
      </section>
      <section className="p-5">
        <Price />
      </section>
      <section className="p-5">
        <Experience />
      </section>
      <section className="p-5">
        <Benefit />
      </section>
    </main>
  );
}

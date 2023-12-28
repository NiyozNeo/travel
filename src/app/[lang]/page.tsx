import Experience from "@/components/Experience/Experience";
import Guides from "@/components/Guides/Guides";
import Hero from "@/components/Hero/Hero";
import Location from "@/components/Location/Location";
import Price from "@/components/Price/Price";
import Footer from "@/layout/Footer/Footer";
import Navbar from "@/layout/Header/Header";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/lib/Dictionary";
import { use } from "react";
import Booking from "@/components/Booking/Booking";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { header } = use(getDictionary(lang));

  return (
    <>
      <Navbar header={header} />
      <section id="home">
        <Hero header={header} />
      </section>
      {/* <section className="p-5 container  mx-auto" id="about">
        <About />
      </section> */}
      <section className="p-5" id="price">
        <Price header={header} />
      </section>
      <section className="p-5 container mx-auto" id="benefit">
        <Experience header={header}/>
      </section>
      {/* <section className="p-5 container mx-auto" id="Ex">
        <Benefit />
      </section> */}
      <section className="p-5 container  mx-auto" id="guides">
        <Guides header={header}/>
      </section>
      
      <section className="p-5 container  mx-auto" id="booking">
        <Booking header={header}/>
      </section>
      <section className="p-5 container  mx-auto" id="location">
        <Location header={header}/>
      </section>
      <footer className="p-5 container  mx-auto">
        <Footer />
      </footer>
    </>
  );
}

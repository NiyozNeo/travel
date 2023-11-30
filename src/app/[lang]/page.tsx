"use client"
import About from "@/components/About/About";
import Benefit from "@/components/Benefit/Benefit";
import Experience from "@/components/Experience/Experience";
import Guides from "@/components/Guides/Guides";
import Hero from "@/components/Hero/Hero";
import Location from "@/components/Location/Location";
import Price from "@/components/Price/Price";
import Footer from "@/layout/Footer/Footer";
import Navbar from "@/layout/Header/Header";
import { useTranslations } from "next-intl";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/lib/Dictionary";
import LocaleSwitcher from "@/components/Local-switcher/Local-switcher";
import AnimatedContent from "@/components/Intro/Intro";
import { use } from "react";

export default  function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { header } =  use(getDictionary(lang));

  return (
    <>
      <Navbar header={header} />
      <section id="home">
        <Hero header={header} />
        <AnimatedContent />
      </section>
      <section className="p-5 container  mx-auto" id="about">
        <About />
      </section>
      <section className="p-5" id="price">
        <Price header={header} />
      </section>
      <section className="p-5 container mx-auto" id="benefit">
        <Experience />
      </section>
      <section className="p-5 container mx-auto" id="Ex">
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
    </>
  );
}

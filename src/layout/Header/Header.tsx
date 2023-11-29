"use client";
import LocaleSwitcher from "@/components/Local-switcher/Local-switcher";
import { Offcanvas } from "@/components/Offcanvas/Offcanvas";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LiaAngleUpSolid } from "react-icons/lia";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/lib/Dictionary";
import { FaBarsStaggered } from "react-icons/fa6";

interface Props {
  header: {
    home: string;
    about: string;
    price: string;
    experience: string;
    benefit: string;
    guides: string;
    contact: string;
    mainText: string;
    umra: string;
  };
  lang: string;
}

export default function Navbar({ header, lang }: Props) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 150;

      if (scrollY > threshold) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="p-4 shadow-custom sticky bg-white z-[999] top-0">
      {showBackToTop && (
        <div className="fixed bottom-[30px] border border-[gray] bg-white p-3 rounded-full right-[30px] z-[9999]">
          <Link href="#" className="">
            <LiaAngleUpSolid size={24} />
          </Link>
        </div>
      )}
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-[black]">
          <Link href="/" className="text-lg font-bold">
            Hidoyat Travel
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="#home" className="text-[black]">
            {header.home}
          </Link>
          <Link href="#about" className="text-[black]">
            {header.about}
          </Link>
          <Link href="#price" className="text-[black]">
            {header.price}
          </Link>
          <Link href="#experience" className="text-[black]">
            {header.experience}
          </Link>
          <Link href="#benefit" className="text-[black]">
            {header.benefit}
          </Link>
          <Link href="#guides" className="text-[black]">
            {header.guides}
          </Link>
          <Link href="#location" className="text-[black]">
            {header.contact}
          </Link>
        </div>
        <LocaleSwitcher />
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} className="text-[black]">
            <FaBarsStaggered size={24} />
          </button>
        </div>
      </div>

      <Offcanvas modal={menuOpen} setModal={setMenuOpen}>
        <div className=" z-[999]">
          <div className="flex flex-col space-y-4">
            <Link
              href="#home"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              {header.home}
            </Link>
            <Link
              href="#about"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              {header.about}
            </Link>
            <Link
              href="#price"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              {header.price}
            </Link>
            <Link
              href="#experience"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              {header.experience}
            </Link>
            <Link
              href="#benefit"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              {header.benefit}
            </Link>
            <Link
              href="#guides"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              {header.guides}
            </Link>
            <Link
              href="#location"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              {header.contact}
            </Link>
          </div>
        </div>
      </Offcanvas>
    </nav>
  );
}

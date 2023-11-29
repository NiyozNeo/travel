"use client";
import { Offcanvas } from "@/components/Offcanvas/Offcanvas";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LiaAngleUpSolid } from "react-icons/lia";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Set the threshold value based on when you want to show the button
      const threshold = 150;

      if (scrollY > threshold) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="p-4 shadow-md">
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
            Logo
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="#home" className="text-[black]">
            Home
          </Link>
          <Link href="#about" className="text-[black]">
            About
          </Link>
          <Link href="#price" className="text-[black]">
            Price
          </Link>
          <Link href="#experience" className="text-[black]">
            Experience
          </Link>
          <Link href="#benefit" className="text-[black]">
            Benefit
          </Link>
          <Link href="#guides" className="text-[black]">
            Guides
          </Link>
          <Link href="#location" className="text-[black]">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} className="text-[black]">
            Menu
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
              Home
            </Link>
            <Link
              href="#about"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="#price"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              Price
            </Link>
            <Link
              href="#experience"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              Experience
            </Link>
            <Link
              href="#benefit"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              Benefit
            </Link>
            <Link
              href="#guides"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              Guides
            </Link>
            <Link
              href="#location"
              className="text-[black] hover:bg-slate-300 p-2 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </Offcanvas>
    </nav>
  );
};

export default Navbar;

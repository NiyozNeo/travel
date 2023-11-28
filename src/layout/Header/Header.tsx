"use client";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-[black]">
          <Link href="/" className="text-lg font-bold">
            Logo
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-[black]">
            Home
          </Link>
          <Link href="/about" className="text-[black]">
            About
          </Link>
          <Link href="/contact" className="text-[black]">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[black]">
            Menu
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 fixed inset-y-0 right-0 p-4 w-3/5 transition-all duration-300 z-[999]">
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-textWhite">
              <IoClose size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-textWhite">
              Home
            </Link>
            <Link href="/about" className="text-textWhite">
              About
            </Link>
            <Link href="/contact" className="text-textWhite">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

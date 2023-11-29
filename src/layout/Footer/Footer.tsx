import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import ImgLogo from "../../../public/images/krypton.jpg";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:justify-between my-[50px]">
        <Link href={"#"} className="font-bold text-[35px]">
          Hidoyat Travel
        </Link>

        <div className="flex items-center gap-5">
          <Link href={"#"}>
            <FaInstagram size={24} />
          </Link>
          <Link href={"#"}>
            <FiYoutube size={24} />
          </Link>
          <Link href={"#"}>
            <LiaTelegram size={24} />
          </Link>
        </div>
      </div>
      <div className="bg-[black] w-full h-[1px] my-[25px]"></div>
      <div>
        <Link
          target="_blank"
          href={"https://krypton.uz/"}
          className="flex items-center justify-center gap-5"
        >
          <p className="text-center">© 2023 KRYPTON</p>
        </Link>
      </div>
    </div>
  );
}

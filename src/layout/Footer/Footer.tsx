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
          LOGO
        </Link>
        <div className="flex items-center gap-3">
          <Link href={"#"}> one</Link>
          <Link href={"#"}> two</Link>
          <Link href={"#"}> three</Link>
          <Link href={"#"}> four</Link>
          <Link href={"#"}> five</Link>
        </div>
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
          href={"https://t.me/kryptonuzb"}
          className="flex items-center justify-center gap-5"
        >
          <Image
            className="w-[25px] rounded-full"
            src={ImgLogo}
            alt="logo"
            width={100}
            height={100}
          />
          <p className="text-center">Krypton 2023 Tashkent Uzbekistan</p>
        </Link>
      </div>
    </div>
  );
}

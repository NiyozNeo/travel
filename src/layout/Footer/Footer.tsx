import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";

import "./footer.css";
import MyComponent from "@/components/SocialButtons/SocialButtons";
import SocialButtons from "@/components/SocialButtons/SocialButtons";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:justify-between my-[50px]">
        <Link href={"#"} className="font-bold text-[35px]">
          Hidoyat Travel
        </Link>

        <div className="flex items-center ">
          {/* <div className="social">
            <div className="icons">
              <div className="icon instagram">
                <div className="tooltip"> Instagram </div>
                <Link href={"#"} className="hover:shadow-md p-5">
                  <FaInstagram size={24} color={"gray"} />
                </Link>
              </div>
              <div className="icon twitter">
                <div className="tooltip"> Telegram </div>
                <Link href={"#"} className="hover:shadow-md p-5">
                  <LiaTelegram size={24} color={"gray"} />
                </Link>
              </div>
              <div className="icon youtube">
                <div className="tooltip"> Youtube </div>
                <Link href={"#"} className="hover:shadow-md p-5">
                  <FiYoutube size={24} color={"gray"} />
                </Link>
              </div>
            </div>
          </div> */}
          <MyComponent/>

          {/* <Link href={"#"}>
            <FaInstagram size={24} />
          </Link>
          <Link href={"#"}>
            <FiYoutube size={24} />
          </Link>
          <Link href={"#"}>
            <LiaTelegram size={24} />
          </Link> */}
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

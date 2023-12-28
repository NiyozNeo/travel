"use client";
import { Variables } from "@/app/app.config";
import { Props } from "@/lang/lang";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";

export default function Location({ header }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className="my-[70px]"
    >
      <div className="flex flex-wrap md:flex-nowrap gap-8 items-center justify-between mb-[50px]">
        <div className="flex flex-col w-full md:w-2/3">
          <p>Kontakt</p>
          <h1 className="font-bold text-[35px]">{header.contactus}</h1>
          <p className="max-w-[700px]">
            {header.contactustext1} <a href="mailto:root@hidoyattravel.uz">root@hidoyattravel.uz</a>. {header.contactustext2}
          </p>
        </div>
        <div className="flex flex-col gap-7 w-full md:w-1/3">
          <div className="flex items-center gap-2">
            <HiOutlinePhone size={24} />
            <div>
              <p className="font-bold">{header.phonetext}</p>
              <Link className="decoration underline" href={`tel:${Variables.phone}`}>
                {Variables.phone}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SlLocationPin size={24} />
            <div>
              <p className="font-bold">{header.addressword}</p>
              <Link className="" target="_blank" href={"https://maps.app.goo.gl/hctE2Et9TanufEQz5"}>
              {header.address}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2532.9824417193818!2d69.23126511237673!3d41.32011262148945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzEyLjIiTiA2OcKwMTMnNTkuMCJF!5e0!3m2!1sen!2s!4v1701255614539!5m2!1sen!2s"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}

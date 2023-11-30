"use client"
import Image from "next/image";
import React from "react";
import AnimatedContent from "../Intro/Intro";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => {
      const shouldAnimate = window.scrollY > 100;

      if (shouldAnimate) {
        controls.start({ opacity: 1, x: 10, visibility: "visible" });
      } else {
        controls.start({ opacity: 0, x: 50, visibility: "hidden" });
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [controls]);

  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-center lg:justify-between gap-5 my-[70px]">
      <motion.div
        initial={{ opacity: 0.1, right: 500, bottom: 15 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="font-bold text-[35px]">
            Long heading is what you see <br /> here in this feater section
          </h1>
          <p className="max-w-[500px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            magnam ipsam sed assumenda quae quos commodi recusandae ducimus
            error, ab obcaecati delectus beatae accusantium maiores!
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.1, left: 50, visibility: "hidden" }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        <div>
          <Image
            className="w-[700px] h-[500px] rounded-md "
            src={"https://picsum.photos/seed/picsum/200/300"}
            width={100}
            height={100}
            alt="pic"
          />
        </div>
      </motion.div>
    </div>
  );
}

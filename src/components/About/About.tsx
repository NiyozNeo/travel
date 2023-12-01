"use client";
import Image from "next/image";
import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
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
      className="flex flex-wrap md:flex-nowrap items-center justify-center lg:justify-between gap-5 my-[70px]"
    >
      <div>
        <h1 className="font-bold text-[35px]">
          Long heading is what you see <br /> here in this feater section
        </h1>
        <p className="max-w-[500px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta magnam
          ipsam sed assumenda quae quos commodi recusandae ducimus error, ab
          obcaecati delectus beatae accusantium maiores!
        </p>
      </div>

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
  );
}

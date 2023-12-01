"use client"
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Guides() {
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
      className="flex flex-wrap md:flex-nowrap justify-between gap-5 mt-[70px]"
    >
      <div>
        <p>Unforgettable</p>
        <h1 className="font-bold text-[35px] max-w-[450px]">
          Discover the World with Our Expert Guides
        </h1>
        <p className="max-w-[550px] my-[25px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus
          perferendis qui cupiditate nesciunt modi, fugit dolor! Et provident
          possimus quam inventore vel hic.
        </p>
        <div className="flex justify-between ">
          <div>
            <p className="font-bold text-[35px]">50%</p>
            <p>Satisfied Customers</p>
          </div>
          <div>
            <p className="font-bold text-[35px]">50%</p>
            <p>Satisfied Customers</p>
          </div>
        </div>
      </div>
      <div className=" flex w-full md:w-[700px]">
        <iframe
          className="w-full h-[500px]"
          width="800"
          height="315"
          src="https://www.youtube.com/embed/p2ECRWKpawM?si=4MW04gg7_asSCRQd"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
}

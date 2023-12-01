"use client";
import React, { useEffect, useRef } from "react";
import Description from "../Descr/Descr";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
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
      <div className="flex flex-col items-center justify-center ">
        <p className="font-semibold">Afzalliklar</p>
        <h1 className="font-bold text-[35px] text-center">
          Biz Taklif Qilamiz
        </h1>
        <p className="max-w-[650px] text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,
        </p>
      </div>
      <div
        ref={ref}
        className="flex flex-wrap gap-5 items-center justify-center mt-[60px]"
      >
        <Description
          icons={<MdOutlineWorkspacePremium size={40} />}
          title="Mas'uliyat bilan yondashuv"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,"
        />
        <Description
          icons={<IoWalletOutline size={40} />}
          title="Hamyonbop, Qulay va Arzon"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,"
        />

        <Description
          icons={<AiOutlineSafety size={40} />}
          title="Yuqori malakali mutaxassislar ko'magi"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,"
        />
      </div>
    </motion.div>
  );
}

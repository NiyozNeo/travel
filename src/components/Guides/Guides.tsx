"use client";
import { Props } from "@/lang/lang";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Guides({ header }: Props) {
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
                <p>Live Makkah</p>
                <h1 className="font-bold text-[35px] max-w-[450px]">
                    {header.makkahlive}
                </h1>
            </div>
            <div className=" flex w-full md:w-[700px]">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/PEmRPDJ9I8M?si=F29UQUeuOc_EpXEG"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </motion.div>
    );
}

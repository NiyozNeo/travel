"use client";
import { Props } from "@/lang/lang";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function License({ header }: Props) {
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
            <div>
                <h1 className="font-bold text-[35px] text-center mb-4">
                    Litsenziya
                </h1>
                <p className="text-[15px] text-center">
                    Hidoyat umra tuzim mchj umra xizmatlarini ... sonli
                    litsenziyaga asosan xizmat ko'rsatadi. Litsenziya egasi:
                    Ro'ziyev Muhammmadjon Abduxairovich. Litsenziya Hidoyat umra
                    tuzim mchjga tegishli
                </p>
                <div className="flex flex-col gap-7 w-full md:w-1/3"></div>
            </div>
        </motion.div>
    );
}

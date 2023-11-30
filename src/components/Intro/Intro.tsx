// components/AnimatedContent.js

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimatedContent = () => {
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => {
      const shouldAnimate = window.scrollY > 300;

      if (shouldAnimate) {
        controls.start({ opacity: 1, y: 0, visibility: "visible" });
      } else {
        controls.start({ opacity: 0, y: 50, visibility: "hidden" });
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, visibility: "hidden" }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <h1>Framer Motion va Next.js bilan animatsiyalar</h1>
      <p>Bu kontent animatsiyasi scroll bo'lganda paydo bo'ladi.</p>
    </motion.div>
  );
};

export default AnimatedContent;

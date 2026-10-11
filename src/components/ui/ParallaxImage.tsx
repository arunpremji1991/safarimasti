"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Full-bleed background image that drifts slightly as the section scrolls past. Fills its (relative) parent. */
export function ParallaxImage({
  src,
  alt = "",
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden={alt === "" ? true : undefined}>
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y, scale: 1.16 }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
    </div>
  );
}

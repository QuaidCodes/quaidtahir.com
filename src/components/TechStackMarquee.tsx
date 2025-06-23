"use client";

import { motion } from "framer-motion";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "Figma",
  "C++",
  "Python",
  "HTML/CSS",
  "Node.js",
  "Java",
];

export default function TechStackMarquee() {
  const repeated = [...techStack, ...techStack]; // repeat for smooth looping

  return (
    <div className="relative overflow-hidden border-y border-neutral-800 bg-neutral-950 py-4">
      <motion.div
        className="flex gap-20 px-4 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {repeated.map((tech, i) => (
          <span
            key={i}
            className="text-lg font-medium tracking-wider uppercase text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
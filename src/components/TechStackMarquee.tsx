"use client";

import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export default function TechStackMarquee() {
  const baseVelocity = -100; // pixels per second
  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  useAnimationFrame((_, delta) => {
    const moveBy = (baseVelocity * delta) / 1000;
    x.current += moveBy;

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }

    if (
      containerRef.current &&
      x.current <= -containerRef.current.scrollWidth / 2
    ) {
      x.current = 0;
    }
  });

  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden whitespace-nowrap border-y border-neutral-800 bg-neutral-950 py-4 text-white">
      <div className="flex gap-20 px-4" ref={containerRef}>
        {duplicatedStack.map((tech, index) => (
          <span
            key={index}
            className="text-lg font-medium tracking-wider uppercase text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

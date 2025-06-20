// src/components/ProjectCard.tsx
"use client";

import { Project } from "@/data/projectList";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      className="rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-zinc-900"
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.8,
        delay: index * 0.15,
      }}
      whileHover={{
        scale: 1.03,
        y: -4,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Visit Project →
        </Link>
      </div>
    </motion.div>
  );
}

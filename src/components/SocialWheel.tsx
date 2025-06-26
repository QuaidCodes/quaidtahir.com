"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function SocialWheel() {
  return (
    <div className="w-40 h-40 rounded-full overflow-hidden flex shadow-lg">
      {/* Left half - LinkedIn */}
      <motion.div
        className="w-1/2 h-full bg-white flex items-center justify-center cursor-pointer"
        whileHover={{ backgroundColor: "#0077b5", scale: 1.05 }}
      >
        <Link
          href="https://linkedin.com"
          target="_blank"
          aria-label="LinkedIn"
          className="flex items-center justify-center w-full h-full " 
        >
          <FaLinkedin
            className="text-[#0077b5] transition-colors duration-300"
            size={48}
          />
        </Link>
      </motion.div>

      {/* Right half - GitHub */}
      <motion.div
        className="w-1/2 h-full bg-white flex items-center justify-center cursor-pointer"
        whileHover={{ backgroundColor: "#000000", scale: 1.05 }}
      >
        <Link
          href="https://github.com"
          target="_blank"
          aria-label="GitHub"
          className="flex items-center justify-center w-full h-full"
        >
          <FaGithub
            className="text-black transition-colors duration-300 hover:text-white"
            size={48}
          />
        </Link>
      </motion.div>
    </div>
  );
}

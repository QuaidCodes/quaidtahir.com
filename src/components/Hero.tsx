"use client";

import Link from "next/link";
import { easeIn, motion } from "framer-motion";
import { reemKufiInk } from "@/fonts/fonts";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col w-full m-30">
        <div className="flex items-start flex-col text-nowrap">
          <h1 className="text-2xl">Hello World, This is</h1>
          <motion.h1
            className="text-8xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            QUAID TAHIR
          </motion.h1>

          <motion.span
            className={`${reemKufiInk.className} text-[#990000] text-8xl mb-10 inline`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            قائد طاہر
          </motion.span>
        </div>

        <p className="text-lg mb-10 italic">Software Engineer</p>

        <div className="flex">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{
              type: "tween",
              stiffness: 100,
              duration: 0.2,
              ease: easeIn,
            }}
          >
            <Link href="/portfolio" className="hero-btns">
              Portfolio
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{
              type: "tween",
              stiffness: 100,
              duration: 0.2,
              ease: easeIn,
            }}
          >
            <Link href="/works" className="hero-btns">
              View Works
            </Link>
          </motion.div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

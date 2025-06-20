"use client";

import Link from "next/link";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col">
      <div className="w-full flex justify-center items-center flex-col">
        <h1>Hello World, This is</h1>
        <h1 className="text-8xl">QUAID TAHIR</h1>
        <span className="text-[#990000] text-8xl mb-10">قائد طاہر </span>
      </div>
      <p className="text-lg mb-10">Software Engineer</p>
      
      <div>
        <Link className="hero-btns" href="/portfolio">
          Portfolio
        </Link>
        <Link className="hero-btns" href="/contact">
          Contact
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

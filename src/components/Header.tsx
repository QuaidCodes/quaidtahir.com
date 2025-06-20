"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/works", label: "Works" },
    // { href: "/papers", label: "Papers" },
    // { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="mt-5 fixed w-full z-10">
      <nav className=" flex justify-center items-center">
        <div className="flex">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <div className="relative px-4 py-2 rounded-full flex items-center justify-center">
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-[#f70776] z-0"
                    transition={{ type: "spring", stiffness: 200, damping: 50 }}
                  />
                )}
                <Link
                  key={href}
                  href={href}
                  className={`relative z-10 text-[12px] font-bold uppercase transition-colors ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

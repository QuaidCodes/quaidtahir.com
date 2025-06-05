"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  type NavLink = {
    href: string;
    label: string;
  };

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/papers", label: "Papers" },
    { href: "/contact", label: "Contact" },
  ];

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.header
          initial={{y:-80, opacity:0}}
          animate={{y:0, opacity:1}}
          exit={{y:-80, opacity: 0}}
          transition={{duration: 0.3, ease: "easeOut"}}
          className="fixed top-0 left-0 w-full bg-black- text-black p-4 text-center shadow-lg"
        >
          <nav>
            <div className="text-[40px] text-center">
              <Link href="/">
                Quaid Tahir <span className="text-[#a52a2a]">قائد طاہر</span>
              </Link>
            </div>
            <ul className="flex justify-center">
              <div className="flex">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href;

                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`px-3 py-2 text-[20px] font-bold rounded-md transition-colors ${
                          isActive
                            ? " text-[#a52a2a] underline"
                            : " hover:text-[#a52a2a]"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </div>
            </ul>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

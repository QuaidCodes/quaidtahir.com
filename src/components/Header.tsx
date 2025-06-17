"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  type NavLink = {
    href: string;
    label: string;
  };

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/papers", label: "Papers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      <motion.header className="top-0 left-0 w-full h-[56px] p-4 text-center shadow-lg fixed">
        <nav>
          <div className="text-[40px] text-center mb-4">
            <Link href="/" className="uppercase">
              Quaid Tahir <span className="text-[#990000]">قائد طاہر</span>
            </Link>
          </div>
          <ul className="flex justify-center">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-4 text-[12px] font-bold rounded-md transition-colors uppercase ${
                      isActive
                        ? "text-[#FFEA00] before:content-['▪'] before:mr-1"
                        : "hover:text-[#FFEA00]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.header>
    </AnimatePresence>
  );
}

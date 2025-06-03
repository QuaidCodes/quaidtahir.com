"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
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

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="pt-3"
    >
      <nav>
        <div className="text-[40px] text-center">
          Quaid Tahir <span className="text-[#a52a2a]">قائد طاہر</span>
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
  );
}

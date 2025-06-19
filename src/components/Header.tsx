"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/creation", label: "Creations" },
    { href: "/papers", label: "Papers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header>
      <nav className="flex justify-center gap-5">
        {navItems.map(({ href, label }) => (
          <Link key={href} href={href} className="hover:underline p-5">{label}</Link>
        ))}
      </nav>
    </header>
  );
}

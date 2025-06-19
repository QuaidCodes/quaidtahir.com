"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/works", label: "Works" },
    { href: "/papers", label: "Papers" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="mt-5 fixed w-full z-10">
      <nav className=" flex justify-center items-center">
        <div className="flex justify-center rounded-full bg-[#181818]">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-3 text-[12px] font-bold rounded-md text-white  uppercase  ${
                  isActive
                    ? " text-white before:content-['▪'] before:mr-1"
                    : " hover:text-green-500 hover:underline"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  type NavLink = {
    href: string;
    label: string;
  };

  const navLinks: NavLink[] = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/portfolio",
      label: "Portfolio",
    },
    {
      href: "/papers",
      label: "Papers",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  // className={`px-3 py-2 rounded-md font-medium transition-colors ${
  //                     isActive
  //                       ? 'bg-blue-600 text-white dark:bg-blue-50 0'
  //                       : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
  //                   }`}
  //                   aria-current={isActive ? 'page' : undefined}

  return (
    <header className="pt-3">
      <nav>
        <div className="text-[40px] text-center">Quaid Tahir قائد طاہر</div>
        <ul className="flex justify-center">

          <div className="flex">
            {navLinks.map(({ href, label }) => {
              return (
                <li key={href}>
                  <Link href={href} className="py-4 px-7 hover:underline hover:text-gold">
                    {label}
                  </Link>
                </li>
              );
            })}
          </div>
        </ul>
      </nav>
    </header>
  );
}

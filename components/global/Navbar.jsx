"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const nav = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "about",
      href: "/about",
    },
    {
      name: "contact",
      href: "/contact",
    },
    {
      name: "shop",
      href: "/shop",
    },
  ];

  return (
    <>
      <nav>
        <div className="xl:px-10 py-3 hidden xl:block">
          <ul className="flex items-center justify-center gap-10">
            {nav.map((el, ind) => (
              <li
                key={ind}
                className={`relative capitalize text-lg transition-colors duration-300
    ${
      pathname === el.href
        ? "text-[#0A4DB8]"
        : "text-gray-600 hover:text-[#0A4DB8]"
    }
    after:absolute after:left-0 after:-bottom-1
    after:h-0.5 after:w-full after:bg-[#0A4DB8]
    after:origin-left after:scale-x-0 after:transition-transform after:duration-300
    ${pathname === el.href ? "after:scale-x-100" : "hover:after:scale-x-100"}
  `}
              >
                <Link href={el.href}>{el.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
      </nav>
    </>
  );
};

export default Navbar;

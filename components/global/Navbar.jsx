"use client";

import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import Navigation from "../ui/Navigation";
import CategoryComponent from "../ui/CategoryComponent";

const Navbar = () => {
  const pathname = usePathname();
  // console.log(pathname);
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
        <div className="hidden md:flex items-center px-2 md:px-10 lg:px-20">
          <CategoryComponent />
          <Navigation />
        </div>
        <Separator />
      </nav>
    </>
  );
};

export default Navbar;

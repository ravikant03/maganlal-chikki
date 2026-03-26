"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Shop", href: "/shop" },
  ];

  return (
    <div className="w-full hidden md:flex justify-center py-4">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-5 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-gray-200">
          
          {navItems.map((item) => (
            <NavigationMenuItem
              key={item.href}
              className={`text-md font-semibold ${
                pathname === item.href
                  ? "border rounded bg-gray-100 text-blue-700!"
                  : "text-gray-700"
              } transition-all duration-150`}
            >
              <NavigationMenuLink asChild>
                <Link href={item.href}>{item.name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
}

export default Navigation;
"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/features/sidebar/sidebar.Slice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./separator";
import { useRouter } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.open);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Shop", href: "/shop" },
    { name: "WishList", href: "/wishlist" },
  ];
  const category = [
    { name: "Chikki", id: 1 },
    { name: "Fudge", id: 2 },
    { name: "Dry Fruits", id: 4 },
    { name: "Namkeens", id: 5 },
  ];

  const handleClick = (href) => {
    router.push(href);
    dispatch(toggleSidebar(false));
  };

  const handleCategory = (el) => {
    router.push(
      `/category/${el.name.toLowerCase().replace(/\s+/g, "-")}/${el.id}`,
    );
    dispatch(toggleSidebar(false));
  };

  return (
    <Sheet open={isOpen} onOpenChange={() => dispatch(toggleSidebar(false))}>
      <SheetContent side="left" className="flex flex-col [&>button]:hidden">
        <Tabs defaultValue="menu" className="w-full!">
          <SheetTitle>
            <TabsList className="w-full h-15! py-2">
              <TabsTrigger
                value="menu"
                className="w-1/2 text-lg data-[state=active]:bg-blue-700 data-[state=active]:text-white text-gray-600"
              >
                Menu
              </TabsTrigger>

              <TabsTrigger
                value="category"
                className="w-1/2 text-lg data-[state=active]:bg-blue-700 data-[state=active]:text-white text-gray-600"
              >
                Category
              </TabsTrigger>
            </TabsList>
          </SheetTitle>
          <TabsContent value="menu">
            <ul className="flex flex-col items-start justify-center gap-2 text-lg mt-3 px-2 text-gray-700 font-semibold">
              {menuItems.map((el, ind) => (
                <div key={ind} className="mb-2 w-full">
                  <li onClick={() => handleClick(el.href)}>{el.name}</li>
                  <Separator className=" bg-blue-700/50" />
                </div>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="category">
            <ul className=" flex flex-col items-start justify-center gap-2 text-lg mt-3 px-2 text-gray-700 font-semibold">
              {category.map((el, ind) => (
                <div key={ind} className="mb-2 w-full">
                  <li onClick={() => handleCategory(el)}>{el.name}</li>
                  <Separator className="w-full! bg-blue-700" />
                </div>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
        <SheetFooter>
          <SheetClose asChild>
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="mt-auto w-full bg-blue-700 text-white py-2 rounded-md"
            >
              Close
            </button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;

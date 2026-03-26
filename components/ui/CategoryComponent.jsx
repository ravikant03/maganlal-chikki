"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function CategoryComponent() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("Category");

  const categories = [
    { name: "Chikki", id: 1 },
    { name: "Fudge", id: 2 },
    { name: "Dry Fruits", id: 4 },
    { name: "Namkeen", id: 5 },
  ];

  const handleClick = (item) => {
    router.push(
      `/category/${item.name.toLowerCase().replace(/\s+/g, "-")}/${item.id}`,
    );
    setSelectedCategory(item.name);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-[#0A4DB8] hover:bg-blue-600! text-white text-lg px-6! py-2! h-full rounded flex items-center gap-2 shadow-sm transition-all focus:riong-0! hover:ring-0!">
          <span>{selectedCategory}</span>
          <IoIosArrowDown className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-48 mt-2 rounded-xl border shadow-lg bg-white p-2"
      >
        {categories.map((item, i) => (
          <DropdownMenuItem
            key={i}
            className="cursor-pointer rounded-md px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition text-md"
            onClick={() => handleClick(item)}
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CategoryComponent;

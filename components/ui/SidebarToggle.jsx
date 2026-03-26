"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/redux/features/sidebar/sidebar.Slice";

function SidebarToggle() {
  const dispatch = useDispatch();

  return (
    <div>
      <GiHamburgerMenu
        className="text-2xl md:text-3xl cursor-pointer"
        onClick={() => dispatch(toggleSidebar(true))}
      />
    </div>
  );
}

export default SidebarToggle;

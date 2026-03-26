"use client";

import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function CartIcon() {
  const cartItems = useSelector(
    (state) => state.cart?.cart || []
  );

  const router = useRouter();

  return (
    <div className="relative w-fit group cursor-pointer" onClick={() => router.push("/shop") }>
      {/* Cart Icon */}
      <MdOutlineShoppingCart className="text-2xl md:text-3xl lg:text-4xl transition-transform duration-200 group-hover:scale-110" />

      {/* Badge */}
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center 
        rounded-full bg-red-500 text-white text-[10px] md:text-xs font-semibold shadow-md 
        animate-bounce">
          {cartItems.length}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
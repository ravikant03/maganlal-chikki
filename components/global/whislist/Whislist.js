"use client";

import WishlistCard from "@/components/ui/WishlistCard";
import React from "react";
import { useSelector } from "react-redux";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlistCart);

  return (
    <>
      <div className="px-2 md:px-10 lg:px-20 my-2 flex flex-col gap-3">
        {wishlist.map((product, ind) => (
          <WishlistCard key={ind} product={product} />
        ))}
        {/* <WishlistCard/> */}
      </div>
    </>
  );
}

export default Wishlist;

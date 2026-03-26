"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "@/redux/features/wishlist/wishlist.Slice";

function WishlistCard({ product }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromWishlist({ id: product.id }));
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full md:w-fit">
        <CardContent className="flex flex-col md:flex-row gap-5 md:gap-10">
          
          {/* image */}
          <div className="h-40 md:w-50 w-full">
            <Image
              src={product.images?.[0]}
              alt={product.title}
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
          </div>

          {/* content */}
          <div className="md:w-md flex flex-col gap-3 justify-center">
            
            {/* title */}
            <CardTitle className="text-base md:text-xl font-bold">
              {product.title}
            </CardTitle>

            {/* description */}
            <CardDescription className="line-clamp-2 text-xs md:text-md">
              {product.full_description}
            </CardDescription>

            {/* price + remove */}
            <div className="group w-fit cursor-pointer">
              <p className="font-bold text-base md:text-xl text-blue-700">
                Rs. {product.price}
              </p>

              <div
                onClick={handleRemove}
                className="flex items-center gap-1.5 text-red-400 mt-3 border rounded-full px-2 bg-gray-200 text-sm py-1.5 font-semibold hover:bg-red-100 transition"
              >
                <MdDelete className="group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-150" />
                <span>Remove</span>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default WishlistCard;
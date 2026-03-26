"use client";

import CartCard from "@/components/ui/CartCard";
import CheckOutCard from "@/components/ui/CheckOutCard";
import React from "react";
import { useSelector } from "react-redux";

function ShopClient() {
  const shoppingCart = useSelector((state) => state.cart.cart);

  return (
    <section>
      <h1 className="px-2 md:px-10 lg:px-20 bg-gray-100 capitalize text-lg md:text-xl lg:text-3xl py-2 md:py-4 lg:py-5 font-bold">
        Cart
      </h1>
      <div className="px-2 md:px-10 lg:px-20 bg-white flex flex-col justify-center xl:flex-row gap-5">
        <div className="w-full xl:w-[2/3] lg:max-h-[720px] max-h-[550px] overflow-y-scroll no-scrollbar my-3 flex flex-col">
          {!shoppingCart.length && (
            <div className="text-lg md:text-xl text-[#0A4DB8] font-bold h-50 md:h-70 lg:h-100 xl:h-full flex items-center xl:items-start justify-center xl:mt-5">
              No items in the cart to show
            </div>
          )}

          {shoppingCart.map((product, ind) => (
            <div key={ind}>
              <CartCard product={product} />
            </div>
          ))}
          {/* <CartCard /> */}
        </div>
        {/* checkout card */}
        <div className="my-3 w-full xl:w-fit">
          <CheckOutCard />
        </div>
      </div>
    </section>
  );
}

export default ShopClient;

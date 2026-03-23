import CartCard from "@/components/ui/CartCard";
import CheckOutCard from "@/components/ui/CheckOutCard";
import React from "react";

function ShopClient() {
  return (
    <section>
      <h1 className="px-2 md:px-10 lg:px-20 bg-gray-100 capitalize text-lg md:text-xl lg:text-3xl py-2 md:py-4 lg:py-5 font-bold">
        Cart
      </h1>
      <div className="px-2 md:px-10 lg:px-20 bg-white flex flex-col justify-center xl:flex-row gap-5">
        <div className="w-full xl:w-[2/3] lg:max-h-[720px] max-h-[550px] overflow-y-scroll no-scrollbar my-3 flex flex-col">
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          
        </div>
        {/* checkout card */}
        <div className="my-3 w-full xl:w-fit">
          <CheckOutCard/>
        </div>
      </div>
    </section>
  );
}

export default ShopClient;

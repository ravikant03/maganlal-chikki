"use client";

import ProductCard from "@/components/ui/ProductCard";
import React from "react";

function SectionThreeClient({ data }) {
  return (
    <section className="py-6">
      <div className="px-2 md:px-10 xl:px-20">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6  xl:grid-cols-4 ">
          {data.map((el, ind) => (
            <div
              key={ind}
              className="flex items-center justify-center w-full h-full "
            >
              <ProductCard
                title={el.title}
                price={el.price}
                description={el.full_description}
                image={el.images[0]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionThreeClient;

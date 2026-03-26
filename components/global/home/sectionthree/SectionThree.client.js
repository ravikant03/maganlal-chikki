"use client";

import ProductCard from "@/components/ui/ProductCard";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


function SectionThreeClient({ data, imageUrl }) {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? data : data.slice(0, 3);

  return (
    <>
      <section className="py-3 md:flex md:gap-10">
        {/* side image */}
        <div className="md:h-110 lg:h-130 md:w-[30%] lg:w-[25%] hidden md:block mb-5">
          <Image src={imageUrl} alt="image" width={500} height={500} className="w-full h-full object-center" />
        </div>
        <div className="md:w-[70%] lg:w-[75%]">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
            {visibleProducts.map((el) => (
              <motion.div key={el.id}>
                <ProductCard product={el} />
              </motion.div>
            ))}
          </motion.div>

          {/* showAll */}
          <div
            className="flex items-center justify-center my-5 cursor-pointer"
            onClick={() => setShowAll((prev) => !prev)}
          >
            <p className="bg-[#0A4DB8] text-white px-3 py-1 text-lg">
              {showAll ? "Show less" : "Show All"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionThreeClient;

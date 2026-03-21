"use client";

import ProductCard from "@/components/ui/ProductCard";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductDialogContent from "@/components/ui/ProductDialogContent";

function SectionThreeClient({ data }) {
  const [showAll, setShowAll] = useState(false);

  
  const [selectedProduct, setSelectedProduct] = useState(null);


  const visibleProducts = showAll ? data : data.slice(0, 4);

  return (
    <>
      <section className="py-6">
        <div className="px-2 md:px-10 xl:px-20">

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:grid-cols-4">
            
            {visibleProducts.map((el) => (
              <motion.div
                key={el.id}
              >
                <ProductCard
                  product={el}
                />
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

      {/* ✅ PASS DATA TO DIALOG */}
     
    </>
  );
}

export default SectionThreeClient;
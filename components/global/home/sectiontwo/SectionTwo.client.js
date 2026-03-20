"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function SectionTwoclient({ data }) {
  return (
    <section className="mt-2 mb-5">
      <div className="px-2 md:px-10 xl:px-20">
        <div className="flex gap-2 md:gap-3">
          {data.map((el, ind) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: ind * 0.2 }}
              key={ind}
              className="relative group w-60 md:w-72 lg:w-85 xl:w-120 overflow-hidden cursor-pointer"
            >
              <Image
                src={el.banner_image}
                alt="banner_image"
                height={500}
                width={500}
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionTwoclient;

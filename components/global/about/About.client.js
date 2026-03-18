"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutClient({ data }) {
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gray-100 border border-t-2">
      
      {/* ================= MAIN CONTENT ================= */}
      <div className="px-3 md:px-10 lg:px-20 flex flex-col items-center">

        {/* About Badge */}
        <motion.div
          className="my-6"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Badge className="bg-[#0A4DB8]/85 px-3 py-1 text-sm capitalize">
            About Us
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="font-semibold capitalize text-[#0A4DB8]/90 
                         text-xl md:text-3xl lg:text-5xl">
            {data[0].title}
          </h2>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full my-8 lg:my-10 
                     lg:w-3xl lg:h-[500px]"
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image
            src={data[0].image}
            alt="about image"
            height={1000}
            width={1000}
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          className="my-5"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-xs md:text-base lg:text-lg text-justify">
            {data[0].description}
          </p>
        </motion.div>

        {/* Our Team */}
        <motion.div
          className="my-5 flex flex-col items-center text-center"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="my-4 md:my-6">
            <Badge className="bg-[#0A4DB8]/85 px-3 py-1 
                              text-sm md:text-base lg:text-lg capitalize">
              Our Team
            </Badge>
          </div>

          <p className="text-xs md:text-base lg:text-lg text-justify">
            {data[0].our_team}
          </p>
        </motion.div>
      </div>

      {/* ================= HISTORY SECTION ================= */}
      <div className="bg-gray-200 
                      px-3 md:px-10 lg:px-20 
                      py-5 md:py-10 
                      flex flex-col gap-8">

        {/* History */}
        <motion.div
          className="my-3"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h5 className="font-bold text-[#0A4DB8] capitalize 
                         text-lg md:text-2xl">
            History
          </h5>

          <p className="mt-3 text-xs md:text-base lg:text-lg text-justify">
            {data[0].history}
          </p>
        </motion.div>

        {/* Client Satisfaction */}
        <motion.div
          className="my-3"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h5 className="font-bold text-[#0A4DB8] capitalize 
                         text-lg md:text-2xl">
            Client Satisfaction
          </h5>

          <p className="mt-3 text-xs md:text-base lg:text-lg text-justify">
            {data[0].client_satisfaction}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutClient;
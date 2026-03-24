"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import { motion } from "framer-motion";

function SectionOneClient({ data }) {
  return (
    <section>
      <motion.div
        className="px-2 md:px-10 mt-2 xl:px-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="w-full h-50 md:h-70 lg:h-100 xl:h-120"
        >
          {data.map((el, ind) => (
            <SwiperSlide key={ind}>
              <Image
                src={el.image}
                alt="banner"
                width={1200}
                height={1200}
                className="w-full h-full object-center md:object-cover"
                priority={ind === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export default SectionOneClient;
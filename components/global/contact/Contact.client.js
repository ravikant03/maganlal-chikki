"use client";

import ContactCard from "@/components/ui/ContactCard";
import ContactForm from "@/components/ui/ContactForm";
import { FiMapPin } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { MdLocalPostOffice } from "react-icons/md";
import { motion } from "framer-motion";

function ContactClient() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

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

  const cardContent = [
    {
      icon: FiMapPin,
      title: "address",
      content: "A108 Adam Street, New York, NY 535022",
      width: true,
    },
    {
      icon: LuPhoneCall,
      title: "Call Us",
      content: "+1 5589 55488 55",
    },
    {
      icon: MdLocalPostOffice,
      title: "Email Us",
      content: "info@example.com",
    },
  ];

  return (
    <section className="bg-gray-100">
      
      {/* Title */}
      <h2 className="text-lg md:text-2xl lg:text-3xl py-2 capitalize font-semibold px-3 md:px-10 lg:px-20">
        Contact
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white p-5 px-3 md:px-10 lg:px-20"
      >
        {/* Cards - GRID (best for responsiveness) */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cardContent.map((el, ind) => (
            <ContactCard
              key={ind}
              icon={el.icon}
              title={el.title}
              content={el.content}
              width={el.width}
            />
          ))}
        </motion.div>

        {/* Map + Form */}
        <motion.div
          variants={item}
          className="my-6 flex flex-col lg:flex-row gap-5"
        >
          {/* Map */}
          <div className="shadow-lg lg:shadow-2xl w-full h-[250px] md:h-[350px] lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.05058488745!2d-74.30916474477921!3d40.69719335405008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1773060970307!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          {/* Form */}
          <div className="w-full border shadow-lg lg:shadow-2xl px-4 py-6">
            <ContactForm />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactClient;
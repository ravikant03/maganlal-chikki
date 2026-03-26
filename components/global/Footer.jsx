import React from "react";
import { FaRegPaperPlane } from "react-icons/fa6";
import { Input } from "../ui/input";
import { MdMailOutline } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        {/* section one */}
        <section className="px-2 md:px-10 lg:px-20 bg-gray-100 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
            {/* Left Content */}
            <div className="flex items-center gap-4 max-w-xl text-center lg:text-left">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <FaRegPaperPlane className="text-xl text-[#0A4DB8]" />
              </div>

              <p className="uppercase font-semibold text-xs md:text-sm leading-relaxed text-gray-700">
                Sign up to newsletter and receive{" "}
                <span className="text-[#0A4DB8] font-bold">
                  Surprise Coupons
                </span>{" "}
                for first shopping
              </p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 w-full lg:w-auto">
              {/* Input */}
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm w-full md:w-auto">
                <Input
                  placeholder="Email Address here"
                  className="border-0 focus:ring-0 focus:border-0 w-full md:w-64 px-4"
                />
                <button className="bg-[#0A4DB8] px-5 py-2 hover:bg-[#083a8c] transition">
                  <MdMailOutline className="text-xl text-white" />
                </button>
              </div>

              {/* Social Icons */}
              <ul className="flex items-center gap-3 text-lg">
                {[CiFacebook, FaTwitter, FaPinterest, FaInstagram].map(
                  (Icon, index) => (
                    <li
                      key={index}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-600 hover:text-white hover:bg-[#0A4DB8] transition cursor-pointer"
                    >
                      <Icon />
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>
        <Separator className="bg-[#0A4DB8]" />

        {/* section two (keep for later) */}
       <section className="px-4 md:px-10 lg:px-20 bg-gray-100 w-full py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* logo */}
    <div className="flex flex-col gap-4 max-w-xs">
      <Image
        src="/nextLogo.png"
        alt="image"
        height={1000}
        width={1000}
        className="h-20 w-auto object-contain"
      />
      <p className="text-sm text-gray-600 leading-relaxed">
        A Legacy of 100+ years, sweetening people’s life…
      </p>
    </div>

    {/* quick navigation */}
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-semibold text-gray-700">
        Quick Navigation
      </h2>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="cursor-pointer hover:text-[#0A4DB8] transition">
          Home
        </li>
        <li className="cursor-pointer hover:text-[#0A4DB8] transition">
          About Us
        </li>
        <li className="cursor-pointer hover:text-[#0A4DB8] transition">
          Contact Us
        </li>
        <li className="cursor-pointer hover:text-[#0A4DB8] transition">
          Shop
        </li>
      </ul>
    </div>

    {/* important links */}
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-semibold text-gray-700">
        Important Links
      </h2>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="cursor-pointer hover:text-[#0A4DB8] transition">
          Disclaimer Policy
        </li>
        <li className="cursor-pointer hover:text-[#0A4DB8] transition">
          Privacy Policy
        </li>
        <li className="cursor-pointer hover:text-[#0A4DB8] transition">
          Cancellation Policy
        </li>
        <li className="cursor-pointer hover:text-[#0A4DB8] transition">
          Terms and Conditions
        </li>
        <li className="cursor-pointer hover:text-[#0A4DB8] transition">
          Shipping and Delivery Policy
        </li>
      </ul>
    </div>

    {/* contact info */}
    <div className="flex flex-col gap-4 text-sm text-gray-600">
      <h2 className="text-lg font-semibold text-gray-700">
        Contact Info
      </h2>

      <p className="font-medium text-gray-800">
        Maganlal Chikki Products Pvt Ltd
      </p>

      <p className="leading-relaxed">
        Shed No. 49A & B, Opp. Monsento LICEL, Nangargaon, Lonavala 410401 Dist. Pune
        <br />
        Online store: www.maganlalchikki.in
      </p>

      <p className="flex items-start gap-2">
        <FaPhoneAlt className="mt-1 text-[#0A4DB8]" />
        <span>
          Ph: +91 2114 274060 <br />
          Mobile: +91 7666530969
        </span>
      </p>
    </div>

  </div>
</section>
      </div>
    </footer>
  );
}

export default Footer;

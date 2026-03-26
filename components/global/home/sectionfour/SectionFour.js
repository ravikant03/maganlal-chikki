import React from "react";
import { FiTruck } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";

const Content = ({ icon: Icon, title, text }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon className="text-2xl md:text-3xl lg:text-5xl text-blue-800" />
      <p className="text-md md:text-lg lg::text-xl font-bold uppercase text-wrap text-center whitespace-break-spaces">{title}</p>
      <p className="text-sm md:text-base capitalize text-gray-600 text-center">{text}</p>
    </div>
  );
};

function SectionFour() {
  return (
    <section className="px-2 md:px-10 lg:px-20 bg-gray-100 mb-5">
      <div className=" w-full py-12 flex flex-col md:flex-row items-center justify-between gap-7">
        {/* shipping */}
        <Content
          icon={FiTruck}
          title="Free Shipping"
          text="Free shipping on order above Rs.999"
        />
        <Content
          icon={CiLock}
          title="Secure Payment"
          text="We value your security"
        />
        <Content
          icon={MdOutlineSupportAgent}
          title="Online Support"
          text="We have support 24/7"
        />
        <Content
          icon={BsCashCoin }
          title="Quick and Easy Payments"
          text="Pan India Delivery"
        />
      </div>
    </section>
  );
}

export default SectionFour;

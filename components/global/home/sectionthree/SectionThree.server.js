import React from "react";
import SectionThreeClient from "./SectionThree.client";

export async function getSectionThreeData(id = 1) {
  const response = await fetch(
    `https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Section Data");
  }

  return response.json();
}

const SectionWrapper = ({ title, children }) => {
  return (
    <div className="px-3 md:px-10 xl:px-20">
      {/* Header */}
      <div className="bg-gray-100 rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between">
          {/* Title */}
          <div className="bg-[#0A4DB8] text-white px-6 py-2 font-semibold text-base md:text-lg rounded-r-full shadow">
            {title}
          </div>

          {/* Filters */}
          <div className="hidden md:flex gap-6 pr-6 text-sm font-medium">
            <p className="text-gray-600 hover:text-red-500 cursor-pointer transition">
              Latest Products
            </p>
            <p className="text-gray-600 hover:text-red-500 cursor-pointer transition">
              Featured Products
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-2">{children}</div>
    </div>
  );
};

const SectionThreeServer = async () => {
  const chikki = await getSectionThreeData(1);
  const fudge = await getSectionThreeData(2);
  const dryFruit = await getSectionThreeData(4);
  const namkeen = await getSectionThreeData(5);

  return (
    <>
      <SectionWrapper title="Chikki">
        <SectionThreeClient data={chikki} imageUrl="https://maganlalchikki.in/wp-content/uploads/2025/10/Diwali-Gift-Packs-864x1536.jpg"/>
      </SectionWrapper>

      <SectionWrapper title="Fudge">
        <SectionThreeClient data={fudge} imageUrl="https://maganlalchikki.in/wp-content/uploads/2020/03/331940659-768x1365.jpg"/>
      </SectionWrapper>

      <SectionWrapper title="Dry Fruits">
        <SectionThreeClient data={dryFruit} imageUrl="https://maganlalchikki.in/wp-content/uploads/2020/03/33194065912-768x1365.jpg"/>
      </SectionWrapper>

      <SectionWrapper title="Namkeen">
        <SectionThreeClient data={namkeen} imageUrl="https://maganlalchikki.in/wp-content/uploads/2020/03/3319406591-1-768x1365.jpg"/>
      </SectionWrapper>
    </>
  );
};

export default SectionThreeServer;

import React from "react";
import SectionThreeClient from "./SectionThree.client";

async function getSectionThreeData(id = 1) {
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

const SectionThreeServer = async () => {
  const data = await getSectionThreeData(1);
  const data2 = await getSectionThreeData(2);
  const data3 = await getSectionThreeData(4);
  const data4 = await getSectionThreeData(5);
  return (
    <>
      <SectionThreeClient data={data} />
      <SectionThreeClient data={data2} />
      <SectionThreeClient data={data3} />
      <SectionThreeClient data={data4} />
    </>
  );
};

export default SectionThreeServer;

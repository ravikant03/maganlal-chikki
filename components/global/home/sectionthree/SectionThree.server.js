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
  const chikki = await getSectionThreeData(1);
  const fudge = await getSectionThreeData(2);
  const dryFruit = await getSectionThreeData(4);
  const namkeen = await getSectionThreeData(5);
  return (
    <>
      <SectionThreeClient data={chikki} />
      <SectionThreeClient data={fudge} />
      <SectionThreeClient data={dryFruit} />
      <SectionThreeClient data={namkeen} />
    </>
  );
};

export default SectionThreeServer;

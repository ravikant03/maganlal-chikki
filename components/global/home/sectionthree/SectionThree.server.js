import React from "react";
import SectionThreeClient from "./SectionThree.client";

async function getSectionThreeData() {
  const response = await fetch(
    `https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=${1}`,
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
  const data = await getSectionThreeData();
  return (
    <>
      <SectionThreeClient data={data} />
    </>
  );
};

export default SectionThreeServer;

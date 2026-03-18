import SectionOneClient from "./SectionOne.client";

async function getSectionOneData() {
  const res = await fetch(
    "https://appy.trycatchtech.com/v3/maganlalchikki/home_image_gallery",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Section One data");
  }

  return res.json();
}

export default async function SectionOne() {
  const data = await getSectionOneData();
  return <SectionOneClient data={data} />;
}
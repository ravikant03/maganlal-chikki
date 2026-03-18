import SectionTwoclient from "./SectionTwo.client";

async function getSectionTwoData() {
  const res = await fetch(
    "https://appy.trycatchtech.com/v3/maganlalchikki/banner_image",
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Section Two Data");
  }

  return res.json();
}

async function SectionTwoServer() {
  const data = await getSectionTwoData();

  return (
    <>
      <SectionTwoclient data={data} />
    </>
  );
}

export default SectionTwoServer;

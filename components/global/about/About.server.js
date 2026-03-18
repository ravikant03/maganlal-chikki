import AboutClient from "./About.client";

async function getAboutData() {
  const res = await fetch(
    "https://appy.trycatchtech.com/v3/maganlalchikki/about",
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Api fetching failed");
  }

  return res.json();
}

async function AboutServer() {
  const data = await getAboutData();

  return (
    <div>
      <AboutClient data={data} />
    </div>
  );
}

export default AboutServer;

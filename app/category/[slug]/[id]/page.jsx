import { getSectionThreeData } from "@/components/global/home/sectionthree/SectionThree.server";
import ProductCard from "@/components/ui/ProductCard";
import React from "react";

async function page({ params }) {
  const newParams = await params;

  const data = await getSectionThreeData(newParams.id);

  return (
    <>
      <section className="px-2 md:px-10 lg:px-20">
        <div className="border h-10 bg-gray-200 my-5 rounded overflow-hidden">
          <p className="h-full bg-blue-400 w-fit flex items-center justiyf-center px-8 text-white capitalize font-bold text-xl">
            {newParams.slug}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:grid-cols-4">
          {data.map((product, ind) => (
            <div key={ind}>
              {" "}
              <ProductCard product={product} />{" "}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default page;

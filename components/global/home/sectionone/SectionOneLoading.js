"use client"

import { CircularLoading } from "respinner";

function SectionOneLoading() {
  return (
    <section className="px-2 md:px-10 xl:px-20 mt-2">
      <div className=" bg-gray-200 flex items-center justify-center h-40 md:h-60 lg:h-80 xl:h-96">
        <CircularLoading color="#0A4DB8" size={40} />
      </div>
    </section>
  );
}

export default SectionOneLoading;

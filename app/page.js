import { Suspense } from "react";

import SectionOne from "@/components/global/home/sectionone/SectionOne.server";
import SectionOneLoading from "@/components/global/home/sectionone/SectionOneLoading";

import SectionTwo from "@/components/global/home/sectiontwo/SectionTwo.server";


export const metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <main>
      <Suspense fallback={<SectionOneLoading />}>
        <SectionOne />
      </Suspense>

       <Suspense fallback={<SectionOneLoading />}>
        <SectionTwo />
      </Suspense>
    </main>
  );
}
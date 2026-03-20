import { Suspense } from "react";

import SectionOne from "@/components/global/home/sectionone/SectionOne.server";
import SectionOneLoading from "@/components/global/home/sectionone/SectionOneLoading";

import SectionTwo from "@/components/global/home/sectiontwo/SectionTwo.server";

import SectionThree from "@/components/global/home/sectionthree/SectionThree.server"




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

      <Suspense fallback={<SectionOneLoading/>}>
        <SectionThree/>
      </Suspense>

     
    </main>
  );
}
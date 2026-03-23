import React from "react";
import ShopClient from "@/components/global/shop/Shop.client";
import { Suspense } from "react";
import SectionOneLoading from "@/components/global/home/sectionone/SectionOneLoading";

function Shop() {
  return (
    <>
      <Suspense fallback={<SectionOneLoading />}>
        <ShopClient />
      </Suspense>
    </>
  );
}

export default Shop;

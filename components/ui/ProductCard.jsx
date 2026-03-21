"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import { FiEye } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDialogContent from "./ProductDialogContent";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cart.Slice";
import { useState } from "react";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  // console.log(product);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToCart(product));
    toast.success("Item added to cart 🛒");
  };

  return (
    <div>
      <Card className="w-full my-2 md:w-[1/3] md:h-85  lg:h-100 group hover:-translate-y-2 hover:cursor-pointer duration-150 xl:w-[1/4] hover:shadow-xl">
        <CardContent className="flex flex-col h-full">
          <div className="h-[60%]! w-full md:h-30 overflow-hidden relative">
            <Image
              src={product.images[0]}
              alt="image"
              width={1000}
              height={1000}
              className="h-full w-full object-cover group-hover:scale-105 duration-150"
            />

            {/* layover */}
            <div className="absolute top-0 left-0 h-full w-full bg-linear-to-t from-black/80 to-transparent px-2 md:hidden group-hover:block">
              <div className="my-[25%]">
                <p
                  className="bg-[#0A4DB8] rounded-full flex items-center justify-center py-2 gap-3 hover:-translate-y-2 duration-150"
                  onClick={() => handleClick(product)}
                >
                  <TiShoppingCart className="text-white text-lg transition-transform duration-150 " />
                  <span className="text-white font-semibold">Add to Cart</span>
                </p>
                <div className="flex items-center justify-around gap-5 my-4">
                  {/* icons */}
                  <div
                    className="flex items-center justify-center p-2 bg-white rounded-full w-fit hover:-translate-y-2 duration-150"
                    onClick={() => setOpen(true)}
                  >
                    <FiEye className="text-xl" />
                  </div>
                  <div className="flex items-center justify-center p-2 bg-white rounded-full w-fit  hover:-translate-y-2 duration-150">
                    <IoMdHeartEmpty className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg my-3 text-start ">{product.title}</p>
          <p className="mt-auto text-md lg:text-2xl text-[#0A4DB8] font-bold my-2">
            Rs.{product.price}
          </p>
        </CardContent>
      </Card>

      {/* dialog content */}

      <ProductDialogContent product={product} open={open} setOpen={setOpen} />
    </div>
  );
}

export default ProductCard;

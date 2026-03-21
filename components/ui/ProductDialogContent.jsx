"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function ProductDialogContent({ product, open, setOpen }) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* ✅ Responsive width */}
      <DialogContent className="max-w-none! w-[95vw] sm:w-[90vw] !md:w-[800px]  p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 my-7">
          {/* ✅ Image */}
          <div className="w-full md:w-1/2 h-55 sm:h-75 md:h-100 rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt="product"
              width={1000}
              height={1000}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* ✅ Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                {product.title}
              </DialogTitle>
            </DialogHeader>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              {product.full_description}
            </p>

            {/* ✅ Price */}
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">
              ₹{product.price}
            </p>

            <p className="text-[10px] sm:text-xs text-gray-500">
              MRP Inclusive of all taxes. Shipping extra.
            </p>

            {/* ✅ Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button className="border px-4 py-2 rounded hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

function CartCard() {
  return (
    <>
      <div className="my-2 w-full xl:w-fit">
        <Card className="rounded-2xl border-l-6 border-l-blue-500 xl:w-fit w-full relative hover:shadow-xl hidden md:block">
          <CardContent className="flex gap-10 mt-3">
            {/* image */}
            <div className="w-25 h-25">
              <Image
                src="https://appy.trycatchtech.com/uploads/maganlalchikki/17168101571.jpg"
                alt="image"
                height={1000}
                width={1000}
                className="h-full w-full object-cover"
              />
            </div>
            {/* content */}
            <div className="flex flex-col gap-5">
              <div className="max-w-sm">
                {/* title */}
                <CardTitle className="text-xl font-bold text-pretty">
                  Strawberry Groundnut Crushed Chikki \u2013 200 Gm
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2 mt-2">
                  The choicest and most popular Maganlal Chikki from Lonavla now
                  at your doorstep! This chikki contains the perfect melange of
                  crunch from a generous serving of Roasted Peanuts, Sugar,
                  Liquid Glucose, Vegetable Ghee, Permitted Strawberry and
                  endless health benefits of Jaggery. A mouthful of goodness,
                  bite after bite!
                </CardDescription>
              </div>
              {/* price+quantity+subtotal */}
              <div className="flex justify-between w-md">
                <p className="text-2xl font-bold text-blue-800">Rs. 390</p>
                {/* quantity */}
                <div className="border bg-gray-100 rounded-full px-2 py-1 flex items-center w-fit gap-3">
                  {/* minus */}
                  <div className="bg-white p-2 flex items-center justify-center rounded-full w-fit hover:bg-blue-800 group cursor-pointer">
                    <FaMinus className="text-gray-800! text-xs group-hover:text-white!" />
                  </div>
                  <p className="font-bold text-xl">1</p>
                  {/* plus */}
                  <div className="bg-white p-2 flex items-center justify-center rounded-full w-fit hover:bg-blue-800 group cursor-pointer">
                    <FaPlus className="text-gray-800! text-xs group-hover:text-white!" />
                  </div>
                </div>
                {/* subtotal */}
                <p className="text-2xl font-bold text-black">Rs. 390</p>
              </div>
            </div>
          </CardContent>

          {/* delete icon */}
          <div className="border rounded-full p-2 w-fit absolute top-2 right-2 bg-gray-100 cursor-pointer group">
            <MdDelete className="text-gray-600 group-hover:text-red-400 group-hover:animate-bounce transition-all duration-150 text-xl " />
          </div>
        </Card>

        {/* mobile screen */}
        <Card className="block md:hidden rounded-2xl border-l-6 border-l-blue-500  hover:shoadow-lg relative">
          <CardContent className="flex gap-5 items-center mt-3">
            {/* image */}
            <div className="h-[35%] w-[35%]">
              <Image
                src="https://appy.trycatchtech.com/uploads/maganlalchikki/17168101571.jpg"
                alt="image"
                height={1000}
                width={1000}
                className="h-full w-full object-cover"
              />
            </div>

            {/* content */}
            <div className="w-full">
              {/* title+description */}
              <div className="flex flex-col gap-2 ">
                <CardTitle className="text-md font-bold text-pretty">
                  Strawberry Groundnut Crushed Chikki \u2013 200 Gm
                </CardTitle>
                <CardDescription className="line-clamp-2 text-xs">
                  The choicest and most popular Maganlal Chikki from Lonavla now
                  at your doorstep! This chikki contains the perfect melange of
                  crunch from a generous serving of Roasted Peanuts, Sugar,
                  Liquid Glucose, Vegetable Ghee, Permitted Strawberry and
                  endless health benefits of Jaggery. A mouthful of goodness,
                  bite after bite!
                </CardDescription>
              </div>
              {/* price+quantity+subtotal */}
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-md font-bold text-blue-800">Rs. 390</p>
                {/* quantity */}
                <div className="border bg-gray-100 rounded-full px-2 py-1 flex items-center w-fit gap-3">
                  {/* minus */}
                  <div className="bg-white p-1.25 flex items-center justify-center rounded-full w-fit hover:bg-blue-800 group cursor-pointer">
                    <FaMinus className="text-gray-800! text-[10px] group-hover:text-white!" />
                  </div>
                  <p className="font-bold text-sm">1</p>
                  {/* plus */}
                  <div className="bg-white p-1.25 flex items-center justify-center rounded-full w-fit hover:bg-blue-800 group cursor-pointer">
                    <FaPlus className="text-gray-800! text-[10px] group-hover:text-white!" />
                  </div>
                </div>
                <p className="text-md font-bold text-black">Rs. 390</p>
              </div>
            </div>
          </CardContent>

          {/* delete icon */}
          <div className="border rounded-full p-1.25 w-fit absolute top-2 right-2 bg-gray-100 cursor-pointer group">
            <MdDelete className="text-gray-600 group-hover:text-red-400 group-hover:animate-bounce transition-all duration-150 text-sm" />
          </div>
        </Card>
      </div>
    </>
  );
}

export default CartCard;

import React from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FiShoppingBag } from "react-icons/fi";
import { Input } from "./input";
import { Separator } from "./separator";
import { GiShoppingCart } from "react-icons/gi";
import { CiCreditCard1 } from "react-icons/ci";
import { BsPaypal } from "react-icons/bs";
import { FaGooglePay } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

function CheckOutCard() {
  return (
    <div className="w-full xl:w-md">
      <Card className="pt-0 overflow-hidden">
        <CardTitle>
          {/* order overview */}
          <h2 className="flex items-center justify-start gap-3 bg-[#0A4DB8] text-white py-5 px-3">
            <FiShoppingBag className="text-lg md:text-2xl" />
            <span className="capitalize text-lg md:text-2xl font-bold">
              Order Overview
            </span>
          </h2>
        </CardTitle>
        <CardContent>
          {/* promo code */}
          <div>
            <p className="text-sm text-gray-600">Have a promo code?</p>
            <div className="flex items-center rounded-full bg-white border border-gray-300 shadow-sm overflow-hidden w-fit mt-3">
              <Input
                placeholder="Enter coupon code"
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-4 py-2 md:w-sm xl:w-xs"
              />

              <button className="bg-[#0A4DB8] hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium transition-all duration-200">
                Apply
              </button>
            </div>
          </div>
          {/*  */}
          <Separator className="my-5" />

          {/* main content */}
          <div className="flex flex-col gap-5">
            {/* subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700 capitalize text-xs md:text-base">
                Subtotal
              </span>
              <span className="font-bold text-black text-xs md:text-base">
                Rs. 700
              </span>
            </div>
            {/* delivery */}
            <div className="flex flex-col gap-2">
              <span className="text-xs md:text-base">Delivery</span>
              {/* radio input */}
              <div className="flex flex-col gap-2 ml-5">
                <label className="text-xs md:text-base">
                  <input
                    type="radio"
                    defaultChecked
                    className="mr-2"
                    name="delivery"
                  />
                  Standard -Rs.49
                </label>
                <label className="text-xs md:text-base">
                  <input type="radio" className="mr-2" name="delivery" />
                  Express -Rs.99
                </label>
                <label className="text-xs md:text-base">
                  <input type="radio" className="mr-2" name="delivery" />
                  Free(orders above 500)
                </label>
              </div>
            </div>
            {/* estimated tax */}
            <div className="flex items-center justify-between">
              <span className="capitalize text-gray-700 text-xs md:text-base">
                Estimated Tax
              </span>
              <span className="text-black font-bold text-xs md:text-base">
                Rs. 100
              </span>
            </div>
            {/* savings */}
            <div className="flex items-center justify-between">
              <span className="capitalize text-gray-700 text-xs md:text-base">
                Savings
              </span>
              <span className="text-black font-bold text-xs md:text-base">
                Rs. 00{" "}
              </span>
            </div>
            <Separator className="bg-blue-700" />
            {/* grand total */}
            <div className="flex items-center justify-between">
              <span className="capitalize font-bold text-black text-lg md:text-xl">
                Grand Total
              </span>
              <span className="text-[#0A4DB8] font-bold text-xl md:text-2xl">
                Rs. 1000
              </span>
            </div>
            <Separator className="bg-blue-700" />

            {/* complete purchase */}
            <div className="rounded-full w-full flex items-center justify-center gap-3 bg-[#0A4DB8] py-3 cursor-pointer group">
              <span className="font-bold text-white text-lg md:text-xl">
                Complete Purchase
              </span>
              <GiShoppingCart className="text-white text-lg md:text-xl group-hover:translate-x-2 transition-all duration-150" />
            </div>
            <Separator />

            {/* secure payment methods */}
            <CardFooter className="flex items-center justify-center">
              <div>
                <span className="uppercase text-gray-400 text-sm font-semibold">
                  secure payment methods
                </span>
                <ul className="flex items-center justify-center gap-5 mt-3">
                  <CiCreditCard1 className="text-lg md:text-2xl text-gray-500! cursor-pointer hover:text-blue-700" />
                  <BsPaypal className="text-lg md:text-2xl text-gray-500! cursor-pointer hover:text-blue-700" />
                  <FaGooglePay className="text-lg md:text-2xl text-gray-500! cursor-pointer hover:text-blue-700" />
                  <FaBuildingColumns className="text-lg md:text-2xl text-gray-500! cursor-pointer hover:text-blue-700" />
                </ul>
              </div>
            </CardFooter>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CheckOutCard;

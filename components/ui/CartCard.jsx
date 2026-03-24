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
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/redux/features/cart/cart.Slice";

function CartCard({ product }) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(updateQuantity({ id: product.id, type: "increment" }));
  };

  const decreaseQuantity = () => {
    dispatch(updateQuantity({ id: product.id, type: "decrement" }));
  };

  const deleteProduct = () => {
    dispatch(removeFromCart(product.id));
  }

  return (
    <>
      <div className="my-2 w-full xl:w-fit">
        <Card className="rounded-2xl border-l-6 border-l-blue-500 xl:w-fit w-full relative hover:shadow-xl hidden md:block">
          <CardContent className="flex gap-10 mt-3">
            {/* image */}
            <div className="w-25 h-25">
              <Image
                src={product.images[0]}
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
                  {product.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2 mt-2">
                  {product.full_description}
                </CardDescription>
              </div>
              {/* price+quantity+subtotal */}
              <div className="flex justify-between w-md">
                <p className="text-2xl font-bold text-blue-800">
                  Rs. {product.price}{" "}
                </p>
                {/* quantity */}
                <div className="border bg-gray-100 rounded-full px-2 py-1 flex items-center w-fit gap-3">
                  {/* minus */}
                  <div
                    className="bg-white p-2 flex items-center justify-center rounded-full w-fit hover:bg-blue-800 group cursor-pointer"
                    onClick={decreaseQuantity}
                  >
                    <FaMinus className="text-gray-800! text-xs group-hover:text-white!" />
                  </div>
                  <p className="font-bold text-xl">{product.quantity}</p>
                  {/* plus */}
                  <div
                    className="bg-white p-2 flex items-center justify-center rounded-full w-fit hover:bg-blue-800 group cursor-pointer"
                    onClick={increaseQuantity}
                  >
                    <FaPlus className="text-gray-800! text-xs group-hover:text-white!" />
                  </div>
                </div>
                {/* subtotal */}
                <p className="text-2xl font-bold text-black">
                  Rs. {product.price * product.quantity}
                </p>
              </div>
            </div>
          </CardContent>

          {/* delete icon */}
          <div className="border rounded-full p-2 w-fit absolute top-2 right-2 bg-gray-100 cursor-pointer group" onClick={deleteProduct}>
            <MdDelete className="text-gray-600 group-hover:text-red-400 group-hover:animate-bounce transition-all duration-150 text-xl " />
          </div>
        </Card>

        {/* mobile screen */}
        <Card className="block md:hidden rounded-2xl border-l-6 border-l-blue-500  hover:shoadow-lg relative">
          <CardContent className="flex gap-5 items-center mt-3">
            {/* image */}
            <div className="h-[35%] w-[35%]">
              <Image
                src={product.images[0]}
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
                  {product.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-xs">
                  {product.full_description}
                </CardDescription>
              </div>
              {/* price+quantity+subtotal */}
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-md font-bold text-blue-800">Rs. {product.price}</p>
                {/* quantity */}
                <div className="border bg-gray-100 rounded-full px-2 py-1 flex items-center w-fit gap-3">
                  {/* minus */}
                  <div className="bg-white p-1.25 flex items-center justify-center rounded-full w-fit hover:bg-blue-800 group cursor-pointer" onClick={decreaseQuantity}>
                    <FaMinus className="text-gray-800! text-[10px] group-hover:text-white!" />
                  </div>
                  <p className="font-bold text-sm">{product.quantity}</p>
                  {/* plus */}
                  <div className="bg-white p-1.25 flex items-center justify-center rounded-full w-fit hover:bg-blue-800 group cursor-pointer" onClick={increaseQuantity}>
                    <FaPlus className="text-gray-800! text-[10px] group-hover:text-white!" />
                  </div>
                </div>
                <p className="text-md font-bold text-black">Rs. {product.quantity*product.price}</p>
              </div>
            </div>
          </CardContent>

          {/* delete icon */}
          <div className="border rounded-full p-1.25 w-fit absolute top-2 right-2 bg-gray-100 cursor-pointer group" onClick={deleteProduct}>
            <MdDelete className="text-gray-600 group-hover:text-red-400 group-hover:animate-bounce transition-all duration-150 text-sm" />
          </div>
        </Card>
      </div>
    </>
  );
}

export default CartCard;

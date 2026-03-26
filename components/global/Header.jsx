import Image from "next/image";
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import SidebarToggle from "../ui/SidebarToggle";
import { Separator } from "../ui/separator";
import Link from "next/link";
import CartIcon from "../ui/CartIcon";
import WhislistIcon from "../ui/WhislistIcon";
import Sidebar from "../ui/Sidebar";

const Header = () => {
  return (
    <>
      {/* lg screen */}
      <header>
        <div className="px-20 xl:flex items-center justify-between hidden h-[12vh]">
          {/* logo */}
          <Link href={"/"}>
            <div className="lg:h-fit lg:w-fit xl:w-70 cursor-pointer">
              <Image
                src="/nextLogo.png"
                alt="logo"
                width={500}
                height={500}
                className="h-full w-full object-contain"
              />
            </div>
          </Link>
          {/* search */}
          <div className="w-md rounded-full border flex items-center relative shadow-md">
            <Input
              placeholder="Search..."
              className="text-lg! h-full border-0 px-5 py-3 w-sm
               focus:outline-none focus:ring-0
               focus-visible:outline-none focus-visible:ring-0"
            />
            {/* icon */}
            <div className="border flex items-center justify-center px-4 py-2 bg-[#0A4DB8] rounded-full absolute right-1 -translate-y-[1/2] cursor-pointer hover:bg-[#0A4DB8]/85">
              <IoSearch className="text-white text-2xl font-bold" />
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <IoPersonOutline className="text-3xl cursor-pointer" />
            </div>
            <WhislistIcon />
            <CartIcon />
          </div>
        </div>

        {/* mobile screen */}
        <div className="px-2 md:px-10 flex items-center justify-between h-[10vh] xl:hidden">
          {/* logo */}
          <div className="w-30 h-fit md:w-60 md:h-fit">
            <Image
              src="/nextLogo.png"
              alt="logo"
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </div>

          {/*  */}
          <div className="flex items-center gap-3 md:gap-5 ">
            {/* search */}
            <IoSearch className="text-2xl md:text-3xl cursor-pointer" />
            <IoPersonOutline className="text-2xl md:text-3xl cursor-pointer" />
            <WhislistIcon />
            <CartIcon />
            <SidebarToggle/>
            <Sidebar/>
          </div>
        </div>
        <Separator className="mt-3" />
      </header>
    </>
  );
};

export default Header;

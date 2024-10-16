"use client";

import { User } from "lucide-react";
import { MobileSidebar } from "./MobileSideBar";

const Navbar = () => {
  return (
    <div className="flex gap-x-2 items-center bg-white h-[86px]">
      <MobileSidebar />
      <div className="flex w-full justify-end mr-3">
        <User className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Navbar;

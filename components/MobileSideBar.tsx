"use client";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="md:hidden cursor-pointer">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-[250px] overflow-y-auto">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

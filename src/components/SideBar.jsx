import { sidebarData } from "@/lib/data";
import React from "react";
import Button from "./Button";

export default function SideBar() {
  return (
    <div className="bg-white h-screen w-[15rem] text-black flex flex-col items-center">
      <div className="pt-5">
        <p className="font-bold text-3xl">Veed.io</p>
      </div>
      <div className="flex flex-col mt-5">
        {sidebarData.map((link) => (
          <Button
            key={link.id}
            className="m-2 bg-transparent hover:bg-gray-300 text-gray-700 hover:shadow-md text-md hover:font-bold w-[13rem]"
          >
            {link.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

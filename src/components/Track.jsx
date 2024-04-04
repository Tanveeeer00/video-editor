import React from "react";
import AudioWave from "./AudioWave";
import { FaEye } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { ImUnlocked } from "react-icons/im";

export default function Track() {
  return (
    <div className="flex h-full">
      <div className="bg-slate-800 w-32">
        <div className="border border-white h-6"></div>
        <div className="border border-white h-auto w-full flex justify-between items-center px-1 md:px-2">
          <p className="text-lg font-bold">Track 1</p>
          <span className="flex flex-col items-center">
            <FaRegEye className="my-1 text-gray-200" />
            <ImUnlocked className="my-1 text-gray-200" />
          </span>
        </div>
        <div className="border border-white h-auto w-full flex justify-between items-center px-1 md:px-2">
          <p className="text-lg font-bold">Track 2</p>
          <span className="flex flex-col items-center">
            <FaRegEye className="my-1 text-gray-200" />
            <ImUnlocked className="my-1 text-gray-200" />
          </span>
        </div>
      </div>

      <div className="w-full">
        <AudioWave />
      </div>
    </div>
  );
}

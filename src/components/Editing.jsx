import React from "react";
import Assets from "./Assets";
import Dropdown from "./Dropdown";
import Properties from "./Properties";
import Tools from "./Tools";
import PlayToolbar from "./PlayToolbar";
import { FaArrowPointer } from "react-icons/fa6";
import { FaRegHand } from "react-icons/fa6";
import { FaCrop } from "react-icons/fa6";
import Track from "./Track";

export default function Editing() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="text-white container max-h-[52rem] overflow-y-auto col-span-3 h-[25rem] relative border border-white/30 bg-slate-900">
          <Assets />
        </div>
        <div className="text-white border border-white/30 overflow-y-auto bg-slate-800 container flex flex-col items-center h-[25rem] col-span-6">
          <div className="flex justify-center items-center my-2">
            <FaArrowPointer className="mx-1 h-5 w-5" />
            <FaRegHand className="mx-2 h-5 w-5" />
            <FaCrop className="ml-1 mr-3 h-5 w-5" />
            <Dropdown />
          </div>
          <div className="flex justify-center items-center w-full h-full mb-4 border border-white/40 bg-slate-900">
            <p className=" text-2xl">Add Video</p>
          </div>
        </div>
        <div className="text-white overflow-y-auto container col-span-3 h-[25rem] border border-white/30 bg-slate-900">
          <div>
            <Properties />
          </div>
        </div>
      </div>
      <div>
        <PlayToolbar />
      </div>
      <div>
        <Tools />
      </div>
      <Track />
    </div>
  );
}

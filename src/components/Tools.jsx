import React from "react";
import ProgressBar from "./ProgressBar";
import { FaRedoAlt } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { HiOutlineScissors } from "react-icons/hi2";
import { MdContentCopy } from "react-icons/md";
import { FaPaste } from "react-icons/fa";
import { GrSplit } from "react-icons/gr";
import { LuZoomIn } from "react-icons/lu";
import { LuZoomOut } from "react-icons/lu";

export default function Tools() {
  return (
    <div className="w-full border border-white text-white h-8 flex justify-start pl-5 items-center">
      <FaUndoAlt className="h-5 w-5 mx-1" />
      <FaRedoAlt className="h-5 w-5 mx-1" />
      <HiOutlineScissors className="h-5 w-5 mx-1" />
      <MdContentCopy className="h-5 w-5 mx-1" />
      <FaPaste className="h-5 w-5 mx-1" />
      <GrSplit className="h-5 w-5 mx-1" />
      <LuZoomOut className="h-5 w-5 mx-1" />
      <ProgressBar className="w-16" />
      <LuZoomIn className="h-5 w-5 mx-1" />
    </div>
  );
}

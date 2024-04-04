import React from "react";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import { FaRedoAlt } from "react-icons/fa";

export default function Properties() {
  return (
    <div className="w-full h-full">
      <div className="flex md:justify-end justify-center mt-2 mr-2">
        <svg
          className="w-6 h-6 mt-2 mr-1 mb-0 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"
          />
        </svg>

        <Button className="h-10 text-sm w-16 mr-3">Export</Button>
      </div>
      <div>
        <p className="text-center my-4 font-bold underline text-lg">
          Properties
        </p>
        <div className="flex justify-end md:mr-5 my-3 items-center md:flex-row flex-col">
          <p>Scale</p>
          <div className="my-3 ml-3">
            <ProgressBar className="w-[5rem] mr-3" />
          </div>
          <Button className="w-10 text-center text-xs pl-1 ml-0 h-8 bg-slate-900">
            100%
          </Button>
        </div>
        <div className="flex justify-end md:mr-5 items-center md:flex-row flex-col">
          <p>Opacity</p>
          <div className="my-3 ml-3">
            <ProgressBar className="w-[5rem] mr-3" />
          </div>
          <Button className="w-10 text-center text-xs pl-1 ml-0 h-8">
            100%
          </Button>
        </div>
      </div>
      <div className=" my-4">
        <p className="text-center md:text-start ml-3 mb-3 text-lg underline font-bold">
          Rotation
        </p>
        <div className="flex flex-col md:mr-5">
          <div className="flex justify-center md:justify-end items-center">
            <FaRedoAlt className="mr-2" />
            <p className="mr-3">Z</p>
            <Button className="w-9 text-xs pl-2 pt-1 h-6">0.0</Button>
          </div>
          <div className="flex justify-center md:justify-end items-center">
            <FaRedoAlt className="mr-2" />
            <p className="mr-3 my-3">Y</p>
            <Button className="w-9 text-xs pl-2 pt-1 h-6">0.0</Button>
          </div>
          <div className="flex justify-center md:justify-end items-center">
            <FaRedoAlt className="mr-2" />
            <p className="mr-3">X</p>
            <Button className="w-9 text-xs pl-2 pt-1 h-6 ">0.0</Button>
          </div>
        </div>
      </div>
      <div className="my-2">
        <p className="text-center md:text-start ml-3 mb-3 text-lg underline font-bold">
          Position
        </p>
        <div className="flex flex-col md:mr-5">
          <div className="flex justify-center md:justify-end items-center">
            <p className="mr-3">X</p>
            <Button className="w-9 text-xs pl-2 pt-1 h-6 ">0.0</Button>
          </div>
          <div className="flex justify-center md:justify-end items-center">
            <p className="mr-3 my-3">Y</p>
            <Button className="w-9 text-xs pl-2 pt-1 h-6">0.0</Button>
          </div>
          <div className="flex justify-center md:justify-end items-center">
            <p className="mr-3">Z</p>
            <Button className="w-9 text-xs pl-2 pt-1 h-6">0.0</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

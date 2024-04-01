import Image from "next/image";
import React from "react";
import { projectData } from "@/lib/data";

export default function Card() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-3">
      {projectData.map((index) => (
        <div key={index.id} className="mt-2">
          <Image
            src={index.Image}
            alt={index.alt}
            height={400}
            width={400}
            className="ml-1"
          />
          <div className="font-bold text-sm mt-2 ml-2">{index.title}</div>
          <div className="text-xs text-gray-400 ml-2">{index.time}</div>
        </div>
      ))}
    </div>
  );
}

import React from "react";

export default function ProgressBar({ className = "", children }) {
  return (
    <div>
      <div className={`bg-gray-200 rounded-full h-2.5 ${className}`}>
        <div
          className={`w-1/2 h-2.5 bg-slate-500 rounded-full ${children}`}
        ></div>
      </div>
    </div>
  );
}

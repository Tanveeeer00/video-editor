import React from "react";

export default function Button({
  children,
  className = "",
  textColor = "text-white",
  bgColor = "bg-slate-800",
  ...props
}) {
  return (
    <button
      className={`border border-white py-2 px-4 ${bgColor} ${textColor} ${className} hover:bg-slate-200 hover:text-black rounded-lg`}
      {...props}
    >
      {children}
    </button>
  );
}

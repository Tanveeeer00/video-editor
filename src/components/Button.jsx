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
      className={`border border-white/45 p-2 ${bgColor} ${textColor} ${className} hover:bg-slate-200 hover:text-black rounded-lg`}
      {...props}
    >
      {children}
    </button>
  );
}

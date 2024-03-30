import React from "react";

export default function Container({
  children,
  className = "",
  textColor = "text-white",
  bgColor = "bg-slate-800",
  ...props
}) {
  return (
    <div
      className={`border border-white w-52 h-52 ${children} ${className} ${textColor} ${bgColor}`}
      {...props}
    >
      {children}
    </div>
  );
}

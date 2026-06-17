"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { CodeXml, MousePointer2, Moon } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const formatPath = (path) => {
    if (path === "/") return "Dashboard";

    return path
      .split("/")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" / ");
  };

  return (
    <div className="flex justify-between items-center p-1 bg-gray-300 text-black text-md w-full">

      {/* LEFT */}
      <div className="flex items-center gap-2 ml-2">
        <p className="border border-white shadow-md p-2 transition-transform duration-300 hover:rotate-180">
          <CodeXml size={28} />
        </p>

        <div>
          <h2 className="leading-tight font-black text-lg">Portfolio</h2>
          <p className="text-gray-500 text-sm">Front-end Developer</p>
        </div>
      </div>

      {/* CENTER - CURRENT VIEW */}
      <div className="flex justify-center gap-1 border border-dashed border-blue-600 p-2 rounded-md shadow-md">
        <p>Currently Viewing:</p>
        <p className="text-blue-600 font-medium">
          {formatPath(pathname)}
        </p>
      </div>

      {/* RIGHT INFO */}
      <div className="text-blue-500 text-lg">
        <p>3+ Designs In One Portfolio</p>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4 items-center mr-4">
        
        <div className="flex gap-1 items-center text-sm border border-dashed border-blue-500 text-blue-500 p-1 shadow-md shadow-blue-500/50">
          <MousePointer2 size={16} />
          <a href="#">Click to View One Page Portfolio</a>
        </div>

        <div className="flex items-center gap-1 border border-dashed border-gray-600 p-1 rounded-md shadow-md bg-blue-100">
          <Image
            src="/avatar.jpg" alt="Avatar" width={40} height={40}
            priority
            className="rounded-sm h-auto w-auto"
          />
        </div>

        <div>
          <Moon size={25} />
        </div>

      </div>
    </div>
  );
}


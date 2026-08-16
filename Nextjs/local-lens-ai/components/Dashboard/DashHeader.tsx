
import Link from "next/dist/client/link";
import React from "react";


function DashHeader() {
  return (
    <header className="flex h-[60px] items-center justify-between border-b border-zinc-200 bg-white px-5 lg:px-8">
      {/* Logo */}
      <div className="flex items-center gap-3">

        {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <img
                src="/logonew.png"
                alt="Local Lens AI"
                className="w-7 h-7 object-contain"
              />

            <span className="text-xl font-bold tracking-tight">
              Find
              <span className="text-blue-600"> AI</span>
            </span>
          </Link>
      </div>
    </header>
  );
}

export default DashHeader;
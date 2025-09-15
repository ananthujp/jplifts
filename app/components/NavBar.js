import { Handbag, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

function NavBar() {
  const Items = [
    "Home",
    "About",
    "Training Programs",
    "Nutritional Plans",
    "Contact",
  ];
  return (
    <div className="w-full z-99 flex flex-row bg-slate-900  justify-center items-center py-2">
      <div className="w-full max-w-4xl flex flex-row bg-slate-900 justify-between items-center py-2">
        <div className="text-white text-xs">Logo</div>
        <div className=" group uppercase  relative  flex flex-row font-russo font-thin gap-2 text-xs">
          {Items?.map((item, i) => (
            <Link
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`
              }
              key={`nav.item${i}`}
              className=" group-hover:text-slate-600 after:h-0.5  after:left-0 after:w-1 after:transition-all after:duration-700 hover:after:w-full after:absolute after:bottom-0 xafter:bg-slate-600 hover:after:bg-amber-400 cursor-pointer transition-all duration-500 font-bold before:rounded-full text-white hover:text-white relative z-10 transform before:invisible before:-z-1  hxover:bg-slate-700/80 rounded-full px-3 py-1 xtransition-all xduration-800"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="text-white text-xs flex flex-row gap-2">
          <Search className="w-4 cursor-pointer" />
          <Handbag className="w-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

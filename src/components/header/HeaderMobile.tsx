"use client";
import { useState } from "react";
import HamburguerMenu from "./partials/hamburguer-menu/HamburguerMenu";
import Link from "next/link";

export type LinkShape = {
  label: string;
  href: string;
};

interface NavProps {
  links: LinkShape[];
}

export default function HeaderMobile({ links }: NavProps) {
  const [isToggleOpen, setToggleOpen] = useState(false);

  const toggleNavBar = () => {
    setToggleOpen(!isToggleOpen);
  };

  return (
    <div className="z-[99999] container flex w-full  justify-between relative lg:hidden ">
      <div>
        <Link
          href="/"
          className="text-sm rounded-md p-1 font-semibold flex justify-items-center bg-white"
        >
          <span className="m-1 text-sky-500">Victor Buarque</span>
          <span className="w-12 h-8 bg-gradient-to-b from-sky-600 to-sky-400 rounded text-md p-1">
            .Dev
          </span>
        </Link>
      </div>
      <div className="flex items-center z-50 relative">
        <button className="w-10 h-8 flex flex-col gap-2" onClick={toggleNavBar}>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
      </div>
      <div
        className={`z-[99999] absolute left-0 min-w-[100vw] text-sky-500 bg-white transition-all ease-in-out duration-500 ${
          isToggleOpen ? "h-[100vh]" : "h-0"
        }`}
      >
        {isToggleOpen && (
          <div className="relative w-full h-full flex flex-1 px-6 py-10">
            <div
              className="absolute top-2 right-4 cursor-pointer"
              onClick={() => toggleNavBar()}
            >
              <span className="uppercase text-xl border-transparent hover:border-sky-700 border-b-2">
                CLOSE
              </span>
            </div>
            <div className="w-full flex items-center">
              <div className="flex flex-col flex-1 gap-8 ">
                {links.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={toggleNavBar}>
                    <span className="transition-all ease-in-out uppercase text-4xl lg:text-6xl leading-10 border-transparent hover:border-sky-700 border-b-2 pb-2">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

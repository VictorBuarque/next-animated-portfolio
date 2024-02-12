'use client'
import { useState } from "react";
import HamburguerMenu from "./partials/hamburguer-menu/HamburguerMenu";

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
    <div className="flex w-full justify-between  relative container lg:hidden">
      <div className="uppercase text-sm rounded-md p-1 font-bold">
        <div className="uppercase text-sm bg-white rounded-md p-1 font-bold flex">
          <span className="m-1 text-sky-500">Victor Buarque</span>
          <span className="w-12 h-8 bg-gradient-to-b from-sky-600 to-sky-400 rounded text-md p-1">
            .Dev
          </span>
        </div>
      </div>
      <div >
        {isToggleOpen && <HamburguerMenu links={links} />}
      </div>
      <div className="absolute top-2 right-0">
        {isToggleOpen ? (
          <div>
            <button
              className="w-10 h-8 flex flex-col gap-2"
              onClick={toggleNavBar}
            >
              <div className="w-10 h-1 bg-white rounded"></div>
              <div className="w-10 h-1 bg-white rounded"></div>
              <div className="w-10 h-1 bg-white rounded"></div>
            </button>
          </div>
        ) : (
          <div>
            <button
              className="w-10 h-8 flex flex-col gap-2"
              onClick={toggleNavBar}
            >
              <div className="w-10 h-1 bg-white rounded"></div>
              <div className="w-10 h-1 bg-white rounded"></div>
              <div className="w-10 h-1 bg-white rounded"></div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

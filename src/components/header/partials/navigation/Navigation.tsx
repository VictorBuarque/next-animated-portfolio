"use client";
import Link from "next/link";

export type LinkShape = {
  label: string;
  href: string;
};

interface NavProps {
  links: LinkShape[];
}

export default function Navigation({ links }: NavProps) {
  return (
    <nav className="flex flex-row justify-between items-center w-full gap-8 mr-10 h-[24px] xl:text-xl 2xl:text-[20px]">
      {links.map((link) => (
        <Link key={link.label} href={link.href}>
          <span className='className="whitespace-nowrap text-md font-bold hover:text-sky-500 hover:bg-white hover:rounded-md'>
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}

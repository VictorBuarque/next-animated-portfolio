import Link from 'next/link'
import { LinkShape } from '../navigation/Navigation'

interface NavProps {
  links: LinkShape[];
}

export default function HamburguerMenu({ links }: NavProps) {
  return (
      <div className="h-screen w-screen bg-white text-sky-500 flex  flex-col justify-center pb-32">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="mb-[4px]"
        >
          <span className="text-[24px] hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer hover:opacity-75 overflow-auto uppercase">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  )
}

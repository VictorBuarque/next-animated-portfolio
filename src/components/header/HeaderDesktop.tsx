import Navigation, { LinkShape } from "./partials/navigation/Navigation";
import Image from "next/image";
import Link from "next/link";

interface NavProps {
  links: LinkShape[];
}

export default function HeaderDesktop({ links }: NavProps) {
  return (
  <div className="relative w-full container justify-between hidden lg:flex">
      <div className="hidden lg:flex justify-center items-center self-center uppercase h-[24px] w-1/3">
        <Navigation links={links} />
      </div>
      <div className="md:hidden lg:flex justify-center uppercase text-sm bg-white rounded-md p-1 font-bold flex self-center">
        <span className="m-1 text-sky-500">Victor Buarque</span>
        <span className="w-12 h-8 bg-gradient-to-b from-sky-600 to-sky-400 rounded text-md text-center py-1">
          .Dev
        </span>
      </div>
      <div className="hidden lg:flex flex-row gap-4 items-center justify-center w-1/3">
        <Link href="#">
          <Image src="/images/facebook.png" width={30} height={0} alt="facebook" />
        </Link>
        <Link href="https://github.com/VictorBuarque">
          <Image src="/images/github.png" width={30} height={0} alt="facebook" />
        </Link>
        <Link href="#">
          <Image src="/images/instagram.png" width={30} height={0} alt="facebook" />
        </Link>
        <Link href="https://www.linkedin.com/in/victorbuarque/">
          <Image src="/images/linkedin.png" width={30} height={0} alt="facebook" />
        </Link>
      </div>
      </div>
    
  );
}

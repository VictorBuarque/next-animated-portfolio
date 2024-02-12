import Navigation, { LinkShape } from "./partials/navigation/Navigation";

interface NavProps {
  links: LinkShape[];
}

export default function HeaderDesktop({ links }: NavProps) {
  return (
    <div className="relative w-full container hidden lg:flex">
      <div className="uppercase text-sm bg-white rounded-md p-1 font-bold flex self-center">
        <span className="m-1 text-sky-500">Victor Buarque</span>
        <span className="w-12 h-8 bg-gradient-to-b from-sky-600 to-sky-400 rounded text-md p-1">
          .Dev
        </span>
        <div className="hidden lg:flex absolute uppercase right-0 top-[22%] bottom-0 h-[24px] items-center justify-center">
          <Navigation links={links} />
        </div>
      </div>
    </div>
  );
}

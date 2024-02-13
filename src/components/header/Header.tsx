import type { LinkShape } from "./partials/navigation/Navigation";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const links: LinkShape[] = [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div className="flex justify-items-center z-20 py-10">
      <HeaderDesktop links={links} />
      <HeaderMobile links={links} />
    </div>
  );
}


import type { LinkShape } from "./partials/navigation/Navigation"
import HeaderDesktop from "./HeaderDesktop"

export default function Header() {
  const links: LinkShape[]= [
    {label: 'About', href: '/about'},
    {label: 'Portfolio', href: '/portfolio'},
    {label: 'Contact', href: '/contact'},
  ]
  return (
    <div className='h-full flex items-center justify-between py-10'>
        <HeaderDesktop links={links}/>
    </div>
  )
}


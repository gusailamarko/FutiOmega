import { NavLink } from "react-router";
import { navTexts } from "../app/constants/texts";

const Nav = () => {
  return (
    <nav className="DesktopNav">
        <div className="w-[100%]">
            <img src="/imgs/logo.jpg" alt="Picture of the company logo" />
        </div>
        <div className="flex flex-col items-center w-full gap-[1rem] NavLinks">
            {navTexts.map((navLink:NavLinksProps, idx:number) => (
                <NavLink key={idx} className={({isActive}) => `NavLink text-left ${isActive ? 'text-[1.25rem] uppercase font-bold bg-[rgb(243,203,95)]' : 'text-[1rem]'}`} to={navLink.link}>{navLink.text}</NavLink>
            ))}
        </div>
        <div className="flex flex-col items-center w-full">
            <div className="Newsletter text-[1rem] text-left">Hírlevél</div>
        </div>
    </nav>
  )
}

export default Nav
const Nav = () => {
  return (
    <nav className="DesktopNav">
        <div className="w-[100%]">
            <img src="/imgs/logo.jpg" alt="Picture of the company logo" />
        </div>
        <div className="flex flex-col items-center w-full gap-[1rem] NavLinks">
            <div className="NavLink text-[1rem]">Rólunk</div>
            <div className="NavLink text-[1rem]">Tanfolyamaink</div>
            <div className="NavLink text-[1rem]">Elérhetőségeink</div>
        </div>
        <div className="flex flex-col items-center w-full">
            <div className="Newsletter text-[1rem]">Hírlevél</div>
        </div>
    </nav>
  )
}

export default Nav
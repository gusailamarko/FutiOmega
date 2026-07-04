import {useRef} from 'react'

const MobileNav = () => {
  const dropdown = useRef<HTMLDivElement>(null)

  const handleDropdown = () => {
    dropdown.current?.classList.toggle("hidden");
  }

  return (
    <div className="relative">
      <nav className="flex justify-between items-center h-[10dvh] MobileNav">
          <div>
              <img src="/imgs/logo.jpg" alt="Picture of the company logo" className="w-[200px] h-[9dvh]" />
          </div>
          <div className="flex px-[1rem]">
              <button onClick={handleDropdown} aria-expanded="false" aria-controls="mobile-menu">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                  </svg>
              </button>
          </div>
      </nav>

      <div id="mobile-menu" className="hidden absolute left-0 right-0 top-full bg-white z-50 flex flex-col justify-center items-center gap-[1rem] pb-3 shadow-md Nav" ref={dropdown}>
        <div className="flex flex-col items-center w-full gap-[1rem] NavLinks">
            <div className="NavLink text-[1rem]">Rólunk</div>
            <div className="NavLink text-[1rem]">Tanfolyamaink</div>
            <div className="NavLink text-[1rem]">Elérhetőségeink</div>
        </div>
        <div className="flex flex-col items-center w-full mt-[1rem]">
            <div className="Newsletter text-[1rem]">Hírlevél</div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
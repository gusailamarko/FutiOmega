import {Nav, MobileNav, HomeContent} from '../../components/index'

const home = () => {
  return (
    <main className="flex flex-col md:flex-row w-full">
        <div className="block md:hidden">
            <MobileNav  />
        </div>
        <div className="hidden md:block">
            <Nav />
        </div>
        <div className="Content-Container">
            <HomeContent />
        </div>
    </main>
  )
}

export default home
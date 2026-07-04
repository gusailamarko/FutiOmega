import {Nav, MobileNav, HomeContent} from '../../components/index'

const home = () => {
  return (
    <main className="flex flex-col md:flex-row">
        <div className="block md:hidden">
            <MobileNav />
        </div>
        <div className="hidden md:block">
            <Nav />
        </div>
        <div className="w-full">
            <HomeContent />
        </div>
    </main>
  )
}

export default home
import {MobileNav, Nav} from '../../components/index'

const rolunk = () => {
  return (
    <main className="flex flex-col md:flex-row">
        <div className="block md:hidden">
            <MobileNav />
        </div>
        <div className="hidden md:block">
            <Nav />
        </div>
        <div className="w-full">
            
        </div>
    </main>
  )
}

export default rolunk
import Link from "next/link"

const Navbar = () => {
    return (
        <div className='flex px-32 py-3 justify-between container mx-auto  items-center'>
            <Logo  />
            <div className='text-lg flex justify-center gap-10 items-center'>
                <Link className="hover:text-boost" href={'#'} >Overview</Link>
                <Link className="hover:text-boost" href={'#pages'} >Pages</Link>
                <Link className="hover:text-boost" href={'/boost/styleGuide'} >Style Guide</Link>
                <Link  href={'#'} className='px-4 py-2 rounded-md bg-boost text-white hover:bg-opacity-80 hover:text-black duration-300'>Use Template</Link>
            </div>
        </div>
    )
}
export const Logo = () => {
    return (
        <div>
            <Link className='font-semibold text-xl' href={"/boost"}>Boost</Link>
        </div>
    )
}
export default Navbar
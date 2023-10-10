import Link from "next/link"
import { Logo } from "./Navbar"

const Footer = () => {
    return (
        <div className='px-32 py-10 text-white bg-[#451397]'>
            <Logo />
            <div className='flex justify-between text-sm text-gray-400'>
                <div className='space-y-3'>
                    <Link href={'#'} className='block font-semibold text-white'>Overview</Link>
                    <Link href={'#'} className='block'>Page</Link>
                    <Link href={'#'} className='block'>Style Guide</Link>
                </div>
                <div className='space-y-3'>
                    <Link href={'#'} className='block font-semibold text-white'>Page</Link>
                    <Link href={'#'} className='block'>All Pages</Link>
                    <Link href={'#'} className='block'>landing page</Link>
                    <Link href={'#'} className='block'>About</Link>
                    <Link href={'#'} className='block'>Contact</Link>
                    <Link href={'#'} className='block'>Blog</Link>
                </div>
                <div className='space-y-3'>
                    <Link href={'#'} className='block font-semibold text-white'>Template</Link>
                    <Link href={'#'} className='block'>Changlog</Link>
                    <Link href={'#'} className='block'>Style guide</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer
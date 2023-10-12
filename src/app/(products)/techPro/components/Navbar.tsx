import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {}

const Navbar = (props: Props) => {

    return (
        <nav className='p-10 flex items-center justify-between'>
            <Logo className='scale-125' />
            <div className='flex-1 text-xl flex justify-center divide-x'>
                <Link className='px-8 text-gray-500 hover:text-black' href={'/techPro'}>Home</Link>
                <div className='px-8 text-gray-500 group relative hover:text-black' >
                    Page
                    <HoverContainer>
                        <Link className=' text-gray-500 hover:text-black' href={'/techPro/about'}>About us</Link>
                        <Link className=' text-gray-500 hover:text-black' href={'/techPro/services'}>Services</Link>
                    </HoverContainer>
                </div>
                <Link className='px-8 text-gray-500 hover:text-black' href={'/techPro/about'}>About us</Link>
                <Link className='px-8 text-gray-500 hover:text-black' href={'/techPro/services'}>Services</Link>
            </div>
            <Link className='text-xl px-4 py-2 rounded-md font-semibold text-white bg-black' href={'#'}>Get TechPro</Link>
        </nav>
    )
}
export default Navbar


export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <Image src='/TechProLogo.png' width={100} height={100} alt='logo' />
        </div>
    )
}
const HoverContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className='absolute top-full bg-white flex flex-col p-4 gap-3 group-hover:opacity-100 duration-300 opacity-0 w-[150px] translate-y-5 group-hover:translate-y-0 z-0 group-hover:z-50 shadow-md  left-0'>
            {children}
        </div>
    )
}

import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className='p-10 flex items-center justify-between'>
            <Logo className='scale-125' />
            <div className='flex-1 text-xl flex justify-center divide-x'>
                <Link className='px-8 text-gray-500 hover:text-black' href={'#'}>Home</Link>
                <Link className='px-8 text-gray-500 hover:text-black' href={'#'}>Page</Link>
                <Link className='px-8 text-gray-500 hover:text-black' href={'#'}>About us</Link>
                <Link className='px-8 text-gray-500 hover:text-black' href={'#'}>Service</Link>
            </div>
            <Link className='text-xl px-4 py-2 rounded-md font-semibold text-white bg-black' href={'#'}>Get TechPro</Link>
        </nav>
    )
}

export default Navbar


export const Logo =({className}:{className?: string}) => {
    return (
        <div className={className}>
            <Image src='/TechProLogo.png' width={100} height={100} alt='logo' />
        </div>
    )
}
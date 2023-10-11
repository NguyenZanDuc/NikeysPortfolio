import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='flex justify-between py-10 px-32 bg-vibleBackground'>
            <div className='w-[120px]'>
                <Image src="https://framerusercontent.com/images/Cv8UJS8RQqsc3JXmHnkiIu3QBm4.png" alt="Logo" width={120} height={40} style={{ width: "100%", height: "auto" }} />
            </div>
            <div className='flex items-center gap-4 text-gray-400'>
                <Link className='hover:text-white' href="/vible">Home</Link>
                <Link className='hover:text-white' href="/vible/services">Services</Link>
                <Link className='hover:text-white' href="/vible/pricing">Pricing</Link>
                <Link className='hover:text-white' href="/vible/about">About</Link>
                <Link className='p-4 rounded-full bg-vible text-black hover:bg-opacity-70' href="#">Buy template</Link>
            </div>
        </div>
    )
}

export default Navbar
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiLight } from 'react-icons/ci'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex bg-white justify-center  md:justify-between items-center'>
        <div className='w-10 md:block hidden relative h-10 rounded-full overflow-hidden'>
            <Image src='/map.png' alt='nikey' fill  />
        </div>
        <div className='flex text-xs  md:text-base font-semibold  justify-center items-center px-4 py-2 gap-4 rounded-full border-[0.1px] border-gray-300 shadow-md'>
            <Link href={'/spotlight'} className='hover:text-[#19B8A6]' >About</Link>
            <Link href={'/spotlight/articles'} className='hover:text-[#19B8A6]' >Articles</Link>
            <Link href={'/spotlight/projects'} className='hover:text-[#19B8A6]' >Projects</Link>
            <Link href={'/spotlight/speaking'} className='hover:text-[#19B8A6]' >Speaking</Link>
            <Link href={'/spotlight/uses'} className='hover:text-[#19B8A6]' >Uses</Link>
        </div>
        <button className='hidden md:block'>
            <CiLight />
        </button>
    </div>
  )
}

export default Navbar
import Link from 'next/link'
import React from 'react'
import { BiMenu } from 'react-icons/bi'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex items-center justify-between sm:px-32 px-10 py-4 sm:py-8 border-b-[0.1px] border-gray-200 '>
        <div className="flex basis-1/6 gap-1 items-center justify-center">
          <Logo />
          <p className='font-bold'>spendly</p>
        </div>
        <div className="sm:flex hidden flex-1 justify-center gap-10 items-center">
          <Link href={'#'} className='px-4 py-2 rounded-full border border-transparent hover:border-gray-500 text-gray-500' >Features</Link>
          <Link href={'#'} className='px-4 py-2 rounded-full border border-transparent hover:border-gray-500 text-gray-500' >Pricing</Link>
          <Link href={'#'} className='px-4 py-2 rounded-full border border-transparent hover:border-gray-500 text-gray-500' >Blog</Link>
          <Link href={'#'} className='px-4 py-2 rounded-full border border-transparent hover:border-gray-500 text-gray-500' >Contact</Link>
        </div>
        <div className="sm:flex hidden items-center justify-center basis-1/6">
          <Link href={'#'} className='py-2 px-4 rounded-full bg-spendly text-white font-semibold' >Buy Template</Link>
        </div>
        <div className='flex sm:hidden items-center justify-center'>
          <BiMenu className="w-8 h-8" />
        </div>
    </div>
  )
}

export default Navbar

export const Logo = () => {
  return (
    <div className='h-8  text-spendly w-10'>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{width:"100%", height:"100%"}} viewBox="0 0 49 47" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg1853626826_426"></use></svg>
    </div>
  )
}





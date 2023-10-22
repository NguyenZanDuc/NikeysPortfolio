import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiMenu } from 'react-icons/bi'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/UI/DropdownMenu"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex items-center justify-between sm:px-32 p-4 sm:py-4 border-b-[0.1px] border-gray-200 '>
      <div className="flex basis-1/6 gap-1 items-center justify-center">
        <Logo />
        <p className='font-bold hidden sm:block'>spendly</p>
      </div>
      <div className="sm:flex hidden flex-1 justify-center gap-10 items-center">
        <Link href={'/spendly/features'} className='px-4 py-2 rounded-full border border-transparent hover:border-gray-500 text-gray-500' >Features</Link>
        <Link href={'/spendly/pricing'} className='px-4 py-2 rounded-full border border-transparent hover:border-gray-500 text-gray-500' >Pricing</Link>
        <Link href={'/spendly/blog'} className='px-4 py-2 rounded-full border border-transparent hover:border-gray-500 text-gray-500' >Blog</Link>
        <Link href={'/spendly/contact'} className='px-4 py-2 rounded-full border border-transparent hover:border-gray-500 text-gray-500' >Contact</Link>
      </div>
      <div className="sm:flex hidden items-center justify-center basis-1/6">
        <Link href={'#'} className='py-2 px-4 rounded-full bg-spendly text-white font-semibold' >Buy Template</Link>
      </div>
      <div className='flex sm:hidden items-center justify-center'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <BiMenu className="w-8 h-8" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={'/spendly/features'} className='px-4 py-2 rounded-full border border-transparent' >Features</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/spendly/pricing'} className='px-4 py-2 rounded-full border border-transparent ' >Pricing</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/spendly/blog'} className='px-4 py-2 rounded-full border border-transparent ' >Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/spendly/contact'} className='px-4 py-2 rounded-full border border-transparent' >Contact</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  )
}

export default Navbar

export const Logo = () => {
  return (
    <div>
      <Image src='/SpendlyLogo.png' width={40} height={40} alt={''} />
    </div>
  )
}





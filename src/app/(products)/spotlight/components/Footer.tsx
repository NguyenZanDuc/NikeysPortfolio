import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='p-8 flex md:flex-row flex-col items-center justify-center border-t-[0.1px] border-gray-300 text-sm gap-5'>
        <div className='flex gap-4'>
            <Link className='hover:text-teal-600' href={'#'}>About</Link>
            <Link className='hover:text-teal-600' href={'#'}>Projects</Link>
            <Link className='hover:text-teal-600' href={'#'}>Speaking</Link>
            <Link className='hover:text-teal-600' href={'#'}>Uses</Link>
        </div>
        <p className='text-gray-400'>© 2023 Spencer Sharp. All rights reserved.</p>
    </div>
  )
}

export default Footer

import { BiMenu } from 'react-icons/bi'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex justify-between items-center p-4'>
        <div className="">
            <BiMenu className="w-6 h-6"/>
        </div>
        <div className="text-4xl font-bold flex items-start">STYLZ<span className='text-base'>®</span></div>
        <div className="">
            <button className='rounded-md font-semibold border border-white p-2'>BOOK APPOINTMENT</button>
        </div>
    </div>
  )
}

export default Navbar
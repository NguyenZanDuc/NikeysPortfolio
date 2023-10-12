import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='p-4 space-y-10'>
        <div className="text-4xl font-bold flex px-32 items-start">STYLZ<span className='text-base'>®</span></div>
        <div className="flex gap-10 px-32">
            <div className="flex-1 justify-between  flex">
                <div className=" space-y-3">
                    <p className='font-semibold'>Pages</p>
                    <div className=" grid grid-cols-2 content-between">
                        <p>Home</p>
                        <p>Services</p>
                        <p>Stylists</p>
                        <p>Price List</p>
                        <p>Contact</p>
                        <p>Buy Template</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <p className='font-semibold'>Social Media</p>
                    <div>
                        icons
                    </div>
                </div>
            </div>
            <div className=" flex-1 space-y-3 px-16">
               <p>Stay in Touch</p>
               <div className="flex gap-2">
                <input type="text" className='bg-black flex-1 font-semibold placeholder:text-white p-2 outline-none rounded-md border border-gray-300' placeholder='Email Address'/>
                <button className='rounded-md text-black font-bold px-4 text-lg bg-white'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

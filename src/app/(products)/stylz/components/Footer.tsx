import InView from '@/app/components/Animation/InView'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='md:py-32 py-10 space-y-10'>
        <InView className="text-4xl font-bold flex md:px-32 px-4 items-start">STYLZ<span className='text-base'>®</span></InView>
        <InView delay={0.2} className="flex md:flex-row flex-col gap-10 md:px-32 px-4">
            <div className="flex-1 justify-between  flex">
                <div className=" space-y-3">
                    <p className='font-semibold'>Pages</p>
                    <div className=" grid md:grid-cols-2 content-between">
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
            <div className=" flex-1 space-y-3 md:px-16">
               <p>Stay in Touch</p>
               <div className="flex gap-2">
                <input type="text" className='bg-black flex-1 font-semibold placeholder:text-white p-2 outline-none rounded-md border border-gray-300' placeholder='Email Address'/>
                <button className='rounded-md text-black font-bold px-4 text-lg bg-white'>Submit</button>
                </div>
            </div>
        </InView>
    </div>
  )
}

export default Footer

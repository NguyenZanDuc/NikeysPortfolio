import Image from 'next/image'
import React from 'react'
import HeadSection from './HeadSection'
import { Input } from '@/app/components/UI/Input'
import { Button } from '@/app/components/UI/Button'
import { Logo } from './Navbar'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='sm:px-32  sm:py-20 p-4 space-y-20'>
      {/* join */}
      <div className='p-10 relative bg-black rounded-3xl flex flex-col sm:flex-row overflow-hidden'>
          <div className="flex-1 text-white space-y-10 ">
            <HeadSection center={false} title={'Be the First to Know'} subtitle={''} description={'Sign up now for exclusive access to our upcoming newsletter. Get financial insights and tips delivered to your inbox first. Don not miss out — reserve your spot!'} />
            <div className='flex gap-4 justify-center w-full sm:w-2/3'>
              <Input placeholder='Enter your email' className='border-gray-500 rounded-full flex-1 bg-gray-700 placeholder:text-gray-500' />
              <Button className='rounded-full bg-spendly text-white'>Join Now</Button>
            </div>
          </div>
          <div className="flex-1 ">
            <Image src='https://framerusercontent.com/images/fUgugTDr7MKqvHbQsNuIgwFVvrY.svg' width={500} height={500} style={{width:"100%", height:"auto"}} alt={''} className='translate-y-20' />
          </div>
          <div className='absolute bottom-0 left-0 w-full h-5  z-50  bg-gradient-to-t from-black/100 to-transparent '></div>
      </div>
      {/* more */}
      <div className='p-4 text-gray-500 text-sm flex flex-col sm:gap-20 gap-8 sm:flex-row'>
        <div className="space-y-2 sm:space-y-6 flex-1">
          <div className='space-y-2 sm:space-y-6'>
            <p className='font-bold flex gap-2 items-center'>
              <Logo />
              spendly
            </p>
            <p>42 Market Avenue Westminster London W1B 4DE United Kingdom</p>
            <p>contactspendly@email.com</p>
            <p>+44 111 333 555</p>
          </div>
        </div>
        <div className="flex flex-1 ustify-between gap-20">
            <div className="space-y-2 sm:space-y-6">
              <p className='text-spendly'>Menu</p>
              <p>Home</p>
              <p>Features</p>
              <p>Pricing</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
            <div className="space-y-2 sm:space-y-6">
              <p className='text-spendly'>Useful Links</p>
              <p>Testimonials</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>Licensing</p>
              <p>404</p>
            </div>
        </div>
        <div className="p-4 flex-1 gap-5 flex flex-col justify-between bg-gray-100 rounded-xl">
          <p className='text-spendly'>Download App</p>
          <p>Manage your finances on the go with the Spendly mobile app. Download it today for easy expense tracking and customized alerts.</p>
          <div className='flex justify-center gap-10'>
            <button className='px-4 py-2 bg-spendly text-white font-bold rounded-full'>App Store</button>
            <button className='px-4 py-2 bg-spendly text-white font-bold rounded-full'>Google play</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer



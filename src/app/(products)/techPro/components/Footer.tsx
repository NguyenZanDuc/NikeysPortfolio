import React from 'react'
import { Logo } from './Navbar'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='p-32 flex text-gray-400 bg-techProBackground '>
        <div className='basis-1/3  space-y-5'>
            <Logo className='' />
            <p className='w-3/4'>Lorem ipsum dolor sit amet consectetur. Ac arcu in dignissim aliquam tincidunt praesent eget vulputate pellentesque.</p>
        </div>
        <div className='flex-1 flex justify-between'>
            <div className='space-y-3'>
                <p className='font-semibold text-xl text-white'>Quick Links</p>
                <p>Home</p>
                <p>About Us</p>
                <p>Services</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
            <div  className='space-y-3'>
                <p className='font-semibold text-xl text-white'>Utility pages</p>
                <p>Website</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Linkedin</p>
                <p>Dribbble</p>
            </div>
            <div  className='space-y-3'>
                <p className='font-semibold text-xl text-white'>Contact Information</p>
                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                <p>+1 283 444 5555</p>
                <p>Opening Hours: 8:00 AM - 7:45 PM</p>
            </div>
        </div>
    </div>
  )
}

export default Footer



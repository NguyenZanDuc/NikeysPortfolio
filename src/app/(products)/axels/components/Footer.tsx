import React from 'react'
import { AiOutlineAntDesign } from 'react-icons/ai'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='text-sm'>
        <div className=' bg-axelsBackground flex flex-col sm:flex-row gap-10 md:gap-20 p-4 md:p-20'>
            <div className='space-y-2 flex-1'>
                <p className='text-4xl'>AXELS</p>
                <div className='flex gap-2'>
                    <AiOutlineAntDesign />
                    <p>123 Main Street Chicago, IL 60601 United States</p>
                </div>
                <div className='flex gap-2'>
                    <AiOutlineAntDesign />
                    <p>+1 (234) 567 890</p>
                </div>
                <div className='flex gap-2'>
                    <AiOutlineAntDesign />
                    <p>support@axels.com</p>
                </div>
            </div>
            <div className='flex-1 space-y-3'>
                <p className='font-semibold'>Company</p>
                <p>About Us</p>
                <p>Testimonials</p>
                <p>Best Seller</p>
                <p>New Arrivals</p>
                <p>Terms & Condition</p>
                <p>Latest Update</p>
            </div>
            <div className='flex-1 space-y-3'>
                <p className='font-semibold'>Support</p>
                <p>Size Charts</p>
                <p>Payment Guide</p>
                <p>Help Centre</p>
                <p>Privacy Policy</p>
                <p>Return Policy</p>
                <p>FAQs</p>
            </div>
            <div className='flex-1 space-y-3'>
                <p className='font-semibold'>Newsletter</p>
                <p>Get our latest updates and promo bi-monthly.</p>
                <input type="text" className='p-2 w-full outline-none border-[0.1px] placeholder:text-gray-400' placeholder='Enter yiur e-mail address ..' />
                <button className='block w-full bg-axels text-white p-2'>SUBSRIBE</button>
            </div>
        </div>
    </div>
  )
}

export default Footer


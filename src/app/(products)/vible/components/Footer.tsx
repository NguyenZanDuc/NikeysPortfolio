import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <div className='bg-vible flex items-center group justify-center p-32 gap-3'>
                <p>Join our newsletter and stay updated:</p>
                <div className='w-[400px] h-[50px] rounded-full border-[0.3px] flex p-1  bg-[#F6E1AF]'>
                    <input type="text" placeholder='Your email' className='placeholder:text-gray-400 flex-1 px-2 placeholder:text-sm bg-transparent outline-none' />
                    <button className='p-2 rounded-full bg-vibleBackground text-vible animate-pulse group-hover:animate-none group-hover:scale-105 duration-1000'>Subscribe</button>
                </div>
            </div>
            <div className='flex p-32 text-white bg-vibleBackground'>
                <div className='flex-1 space-y-6'>
                    <Image src="https://framerusercontent.com/images/Cv8UJS8RQqsc3JXmHnkiIu3QBm4.png" alt="Logo" width={120} height={50} />
                    <p className='w-2/3'>Discover the joy of sculpting clay and bring your artistic visions to life at our renowned pottery studio.</p>
                </div>
                <div className='flex flex-1 justify-between'>
                    <div className='space-y-2'>
                        <p className='font-semibold'>Product</p>
                        <p>Home</p>
                        <p>Services</p>
                        <p>Pricing</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-semibold'>Company</p>
                        <p>Blog</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-semibold'>Social</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Are.na</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer


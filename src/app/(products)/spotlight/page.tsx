import Image from 'next/image'
import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='md:py-20 py-8 flex md:flex-row gap-10 text-gray-500 flex-col'>
      <div className='space-y-4 flex-1 md:space-y-10 text-sm '>
        <p className='md:text-4xl text-black font-semibold text-2xl'>I am Spencer Sharp. I live in New York City, where I design the future.</p>
        <p>I have loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.</p>
        <p>The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I did be able to get to orbit.</p>
        <p>I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad is Blackberry into orbit and was able to transmit a photo back down to our family computer from space.</p>
        <p>Today, I am the founder of Planetaria, where we are working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.</p>
      </div>
      <div className='flex-1 flex items-center flex-col gap-10'>
        <div className='p-10  w-[80%] aspect-square relative rotate-6'>
            <Image src='https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&w=1080&q=75' alt='nikey' fill objectFit='contain'  />
        </div>
        <div className='w-full p-4 space-y-2'>
          <div className='flex w-full items-center gap-3'>
            <BsTwitter />
            <p>Follow on Twitter</p>
          </div>
          <div className='flex w-full items-center gap-3'>
            <BsInstagram />
            <p>Follow on Intartgram</p>
          </div>
          <div className='flex w-full items-center gap-3'>
            <BsGithub />
            <p>Follow on Github</p>
          </div>
          <div className='flex w-full items-center gap-3'>
            <BsLinkedin />
            <p>Follow on LinkedIn</p>
          </div>
        </div>
        <div className='px-4 py-10 border-t-[0.1px] border-gray-300 flex w-full items-center gap-3'>
            <BiLogoGmail />
            <p>spencer@planetaria.tech</p>
          </div>
      </div>
    </div>
  )
}

export default page

import Link from 'next/link'
import React from 'react'
import { BiLogoGithub } from 'react-icons/bi'

type Props = {}

function page({}: Props) {
    
  return (
    <div className=' md:p-20 p-4 md:space-y-10 space-y-4 '>
    <p className='md:text-4xl text-2xl font-bold'> Things I have made trying to put my dent in the universe.</p>
    <p className='text-gray-500'>I have worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
    <div className='w-full gap-10 flex justify-center flex-row flex-wrap '>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
    </div>
</div>
  )
}

export default page

const CardProject = () => {
    return (
        <div className='space-y-2 w-[240px] rounded-md shadow-md  p-4 text-sm'>
            <div className='w-8 h-8 rounded-full shadow-sm'>
                <BiLogoGithub />
            </div>
            <p className='font-semibold'>Planetaria</p>
            <p className='text-gray-500'>Creating technology to empower civilians to explore space on their own terms.</p>
            <Link className='text-gray-400 block' href='#'>github.com</Link>
        </div>
    )
}
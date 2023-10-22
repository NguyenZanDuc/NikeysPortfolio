import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    image: string,
    title: string,
    subtitle: string,
    date: string,
    link: string
}

const BlogCard = (props: Props) => {
  return (
    <div className='p-10 rounded-xl min-w-[360px] shadow-md space-y-4 '>
        <div className='w-full relative aspect-square rounded-xl overflow-hidden'>
            <Image src={props.image} alt={props.title} fill objectFit='cover'/>
        </div>
        <div className='flex justify-between text-gray-300 text-xs'>
            <p>{props.subtitle}</p>
            <p>{props.date}</p>
        </div>
        <p className='font-semibold w-3/4'>{props.title}</p>
        <div className=' flex justify-end'>
            <Link href={props.link} className='text-gray-500'>Read More</Link>
        </div>
    </div>
  )
}

export default BlogCard
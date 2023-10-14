import Link from 'next/link'
import React from 'react'

type Props = {
    detail?: string
    head?: string
    title: string
    description: string
    href?: string
    textLink?: string
}

const CardContent = ({detail, head, title, description, href, textLink}: Props) => {
  return (
    <div className='flex py-5  border-l-[0.1px] border-gray-300'>
        <div className='text-gray-600 basis-1/3 px-4'>
            <p>{detail}</p>
        </div>
        <div className=" flex-1 ">
            <p className='px-2 text-gray-400'>{head}</p>
            <p className='text-black font-semibold'>{title}</p>
            <p className='text-gray-500'>{description}</p>
            <Link href={href??'#'} className='text-[#19B8A6]' >{textLink}</Link>
        </div>
    </div>
  )
}

export default CardContent
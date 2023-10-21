import { cn } from '@/app/lib/utils'
import React from 'react'

type Props = {
    center: boolean 
    title: string
    subtitle: string
    description: string
}

const HeadSection = (props: Props) => {
  return (
    <div className={cn("space-y-8", props.center?"w-1/2 mx-auto text-center":"w-3/4")}>
        <p className='px-2 py-1 inline rounded-full text-spendly text-sm font-semibold bg-[#EBF9F6]'>{props.subtitle}</p>
        <p className='text-4xl font-bold'>{props.title}</p>
        <p className='text-sm text-gray-500'>{props.description}</p>
    </div>
  )
}

export default HeadSection
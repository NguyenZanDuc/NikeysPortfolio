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
    <div className={cn("sm:space-y-8 space-y-4", props.center?"sm:w-1/2 p-4 mx-auto text-center":"sm:w-3/4 px-4 text-center sm:text-start w-full")}>
        {props.subtitle&&<p className='px-2 py-1 inline rounded-full text-spendly text-sm font-semibold bg-[#EBF9F6]'>{props.subtitle}</p>}
        <p className='sm:text-4xl text-2xl font-bold'>{props.title}</p>
        <p className='text-sm text-gray-500'>{props.description}</p>
    </div>
  )
}

export default HeadSection
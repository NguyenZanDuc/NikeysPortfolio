import { Button } from '@/app/components/UI/Button'
import { cn } from '@/app/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props = {
    image: string,
    title: string,
    price: number
    href: string
    sale?: number
}

const ProductCard = (props: Props) => {
  return (
    <div className='max-w-[480px]  space-y-2 min-w-[300px] group  '>
        <div className='w-full h-[500px] p-20 bg-axelsBackground  flex justify-center relative  '>
            <Image src={props.image} width={1000} height={1000} style={{width:"", height:"100%", objectFit:"contain"}} alt="Picture of the author" />
            <button  className='absolute bottom-0 shadow-lg px-4 py-2 left-1/2 -translate-x-1/2 duration-500 bg-white opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 '>VIEW DETAILS</button>
            {props.sale && <div className='absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md'>-{props.sale}%</div>}
        </div>
        <p className='font-semibold'>{props.title}</p>
        <p className='text-gray-400'>
            <span className={cn(props.sale?'line-through':"")}>${props.price}</span>
            {props.sale&&(<span className='ml-2'>${(props.price - (props.price * (props.sale/ 100))).toFixed(2)}</span>)}
        </p>
    </div>
  )
}

export default ProductCard
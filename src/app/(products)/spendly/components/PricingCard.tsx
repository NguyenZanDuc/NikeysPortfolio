import { cn } from '@/app/lib/utils'
import React from 'react'
import { BiCheck } from 'react-icons/bi'

type Props = {
    type: 'FREE' | 'PREMIUM'| 'Pro-Most Popular'
    price: number
    features: string[]
}

const PricingCard = (props: Props) => {
  return (
    <div className='min-w-[360px] shadow-lg flex flex-col rounded-xl space-y-6 text-gray-400 p-10 text-sm'>
        <div className='space-y-5'>
            <span className={cn("px-2 py-1 inline font-semibold rounded-full", props.type==="Pro-Most Popular"?"text-spendlyText bg-[#F7E6FF]":"bg-[#EBF9F6] text-spendly")}>{props.type}</span>
            <p className='text-5xl text-black font-semibold'>{props.price?`$${props.price}`:"FREE"} {props.price!=0&&<span className='text-sm text-gray-400'>/month</span>}</p>
        </div>
        <div className='flex-1 space-y-2 border-t-[0.1px] border-gray-300 py-5 '>
            {props.features.map((feature, i) => (
                <Feature key={i} text={feature} />
            ))}
        </div>
        <button className={cn("w-full py-2 mt-4 rounded-xl h-10 font-semibold", props.type==="Pro-Most Popular"?"bg-spendlyText text-white":"bg-[#EBF9F6] text-spendly")}>Get this Plan</button>
    </div>
  )
}

export default PricingCard

const Feature = (props: {text: string}) => {
    return (
        <div className='flex items-center gap-2'>
            <BiCheck className='text-spendly' />
            <p>{props.text}</p>
        </div>
    )
}
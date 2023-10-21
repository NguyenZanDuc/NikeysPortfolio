import { cn } from '@/app/lib/utils'
import React from 'react'
import { BiDownArrow, BiDownArrowAlt, BiUpArrow, BiUpArrowAlt } from 'react-icons/bi'

type Props = {
    title: string
    subtitle: string
    number: number
}

const TransactionCard = (props: Props) => {
    const isUp = props.number > 0
  return (
    <div className='flex w-[400px] rounded-xl p-4 shadow-xl gap-2 items-center'>
        <div className='p-2 rounded-full bg-slate-200 flex justify-center items-center text-black'>
            {isUp ? <BiUpArrowAlt className="w-10 h-10"/> : <BiDownArrowAlt className="w-10 h-10"/>}
        </div>
        <div className='flex-1 flex-col justify-around'>
            <p className="font-semibold">{props.title}</p>
            <p className="text-sm text-gray-400">{props.subtitle}</p>
        </div>
        <p className={cn(isUp?"text-spendly":"text-red-600", "font-semibold tracking-widest text-lg")}>{isUp?"+":"-"}${Math.abs(props.number)}</p>
    </div>
  )
}

export default TransactionCard

import Link from 'next/link'
import React from 'react'

type Props = {}

const GroupLink = (props: Props) => {
    return (
        <div  className='fixed w-screen  flex underline underline-offset-4 flex-wrap gap-8 p-4 items-start top-0 left-0 justify-center  font-bold text-white'>
                <Link className='bg-gradient-to-tr hover:scale-125 duration-300 from-gray-50 to-slate-500 bg-clip-text text-transparent ' href='/thePlanner'>The planner</Link>
                <Link className='bg-gradient-to-tr hover:scale-125 duration-300 from-gray-50 to-slate-500 bg-clip-text text-transparent ' href='/dribbble'>Dribbble</Link>
                <Link className='bg-gradient-to-tr hover:scale-125 duration-300 from-gray-50 to-slate-500 bg-clip-text text-transparent ' href='/10xdesigners'>10xDesigners</Link>
                <Link className='bg-gradient-to-tr hover:scale-125 duration-300 from-gray-50 to-slate-500 bg-clip-text text-transparent ' href='/Consuly'>Consuly</Link>
                <Link className='bg-gradient-to-tr hover:scale-125 duration-300 from-gray-50 to-slate-500 bg-clip-text text-transparent ' href='/boost'>Boost</Link>
                <Link className='bg-gradient-to-tr hover:scale-125 duration-300 from-gray-50 to-slate-500 bg-clip-text text-transparent ' href='/vible'>Vible</Link>
                <Link className='bg-gradient-to-tr hover:scale-125 duration-300 from-gray-50 to-slate-500 bg-clip-text text-transparent ' href='/techPro'>TechPro</Link>
                <Link className='bg-gradient-to-tr hover:scale-125 duration-300 from-gray-50 to-slate-500 bg-clip-text text-transparent ' href='/stylz'>STYLZ</Link>
                <Link className='bg-gradient-to-tr hover:scale-125 duration-300 from-gray-50 to-slate-500 bg-clip-text text-transparent ' href='/axels'>Axels</Link>
                <Link className='bg-gradient-to-tr hover:scale-125 duration-300 from-gray-50 to-slate-500 bg-clip-text text-transparent ' href='/calmHome'>CalmHome</Link>
                <Link className='bg-gradient-to-tr hover:scale-125 duration-300 from-gray-50 to-slate-500 bg-clip-text text-transparent ' href='/spendly'>Spendly</Link>
        </div>
    )
}

export default GroupLink


             
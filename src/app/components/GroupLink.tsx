"use client"
import { useAnimate, stagger } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = {}

const GroupLink = (props: Props) => {
    const [scope, animate] = useAnimate()
    useEffect(() => {
        animate(".link",
            {
                x: [0, 50,60,30,0],
                scale: [1, 1.2, 1,0.8,1],
                color: ["#fff", "#000", "#fff", "#000", "#fff"],
            },
            {
                duration: 4,
                repeat: Infinity,
                repeatDelay: 1,
                delay: stagger(1)
            })
    }, [animate])

    return (
        <div ref={scope} className='fixed w-screen h-screen font-bold text-white'>
            <div className='link py-1 absolute top-1/3 bg-yellow-200 left-1/4 px-2 rounded-md shadow-lg'>
                <Link href='/thePlanner'>The planner</Link>
            </div>
            <div className='link py-1 px-2 absolute top-3/4 bg-green-200 right-1/3 rounded-md shadow-lg'>
                <Link href='/dribbble'>Dribbble</Link>
            </div>
            <div className='link py-1 px-2 absolute top-1/4 bg-pink-200 right-1/4 rounded-md shadow-lg'>
                <Link href='/10xdesigners'>10xDesigners</Link>
            </div>
            <div className='link py-1 px-2 absolute bottom-1/4 bg-blue-200 left-64 rounded-md shadow-lg'>
                <Link href='/product'>product</Link>
            </div>
            <div className='link py-1 px-2 absolute bottom-1/4 bg-blue-200 left-1/2 rounded-md shadow-lg'>
                <Link href='/Consuly'>Consuly</Link>
            </div>
            <div className='link py-1 px-2 absolute top-1/4 bg-blue-200 left-1/3 rounded-md shadow-lg'>
                <Link href='/boost'>Boost</Link>
            </div>
            <div className='link py-1 px-2 absolute right-[300px] bg-blue-200 top-[600px] rounded-md shadow-lg'>
                <Link href='/vible'>Vible</Link>
            </div>
            <div className='link py-1 px-2 absolute right-[400px] bg-blue-200 top-[800px] rounded-md shadow-lg'>
                <Link href='/techPro'>TechPro</Link>
            </div>
        </div>
    )
}

export default GroupLink
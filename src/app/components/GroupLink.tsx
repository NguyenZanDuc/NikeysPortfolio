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
                repeatDelay: 0.5,
                delay: stagger(0.5)
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
        </div>
    )
}

export default GroupLink
"use client"
import { cn } from '@/app/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    name: string,
    title: string,
    position?: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT'
}

const CardContentItem = ({ name, title, position }: Props) => {

    const getPosition = (postionType: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT' | undefined) => {
        switch (postionType) {
            case 'TOP_LEFT':
                return 'top-0 left-0 -translate-x-1/2 -translate-y-1/2'
            case 'TOP_RIGHT':
                return 'top-0 right-0 translate-x-1/2 -translate-y-1/2'
            case 'BOTTOM_LEFT':
                return 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2'
            case 'BOTTOM_RIGHT':
                return 'bottom-0 right-0 translate-x-1/2 translate-y-1/2'
            default:
                return 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2'
        }
    }
    return (
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1,  transition:{duration:1, delay:0.5}}}
        className={cn('rounded-sm group-hover:scale-105 duration-300 w-[280px] bg-thePlannerBackground shadow-md p-4 space-y-2 absolute md:inline hidden ', getPosition(position))}>
            <p className='text-sm font-inconsolata'>{name}</p>
            <p className='text-lg font-serif'>{title}</p>
            <button> View More</button>
        </motion.div>
    )
}

export default CardContentItem
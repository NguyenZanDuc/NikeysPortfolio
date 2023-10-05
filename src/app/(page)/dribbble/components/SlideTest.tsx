"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const SlideTest = (props: Props) => {
    const cards = new Array(20).fill(0)
  return (
    <motion.div 
        initial={{x: "-33%"}}
        animate={{x: ["-33%", "0%", "33%"], transition: {duration: 40,type:"tween" , repeat: Infinity, repeatType:"mirror"}}}
    className='flex h-[400px]  gap-14 items-center justify-start  bg-thePlannerBackground'>
        {cards.map((_, i) => (<Card key={i} index={i} />))}
    </motion.div>
  )
}

export default SlideTest

const Card = ({index}:{index: number}) => {
    return (
        <div className='w-[280px] h-[360px] bg-white rounded-xl shadow-xl'>
            <p>{index}</p>
        </div>
    )
}
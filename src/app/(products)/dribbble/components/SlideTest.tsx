"use client"
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

type Props = {}

const SlideTest = (props: Props) => {
    const cards = new Array(10).fill(0)
    const [isHover, setIsHover] = React.useState(false)
  return (
        <motion.div 
        animate={{x:isHover?0:[0,-1700], transition:{duration: 30, repeat: Infinity, repeatType: 'reverse'}}}
        className='flex w-auto gap-10 p-10'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
            {cards.map((_, i) => (<Card key={i} index={i} />))}
        </motion.div>

    
  )
}

export default SlideTest

const Card = ({index}:{index: number}) => {
    return (
        <div className='min-w-[280px] inline-grid h-[360px] bg-white rounded-xl shadow-xl'>
            <p>{index}</p>
        </div>
    )
}
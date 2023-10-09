"use client"
import { cn } from '@/app/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    className?: string,
    children?: React.ReactNode,
    delay?: number,
}

const ChipMotion = ({children, className, delay}: Props) => {
  return (
    <motion.p 
    animate={{
        x: [0, 40],
        y: [0, 40],
        transition:{
            duration: 3,
            delay: delay? delay : 0,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            repeatDelay: 3,
        }
    }}
    className={cn("px-4 py-2 rounded-xl z-50",className)}>{children}</motion.p>
  )
}

export default ChipMotion
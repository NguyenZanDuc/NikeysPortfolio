"use client"
import { cn } from '@/app/lib/utils'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

type Props = {
    children: React.ReactNode,
    duration?: number,
    repeatType?: "loop" | "reverse" | "mirror",
    directionLeft?: boolean, 
    className?:string,
    ease?: "linear" | "easeIn" | "easeOut" | "easeInOut" | string
}

const  Slide = ({ children, duration, repeatType, directionLeft, className, ease }: Props) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (ref.current) {
        setWidth(ref.current.getBoundingClientRect().width);
      }

    }, []);
    return (
       <motion.div 
                ref={ref}
                animate={{
                    x: directionLeft?[0,  width/2 ]:[0, - width/2 ],
                    transition:{
                        duration: duration?duration:40,
                        type:"tween",
                        repeat:Infinity,
                        repeatType: repeatType?repeatType:"loop",
                        ease: ease?ease:"linear"
                    }
                }}
                className={cn("flex min-w-fit gap-10", className)}>
                        {children}
                        {children}
                        {children}
                        {children}
                </motion.div>
    )
}

export default Slide
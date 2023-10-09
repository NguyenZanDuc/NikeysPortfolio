"use client"
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'


type Props = {
    children: React.ReactNode,
    delay?: number,
    duration?: number,
    className?: string
}

const InView = ({ children, duration, delay, className }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
        className={className}
            style={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 :50,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ",
                transitionDelay: `${delay}s`,
            }}
            ref={ref}>
            {children}
        </motion.div>
    )
}

export default InView
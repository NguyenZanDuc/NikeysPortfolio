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
    const isInView = useInView(ref, { once: true, margin: "0px 100px -100px 0px" });
    return (
        <motion.div
        className={className}
            style={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 :50,
                transition: "all 0.5s cubic-bezier(.05,.67,.44,.97)",
                transitionDelay: `${delay}s`
            }}
            ref={ref}>
            {children}
        </motion.div>
    )
}

export default InView
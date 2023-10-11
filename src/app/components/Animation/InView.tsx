"use client"
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'


type Props = {
    children: React.ReactNode,
    delay?: number,
    duration?: number,
    className?: string,
    type?: "UP" | "DOWN" | "LEFT" | "RIGHT" | "FADE",
    style?: React.CSSProperties
}

const InView = ({ children, duration, delay, className, type, style }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px 100px -100px 0px" });
    const getStyle = (type: "UP" | "DOWN" | "LEFT" | "RIGHT" | "FADE"|undefined) => {
        switch (type) {
            case "UP":
                return {
                    y: isInView ? 0 : 200,
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(.05,.67,.44,.97)",
                    transitionDelay: `${delay}s`,
                    ...style
                }
            case "DOWN":
                return {
                    y: isInView ? 0 : -200,
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(.05,.67,.44,.97)",
                    transitionDelay: `${delay}s`,
                    ...style
                }
            case "LEFT":
                return {
                    x: isInView ? 0 : 200,
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(.05,.67,.44,.97)",
                    transitionDelay: `${delay}s`,
                    ...style
                }
            case "RIGHT":
                return {
                    x: isInView ? 0 : -200,
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(.05,.67,.44,.97)",
                    transitionDelay: `${delay}s`,
                    ...style
                }
            case "FADE":
                return {
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(.05,.67,.44,.97)",
                    transitionDelay: `${delay}s`,
                    ...style
                }
            default:
                return {
                    y: isInView ? 0 : 50,
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(.05,.67,.44,.97)",
                    transitionDelay: `${delay}s`,
                    ...style
                }
        }
    }

    return (
        <motion.div
            className={className}
            style={getStyle(type)}
            ref={ref}>
            {children}
        </motion.div>
    )
}

export default InView
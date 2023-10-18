"use client";
import { cn } from '@/app/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link'
import React from 'react'
import { set } from 'react-hook-form';

type Props = {}

const Navbar = (props: Props) => {
  const [preProgress, setPreProgress] = React.useState(0)
  const [isScrollUp, setIsScrollUp] = React.useState(false)
  const {scrollYProgress} = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (scrollYProgress.get() < preProgress) {
      setIsScrollUp(true)
    } else {
      setIsScrollUp(false)
    }
    setPreProgress(scrollYProgress.get())
    console.log(isScrollUp)
  })
  return (
    <motion.div 
    style={{
      y: isScrollUp ? 0 : -100,
      transition: "all 0.5s ease"
    }}
    className={cn('flex fixed top-0 left-0 z-50 bg-white w-screen items-center justify-between px-10 py-5', scrollYProgress.get()<0.1?"bg-opacity-0":"bg-opacity-100")}>
      <div className="">
        CalmHome
      </div>
      <div className="flex items-center gap-8">
        <Link href={"#"} className=" hover:text-calmHome">Home</Link>
        <Link href={"#"} className=" hover:text-calmHome">About Us</Link>
        <Link href={"#"} className=" hover:text-calmHome">Articles & News</Link>
        <Link href={"#"} className=" hover:text-calmHome p-3 rounded-full bg-black text-white font-semibold">Contact Us</Link>
      </div>
    </motion.div>
  )
}




export default Navbar
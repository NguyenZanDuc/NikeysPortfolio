"use client"
import { BiMenu } from 'react-icons/bi'
import React from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import InView from '@/app/components/Animation/InView'

type Props = {}

const Navbar = (props: Props) => {
  const [menu, setMenu] = React.useState(false)
  return (
    <div className='flex justify-between items-center p-4'>
      <div onClick={() => setMenu(true)} className="">
        <BiMenu className="w-6 h-6" />
      </div>
      <div className="text-4xl font-bold flex items-start">STYLZ<span className='text-base'>®</span></div>
      <div className="md:inline hidden">
        <button className='rounded-md font-semibold border border-white p-2'>BOOK APPOINTMENT</button>
      </div>
      <Menu isVisible={menu} onClose={()=>setMenu(false)} />
    </div>
  )
}

export default Navbar

const Menu = ({onClose, isVisible}:{onClose?: ()=>void, isVisible: boolean}) => {
  return (
    <AnimatePresence>
      {isVisible && 
      <motion.div
        initial={{ opacity: 0  }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
       className='fixed top-0  left-0 bg-opacity-80 text-xl md:text-5xl w-screen h-screen flex-col z-50 bg-black flex items-start justify-center md:gap-10 gap-4 p-10'>
        <InView delay={0.3}>
          <Link onClick={onClose}  className='  hover:underline cursor-pointer font-bold' href={'/stylz'}>Home</Link>
        </InView>
        <InView delay={0.5}>
          <Link onClick={onClose} className='  hover:underline cursor-pointer font-bold' href={'/stylz/services'}>Services</Link>
        </InView>
        <InView delay={0.7}>
          <Link onClick={onClose}  className='  hover:underline cursor-pointer font-bold' href={'/stylz/stylists'}>Stylists</Link>
        </InView>
        <InView delay={0.9}>
          <Link onClick={onClose}  className='  hover:underline cursor-pointer font-bold' href={'/stylz/prices'}>Prices</Link>
        </InView>
        <InView delay={1.1}>
          <Link onClick={onClose}  className='  hover:underline cursor-pointer font-bold' href={'/stylz/contact'}>Contact</Link>
        </InView>
        <div 
        onClick={onClose}
        className='absolute top-10 left-10 text-3xl text-white z-50 cursor-pointer'>
        X
      </div>
      </motion.div>
      }
     
    </AnimatePresence>

  )
}

"use client"
import Link from 'next/link'
import React, { use, useEffect } from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { AnimatePresence, motion, stagger, useAnimate } from 'framer-motion'
type Props = {}

export const NavBar = (props: Props) => {
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const [scope, animate] = useAnimate()
    useEffect(() => {
        animate(".linkLeft", {opacity: [0,1], x:[-100,10]},{delay: stagger(0.3,{from:"last"})})
        animate(".linkRight", {opacity: [0,1], x:[100,-10]},{delay: stagger(0.3,{from:"first"})})
    }, [animate])
    return (
        <div ref={scope} className='w-full flex justify-center gap-14 relative  items-center bg-thePlannerBackground py-4'>
            <Link className='lg:inline-block hidden text-gray-600 linkLeft  ' href="#">GIỚI THIỆU</Link>
            <Link className='lg:inline-block hidden text-gray-600 linkLeft  ' href="#"> HỒ SƠ</Link>
            <Link className='lg:inline-block hidden text-gray-600 linkLeft  ' href="#">DỊCH VỤ</Link>
            <Link className='' href="#">
                <Image src="/mainlogo-tp-01.svg" alt="logo" width={200} height={200} />
            </Link>
            <Link className='lg:inline-block hidden text-gray-600 linkRight ' href="#">PRESS & PRAISE</Link>
            <Link className='lg:inline-block hidden text-gray-600 linkRight ' href="#">BLOG</Link>
            <Link className='lg:inline-block hidden text-gray-600 linkRight ' href="#footer">LIÊN HỆ</Link>
            <div
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className='absolute top-1/2 right-4 -translate-y-1/2 lg:hidden inline-block'>
                <AiOutlineMenu />
            </div>
            {isOpenMenu && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, type:'spring' }}
                         className='absolute   top-full z-20 bg-thePlannerBackground right-0'>
                        <div className='flex flex-col justify-center items-start p-2 '>
                            <Link className='text-gray-600' href="#">GIỚI THIỆU</Link>
                            <Link className='text-gray-600' href="#"> HỒ SƠ</Link>
                            <Link className='text-gray-600' href="#">DỊCH VỤ</Link>
                            <Link className='text-gray-600' href="#">PRESS & PRAISE</Link>
                            <Link className='text-gray-600' href="#">BLOG</Link>
                            <Link className='text-gray-600' href="#">LIÊN HỆ</Link>
                        </div>
                    </motion.div>
                </AnimatePresence>

            )}
        </div>
    )
}


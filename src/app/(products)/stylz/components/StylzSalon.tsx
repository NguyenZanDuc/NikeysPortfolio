"use client"
import { motion, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

const StylzSalon = (props: Props) => {
    const baseX = useMotionValue(0);
    const [width, setWidth] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);
    const refPar = React.useRef<HTMLDivElement>(null);
    const refChild = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: refPar, offset:["start start", "end end"] });

    useEffect(() => {
        if (refPar.current) {
            setScreenWidth(refPar.current.getBoundingClientRect().width);
        }
      if (refChild.current) {
        setWidth(refChild.current.getBoundingClientRect().width);
      }
    }, []);
    const temp = useTransform(scrollYProgress, [0, 1], [0, -width+screenWidth]);
    const x= useSpring(temp,{stiffness: 300, damping: 30});
    return (
        <div ref={refPar}
         className='h-[2000px] relative'>
            <div className='sticky h-screen top-0 flex flex-col md:justify-around justify-center gap-24  w-screen overflow-hidden'>
                <div className='md:text-5xl text-2xl text-center font-semibold'>Our Stylists</div>
                <motion.div 
                ref={refChild} 
                style={{x}}
                className='flex gap-10 min-w-fit justify-start pr-40'>
                    <CardStylist image={'https://framerusercontent.com/images/FhQ2ArEmqDkKoGUqsEk4gk0j510.jpg?scale-down-to=512'} name={'Jeni'} description={'Style Director'} />
                    <CardStylist image={'https://framerusercontent.com/images/RInYR8rzqvWhRFZ1DaSNFp6ExJ0.jpg'} name={'Sam'} description={'Art Director & Manager'} />
                    <CardStylist image={'https://framerusercontent.com/images/E9X8WQLHcoGvZlYeKRc8aXuPcA.jpg'} name={'Jodi'} description={'Senior Stylist'} />
                    <CardStylist image={'https://framerusercontent.com/images/fdAS4I1kGyu1nTPFSQY2a5f048.jpg'} name={'Sebastian'} description={'Stylist'} />
                    <CardStylist image={'https://framerusercontent.com/images/tZXanv9jKWiTUW37VvLB9Lbrzl8.jpg'} name={'Michelle'} description={'Technical Director'} />
                    <CardStylist image={'https://framerusercontent.com/images/mg6lkqexXSLBelRaPP1Uklnj1fk.jpg'} name={'Karen'} description={'Senior Technician'} />
                    <CardStylist image={'https://framerusercontent.com/images/5d6c8WKwDoMhiMXD1KyPo0WF5U.jpg'} name={'John'} description={'Technician'} />
                </motion.div>
                <div className='w-screen flex justify-center'>
                    <Link href={'#'} className='font-semibold   p-2 inline-block rounded-md border'>EXPLORE OUR STYLISTS</Link>
                </div>
            </div>
        </div>
    )
}

export default StylzSalon

type CardStylistProps = {
    image: string
    name: string
    description: string
}
const CardStylist = ({ image, name, description }: CardStylistProps) => {
    return (
        <div className='relative rounded-2xl md:w-[350px] md:h-[350px] w-[250px] h-[250px] overflow-hidden'>
            <Image
                src={image}
                alt={''}
                width={1000}
                height={1000}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div className='absolute text-xl bottom-0 space-y-1 left-0 p-4'>
                <p className='font-bold'>{name}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
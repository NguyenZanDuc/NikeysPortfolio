"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}
type Menber = {
    name: string
    position: string
    image?: string
    video?: string
}
const cards: Menber[] = [{
    name: "Alex Smith",
    position: "Digital Designer",
    image: " https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=1200x1495&vertical=center 1200w"
},
{
    name: "Alex Smith",
    position: "Digital Designer",
    image:"https://i.pinimg.com/474x/ec/07/65/ec07658e98a50c4f847f448be0c4e5ce.jpg"
},
{
    name: "Alex Smith",
    position: "Digital Designer",
    image:"https://i.pinimg.com/474x/1f/f3/3f/1ff33fe907ec42c72d28d1b1da515c7b.jpg"
},
{
    name: "Alex Smith",
    position: "Digital Designer",
    image: "https://i.pinimg.com/474x/b7/30/2b/b7302bc01b236800beed75d4c78627ab.jpg"
},
{
    name: "Alex Smith",
    position: "Digital Designer",
    image: " https://i.pinimg.com/474x/11/68/a6/1168a683fc964cd76f234084b45fbee4.jpg"
},{
    name: "Alex Smith",
    position: "Digital Designer",
    image: " https://i.pinimg.com/474x/fa/20/ae/fa20aef5ca3ee1486af3ad821cae3961.jpg"
},
{
    name: "Alex Smith",
    position: "Digital Designer",
    image: " https://i.pinimg.com/474x/13/00/6a/13006a6b920ebdd0357b20c8261f9b8d.jpg"
},
{
    name: "Alex Smith",
    position: "Digital Designer",
    image: "https://i.pinimg.com/474x/28/ab/ca/28abca6314ed4b4383d352306f325fc9.jpg"
},
{
    name: "Alex befor end",
    position: "Digital Designer",
    image: "https://i.pinimg.com/474x/1a/fb/4b/1afb4b2f9d07e72e05353d719fa4e167.jpg"
},
{
    name: "Alex end",
    position: "Digital Designer",
    image: " https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=1200x1495&vertical=center 1200w"
}
]
const MenberSlide = (props: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    useEffect(() => {
      if (ref.current) {
        setWidth(ref.current.getBoundingClientRect().width);
      }
    }, []);
    return (
        <motion.div
            ref={ref}
            animate={{ x: [0, -width], transition: { duration: 50, repeat: Infinity, repeatType: 'reverse' } }}
            className='flex w-auto'
        >
            {cards.map((menber, i) => (<Card key={i} name={menber.name} position={menber.position} image={menber.image}  />))}
        </motion.div>


    )
}

export default MenberSlide

const Card = ({ name, position, image, video }: Menber) => {
    return (
        <div className='min-w-[280px] m-5 hover:-translate-y-3 duration-300 relative inline-grid h-[360px] overflow-hidden bg-white rounded-xl shadow-xl'>
            {image&&<Image alt={name} src={image} width={280} height={360} className='drop-shadow-md' style={{width:"100%",height:"100%"}} />}
            {video && <video src={video} autoPlay loop muted className='w-full h-full object-cover' />}
            <div className='absolute bottom-4 left-4 text-gray-900 font-semibold text-sm'>
                <p>{name}</p>
                <p>{position}</p>
            </div>
        </div>  
    )
}
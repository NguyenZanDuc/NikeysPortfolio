"use client"
import Image from 'next/image';
import InView from '@/app/components/Animation/InView';
import { cn } from '@/app/lib/utils';
import { useInView } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { on } from 'events';

type Props = {}

const Content = (props: Props) => {
    const [numberSelected, setNumberSelected] = useState(0);
    
    const members = [
        {
            image: 'https://framerusercontent.com/images/FhQ2ArEmqDkKoGUqsEk4gk0j510.jpg?scale-down-to=512',
            name: 'Jenni',
            role: 'Style Director',
            description: 'Meet Jenni, our Style Director. With over 20 years of industry experience, she is the creative force behind our salon\'s signature looks. Her passion for fashion-forward styles and commitment to client satisfaction make  a true trendsetter in the world of hairstyling.',
        },
        {
            image: 'https://framerusercontent.com/images/RInYR8rzqvWhRFZ1DaSNFp6ExJ0.jpg?scale-down-to=512',
            name: "Sam",
            role: "Art Director & Manager",
            description: "Introducing Sam, our Art Director & Manager. She is not only the driving force behind our salon's artistic vision but also the efficient manager ensuring everything runs seamlessly. Sam brings 20 years of expertise, inspiring our team to create stunning hair masterpieces.",
        },
        {
            image: 'https://framerusercontent.com/images/E9X8WQLHcoGvZlYeKRc8aXuPcA.jpg?scale-down-to=512',
            name: "Jodi",
            role: "Senior Stylist",
            description: "Meet Jodi, our Senior Stylist. With a keen eye for detail and 12 years in the industry, [he/she] specializes in crafting personalized looks that enhance your natural beauty. Jodi is dedicated to keeping up with the latest trends to provide you with top-notch service.",
        },
        {
            image: 'https://framerusercontent.com/images/fdAS4I1kGyu1nTPFSQY2a5f048.jpg?scale-down-to=512',
            name: "Sebastian",
            role: "Stylist",
            description: "Meet John, our talented Stylist. He brings a fresh perspective to our team with 10 years of experience. His enthusiasm for creating unique styles and his commitment to making clients feel their best make him a valued member of our salon.",
        },
        {
            image: 'https://framerusercontent.com/images/tZXanv9jKWiTUW37VvLB9Lbrzl8.jpg?scale-down-to=512',
            name: "Michelle",
            role: "Technical Director",
            description: "Michelle, our accomplished Technical Director, leads our salon with visionary expertise. Her mastery of cutting-edge styles and color techniques ensures every client leaves with a transformative and trendsetting look. Experience excellence with Michelle, your style innovator.",
        },
        {
            image: 'https://framerusercontent.com/images/mg6lkqexXSLBelRaPP1Uklnj1fk.jpg?scale-down-to=512',
            name: "Karen",
            role: "Senior Technician",
            description: "Karen, our Senior Technician, brings years of expertise and artistry to our salon. With a focus on precision and personalized service, she excels in creating stunning hair transformations. Elevate your style with Karen, your trusted beauty partner.",
        },
        {
            image: 'https://framerusercontent.com/images/5d6c8WKwDoMhiMXD1KyPo0WF5U.jpg?scale-down-to=512',
            name: "John",
            role: "Technician",
            description: "Meet John, our skilled technician. With a passion for hair and a commitment to excellence, he specializes in crafting beautiful and personalized looks. Trust John to enhance your style and leave you feeling confident and refreshed.",
        }
    ]

    return (
        <div>
            <div className='md:p-32 p-4 md:space-y-8 space-y-4'>
                <InView className='md:text-6xl text-2xl text-center font-bold'>Meet Our Team</InView>
                <InView delay={0.2} className='text-xl md:w-1/2 mx-auto text-center text-gray-400'>Discover our hair salon is exquisite services, from precision cuts to stunning color transformations. Elevate your style with the expertise of our skilled stylists.</InView>
            </div>
            <div className='relative flex flex-row gap-10 justify-center md:p-20'>
                <div className='md:flex-1 w-0'>
                    <InView delay={0.4} className='w-screen md:w-full mx-auto px-6 pt-24 bg-black z-40 sticky md:top-1/4  top-0 md:left-20 aspect-square rounded-xl overflow-hidden'>
                        <Image
                            src={members[numberSelected].image}
                            alt={''}
                            width={1000}
                            height={1000}
                            className='rounded-xl'
                            style={{
                                width: "100%",
                                borderRadius: "12px",
                                height: "100%", objectFit: "cover"
                            }} />
                    </InView>
                </div>
                <InView delay={1} className='flex-1 py-[550px]  md:px-10 '>
                    {members.map((member, index) => (
                        <CardMember
                            key={index}
                            onSelected={setNumberSelected}
                            index={index}
                            name={member.name}
                            role={member.role}
                            description={member.description} />
                    ))}
                </InView>
            </div>
        </div>

    )
}

export default Content

type CardMemberProps = {
    name: string
    role: string
    description: string
    index: number
    onSelected?: (index: number) => void
}
const CardMember = ({ name, role, description, index, onSelected }: CardMemberProps) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px" });
    useEffect(() => {
        if (isInView) {
            onSelected && onSelected(index)
        }
    }, [isInView, onSelected, index])
    return (
        <div ref={ref} className={cn('text-gray-400 py-24 text-xl space-y-3 duration-500', isInView ? "" : "opacity-30")}>
            <p className="text-4xl font-bold text-white">{name}</p>
            <p className="">{role}</p>
            <p className="text-base">{description}</p>
            <div>
                {/* icon */}
            </div>
        </div>
    )
}
"use client"
import InView from '@/app/components/Animation/InView'
import { cn } from '@/app/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const cards = [{
    image: 'https://framerusercontent.com/images/OVymTEV1jNazXnbGmMDx2OvxHs.jpg',
    title: 'Welcome to STYLZ',
    description: 'A premium and modern hair salon based in the heart of central London is West End.',
    href: '#',
    linkText: 'OUR SERVICES'
},
{
    image: 'https://framerusercontent.com/images/mayhm5KGrf58b7SaNBRp8p98.jpg',
    title: 'Cutting-edge creations',
    description: 'A team of  word-class stylists to create your dream look.',
    href: '#',
    linkText: 'OUR STYLISTS'
},
{
    image: 'https://framerusercontent.com/images/KqrtJJZ9QPwUzwa4aqBHqfmzGD8.jpg',
    title: 'Award-winning salon',
    description: 'We are an award-wiining salon with state-of-the-art facilities for all treatments.',
    href: '#',
    linkText: 'VISIT OUR SALON'
},
{
    image: 'https://framerusercontent.com/images/H4tNZhmLjQhIyXVvQTRqyTxZ9MU.jpg',
    title: 'Style is priceless',
    description: 'We have a very competitive price list for all our luxury treatments and cuts',
    href: '#',
    linkText: 'VIEW PRICES'
}]
const Hero = () => {
    const [numberSelect, setNumberSelect] = useState(0)

    return (
        <InView className='flex md:flex-row w-screen  flex-col gap-5 px-5 border-y border-gray-600'>
            {cards.map((card, i) => {
                return <Card key={i}
                    image={card.image}
                    index={i}
                    title={card.title}
                    description={card.description}
                    href={card.href}
                    linkText={card.linkText}
                    numberSelect={numberSelect}
                    onSelct={(index) => setNumberSelect(index)}
                />
            })}
        </InView>
    )
}
export default Hero

type CardProps = {
    className?: string,
    index: number
    image: string
    title: string
    description: string
    href: string
    linkText: string
    numberSelect: number
    onSelct: (index: number) => void
}
const Card = ({ className, image, title, description, href, linkText, index, onSelct, numberSelect }: CardProps) => {
    return (
        <div 
            onClick={() => onSelct(index)}
            className={cn('md:w-[100px] w-full relative cursor-pointer md:hover:w-[140px]  duration-300 md:h-[700px] h-[80px] bg-white rounded-lg overflow-hidden', index === numberSelect ? "md:flex-1 h-[400px]" : "")}>
            <Image
                src={image}
                alt={''}
                width={1000}
                height={1000}
                style={{ width: "100%", height: "100%", objectFit:"cover" }} />
            {index === numberSelect && (
                <div className='absolute w-[400px] top-1/2 space-y-5 md:left-10 left-5'>
                    <div className='md:text-5xl text-3xl font-semibold'>{title}</div>
                    <div className='text-xl text-gray-300'>{description}</div>
                    <Link href={href} className='font-semibold p-2 inline-block rounded-md border'>{linkText}</Link>
                </div>
            )}

        </div>
    )
}
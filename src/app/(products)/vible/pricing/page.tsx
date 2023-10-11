import InView from '@/app/components/Animation/InView'
import Link from 'next/link'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='bg-[#FCF9ED]'>
            <Hero />
            <Content />
            <Contact />
        </div>
    )
}

export default page
const Hero = () => {
    return (
        <div className='bg-vibleBackground text-white p-32 flex flex-col justify-center items-center gap-10'>
            <InView className='text-6xl font-semibold'>
                Pricing
            </InView>
            <InView delay={0.2} className='w-1/2 text-center'>
                Explore our transparent pricing options, designed to provide affordable access to our pottery services, classes, workshops, and pottery materials. Unleash your creativity without breaking the bank.
            </InView>
        </div>
    )
}
const Content = () => {
    const cards = [{
        title: 'For individual appointments',
        description: 'Receive personalized one-on-one instruction tailored to your specific pottery goals and skill level.',
        category: 'Private',
        price: '50',
        link: '#'
    },
    {
        title: 'For 2 peopole',
        description: 'Share a memorable and creative experience with your loved one as you both learn the art of pottery.',
        category: 'Couple',
        price: '80',
        link: '#'
    },
    {
        title: 'For up to 8 people',
        description: 'Join a dynamic and engaging group class, where you will collaborate with fellow pottery enthusiast.',
        category: 'Group',
        price: '300',
        link: '#'
    }]
    return (
        <div className='flex p-28 justify-center gap-4 flex-wrap'>
            {cards.map((card, index) => (
                <InView key={index} delay={index * 0.2}>
                    <CardPrice {...card} />
                </InView>
            ))}
        </div>
    )
}
type CardPriceProps = {
    title: string
    description: string
    category: string
    price: string
    link: string
}
const CardPrice = ({ title, description, category, price, link }: CardPriceProps) => {
    return (
        <div className='w-[360px] text-white rounded-md bg-vibleBackground  p-10 space-y-6'>
            <p className='text-sm text-vible'>{title}</p>
            <div className='flex justify-between text-3xl border-b-[0.1px] border-gray-600'>
                <p className=' font-semibold'>{category}</p>
                <p>${price}</p>
            </div>
            <p className='text-xl w-3/4'>{description}</p>
            <button className='p-2 text-center rounded-full hover:bg-opacity-70 bg-gray-500 w-full'>Contact us</button>
        </div>
    )
}
const Contact = () => {
    return (
        <div className='bg-[#FCF9ED] '>
            <div className='p-32 flex flex-col justify-center items-center gap-5'>
                <InView>
                    <p className='text-2xl font-semibold'>Come and express yourself</p>
                </InView>
                <InView delay={0.2} className='w-1/3 text-center'>
                    <p >Located in the heart of Riga, we provide a warm and inviting atmosphere that inspires creativity and fosters artistic growth.</p>
                </InView>
                <InView delay={0.4}>
                    <Link className='p-4 rounded-full bg-vible text-black hover:bg-opacity-70' href="#">Contact us</Link>
                </InView>
            </div>
            <div className=' p-20 flex divide-x '>
                <CardCommet />
                <CardCommet />
                <CardCommet />
            </div>
        </div>
    )
}
const CardCommet = () => {
    return (
        <div className='flex-1 px-10 flex-col justify-start flex gap-4'>
            <InView className='flex'>
                <AiFillStar className="text-green-600 w-5 h-5" />
                <AiFillStar className="text-green-600 w-5 h-5" />
                <AiFillStar className="text-green-600 w-5 h-5" />
                <AiFillStar className="text-green-600 w-5 h-5" />
                <AiFillStar className="text-green-600 w-5 h-5" />
            </InView>
            <InView delay={0.2}>
                <p className='text-xl'>I can not express how grateful I am for my experience at Vible. Under the expert guidance of Emma Anderson, I discovered a hidden talent for pottery that I never knew I had. Her patience, knowledge, and genuine passion for the craft made every class a delight.</p>
            </InView>
            <InView delay={0.4}>
                <p className='textsm font-semibold'>Michael Davis</p>
            </InView>
        </div>
    )
}
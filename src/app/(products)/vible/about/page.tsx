import Image from 'next/image'
import InView from '@/app/components/Animation/InView'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='bg-[#FCF9ED] min-w-fit'>
            <Hero />
            <Content />
            <Detail />
        </div>
    )
}

export default page

const Hero = () => {
    return (
        <div className='bg-vibleBackground text-white p-32 flex flex-col justify-center items-center gap-10'>
            <InView className='text-6xl font-semibold'>
                About
            </InView>
            <InView delay={0.2} className='w-1/2 text-center'>
                Learn the story behind our pottery studio, our passion for the art form, and the vision that drives us to inspire creativity in every artist who walks through our doors.
            </InView>
        </div>
    )
}
const Content = () => {
    return (
        <div className='flex p-28 gap-5 text-gray-700 text-xl'>
            <div className='flex-1 flex justify-center flex-col gap-5'>
                <p className='w-3/4'>At our pottery studio, we believe in fostering a sense of community and collaboration among artists. We understand the power of connection and support in the creative process, which is why we have built a vibrant community of like-minded individuals.</p>
                <Image src='https://framerusercontent.com/images/szIgBGNSqhY1W2YBOtnLOcfxOCw.jpg' width={1000} height={1000} alt={''} style={{ width: "100%", height: "auto", borderRadius: 10 }} />
                <Image src='https://framerusercontent.com/images/oelyjBjFIuZHSoa6OYkSku2CstE.jpg' width={1000} height={1000} alt={''} style={{ width: "100%", height: "auto", borderRadius: 10 }} />
            </div>
            <div className='flex-1 flex justify-center flex-col gap-5'>
                <Image src='https://framerusercontent.com/images/Ijdr8D307qPs0b6hClEQrKdVqA.jpg' width={1000} height={1000} alt={''} style={{ width: "100%", height: "auto", borderRadius: 10 }} />
                <Image src='https://framerusercontent.com/images/RZK4pATmlR78lcJebKj8OblAI.jpg' width={1000} height={1000} alt={''} style={{ width: "100%", height: "auto", borderRadius: 10 }} />
                <p className='w-3/4'>Our studio serves as a hub for sharing ideas, exchanging techniques, and finding inspiration. It is not just a place to create pottery; it is a place to connect with fellow artists who share your passion. In addition to our regular classes and workshops, we host events, exhibitions, and social gatherings to encourage interaction and networking.</p>
                <p className='w-3/4'>Whether you are seeking to expand your artistic horizons, find your artistic voice, or simply surround yourself with fellow art enthusiasts, our pottery studio is the perfect place to nurture your creativity and form lasting connections.</p>
            </div>
        </div>
    )
}
const Detail = () => {
    const cards = [{
        image: 'https://framerusercontent.com/images/x33ze80qt7hAtBDu5VA1wwFw5qI.jpg?scale-down-to=512',
        name: 'John Doe',
        role: 'CEO'
    }, {
        image: 'https://framerusercontent.com/images/twaJIH5bEhG7pbhxKK518cXjHEQ.jpg?scale-down-to=512',
        name: 'Emily Jones',
        role: 'CTO'
    }, {
        image: 'https://framerusercontent.com/images/BnBT2lB8jpBbhmEWwg0dHMSGEE.jpg?scale-down-to=512',
        name: 'David Patel',
        role: 'CMO'
    }, {
        image: 'https://framerusercontent.com/images/LY9rmcZSwRcmHKMqvYdvQPtjs.jpg?scale-down-to=512',
        name: 'Oliver Nguyen',
        role: 'Glazing master'
    }, {
        image: 'https://framerusercontent.com/images/CY62IMaU9TZ8NkqCdcirwRxs.jpg?scale-down-to=512',
        name: 'Michael Davis',
        role: 'Handyman'
    }, {
        image: 'https://framerusercontent.com/images/c4E4fn6DbjtveZkF9xQErzO6Q.jpg?scale-down-to=512',
        name: 'Samantha Kim',
        role: 'Clay expert'
    }, {
        image: 'https://framerusercontent.com/images/d3gKeoTJ9gp2XdcqwWkJVKE6vM.jpg?scale-down-to=512',
        name: 'Christopher Lee',
        role: 'Customer Support'
    }, {
        image: 'https://framerusercontent.com/images/TiDwSKaaxBq3prXxaH8FRzebdGk.jpg?scale-down-to=512',
        name: 'Chloe Jackson',
        role: 'Assistant'
    },
    ]
    return (
        <div className='p-28 space-y-32'>
            <div className='py-32 flex flex-wrap justify-between gap-10'>
                {cards.map((card, index) => (
                    <InView key={index} delay={index * 0.2}>
                        <CardMember {...card} />
                    </InView>
                ))}
            </div>
            <div className='p-28 flex divide-x justify-between text-xl bg-gray-400 rounded-md'>
                    <div className='px-8 space-y-2'>
                        <p className='font-semibold text-4xl'>30+</p>
                        <p>Years of experience</p>
                    </div>
                    <div className='px-8 space-y-2'>
                        <p className='font-semibold text-4xl'>2076</p>
                        <p>Satisfied customers</p>
                    </div>
                    <div className='px-8 space-y-2'>
                        <p className='font-semibold text-4xl'>158</p>
                        <p>Pots broken</p>
                    </div>
                    <div className='px-8 space-y-2'>
                        <p className='font-semibold text-4xl'>47</p>
                        <p>Exhibitions held</p>
                    </div>
            </div>
        </div>

    )
}

type CardMemberProps = {
    image: string
    name: string
    role: string
}
const CardMember = ({ image, name, role }: CardMemberProps) => {
    return (
        <div className='space-y-3 w-[200px] text-center'>
            <div className='w-full aspect-square rounded-full overflow-hidden shadow-md '>
                <Image src={image} width={1000} height={1000} alt={''} style={{ width: "100%", height: "100%", borderRadius: 10, objectFit:"cover" }} />
            </div>
            <p className='font-semibold'>{name}</p>
            <p className='text-gray-500'>{role}</p>
        </div>
    )
}
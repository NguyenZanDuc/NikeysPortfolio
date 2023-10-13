import Image from 'next/image'
import React from 'react'
import { BsKey, BsLightningCharge } from 'react-icons/bs'
import { CiFaceSmile } from 'react-icons/ci'
import InView from '../../Consuly/components/Animation/InView'
import { cn } from '@/app/lib/utils'
import Link from 'next/link'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Hero />
            <Content />
            <More />
            <Contact />
            <Question />
        </div>
    )
}

export default page

const Hero = () => {
    return (
        <div className='bg-vibleBackground text-white md:p-32 p-4 flex flex-col justify-center items-center gap-4 md:gap-10'>
            <InView className='md:text-6xl text-2xl font-semibold'>
                Services
            </InView>
            <InView delay={0.2} className='md:w-1/2 text-center'>
                Discover our comprehensive range of pottery services, including classes, workshops, studio rentals, and custom pottery creations tailored to your artistic needs.
            </InView>
        </div>
    )
}
const Content = () => {
    const cards = [{
        title: 'Boundless imagination',
        description: 'Timeless art of pottery meets the boundless imagination of passionate artists. Led by our experienced and accomplished artist, Emma Anderson, our studio offers a haven for both beginners and seasoned pottery enthusiasts alike. ',
        image: 'https://framerusercontent.com/images/xGWP5NFdgYSPvpvu9NuCtqEs1d0.jpg?scale-down-to=512'
    },
    {
        title: 'Transformative experience',
        description: 'We believe that pottery is not just about crafting beautiful objects; it is a transformative experience that allows you to connect with your inner artist.  Whether you are a complete novice or seeking to refine your skills, our studio offers a range of classes and workshops tailored to meet your needs and aspirations.',
        image: 'https://framerusercontent.com/images/xGWP5NFdgYSPvpvu9NuCtqEs1d0.jpg?scale-down-to=512'
    },
    {
        title: 'Tactile sensation',
        description: 'Immerse yourself in the tactile sensation of working with clay, shaping it into unique pottery pieces that reflect your individuality. From hand-building to wheel throwing, glazing to firing, our expert instructors will guide you through each step, ensuring you gain both technical expertise and artistic insight. ',
        image: 'https://framerusercontent.com/images/xGWP5NFdgYSPvpvu9NuCtqEs1d0.jpg?scale-down-to=512'
    }]
    return (
        <div>

            <div className='md:p-28 p-4 md:space-y-10 space-y-4 bg-[#FCF9ED]'>
                {cards.map((card, index) => index % 2 == 0 ? (
                    <InView key={index} delay={index * 0.2}>
                        <CardContext  {...card} />
                    </InView>
                ) : (
                    <InView key={index} delay={index * 0.2}>
                        <CardContext {...card} className='md:flex-row-reverse' />
                    </InView>

                ))}
            </div>
        </div>
    )
}

type CardProps = {
    title: string
    description: string
    image: string
    className?: string
}
const CardContext = ({ title, description, image, className }: CardProps) => {
    return (
        <div className={cn('w-full flex flex-col md:flex-row gap-4 md:gap-10', className)}>
            <div className='flex-1 md:p-10'>
                <Image src={image} alt="Image" width={748} height={574} style={{ width: "100%", height: "auto" }} />
            </div>
            <div className='flex-1 flex flex-col justify-center md:gap-8 p-4 gap-4 md:p-10'>
                <p className='text-2xl font-semibold '>{title}</p>
                <p className='text-xl'>{description}</p>
            </div>
        </div>
    )
}
const More = () => {
    const cards = [{
        title: "Hands-one",
        description: "Engage in immersive pottery experiences, getting your hands dirty with clay.",
        icon: <BsLightningCharge className="w-5 h-5" />
    },
    {
        title: "Theme based",
        description: "Explore pottery through themed workshops, unleashing your creativity with inspired projects.",
        icon: <BsLightningCharge className="w-5 h-5" />
    },
    {
        title: "All levels",
        description: "Workshops designed for beginners to advanced artists, accommodating diverse skill levels.",
        icon: <BsLightningCharge className="w-5 h-5" />
    },
    {
        title: "Technique-focused",
        description: "Dive deep into specific pottery techniques, refining your skills under expert guidance.",
        icon: <BsLightningCharge className="w-5 h-5" />
    },
    {
        title: "Collaborative",
        description: "Foster a sense of collaboration as you work alongside fellow artists, sharing ideas and inspiration.",
        icon: <BsLightningCharge className="w-5 h-5" />
    },
    {
        title: "Take home creations",
        description: "Leave with your own handmade pottery pieces, showcasing your newfound skills and creativity.",
        icon: <BsLightningCharge className="w-5 h-5" />
    }
    ]
    return (
        <div className='flex flex-wrap p-10 bg-[#FCF9ED] justify-center gap-6'>
            {cards.map((card, index) => (
                <InView key={index} delay={index * 0.2}>
                    <CardMore {...card} />
                </InView>
            ))}
        </div>
    )
}
type CardMoreProps = {
    title: string
    description: string
    icon: React.ReactNode
}
const CardMore = ({ title, description, icon }: CardMoreProps) => {
    return (
        <div className='flex  gap-4 w-[440px]'>
            <div>
                <div className='p-2  rounded-full border-[0.3px] border-gray-200'>
                    {icon}
                </div>
            </div>
            <div>
                <p className='text-xl space-y-3 font-semibold'>{title}</p>
                <p className=''>{description}</p>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <div className='bg-[#FCF9ED] '>
            <div className='md:p-32 p-4 flex flex-col justify-center items-center gap-5'>
                <InView>
                    <p className='text-2xl font-semibold'>Come and express yourself</p>
                </InView>
                <InView delay={0.2} className='md:w-1/3 text-center'>
                    <p >Located in the heart of Riga, we provide a warm and inviting atmosphere that inspires creativity and fosters artistic growth.</p>
                </InView>
                <InView delay={0.4}>
                    <Link className='p-4 rounded-full bg-vible text-black hover:bg-opacity-70' href="#">Contact us</Link>
                </InView>
            </div>
            <div className='md:p-32 p-4 bg-vible'>
                <p className='md:w-1/2 mx-auto text-center'>Join our vibrant community of artists and experience the joy of creating stunning pottery that will be cherished for generations to come.</p>
            </div>
        </div>
    )
}
const Question = () => {
    const cards = [{
        ask: 'Do I need any prior experience to join the pottery classes?',
        answer: 'No experience is required; our classes cater to all skill levels, including beginners.'
    }, {
        ask: 'What should I bring to the pottery classes?',
        answer: 'We provide all the materials you will need, including clay, glazes, and tools. Just bring yourself and your creativity!'
    }, {
        ask: 'What should I wear to the pottery classes?',
        answer: 'We recommend wearing comfortable clothes that you don’t mind getting dirty. You can also bring an apron or smock to protect your clothes.'
    }, {
        ask: 'How many people are in each class?',
        answer: 'Our classes are limited to 10 people to ensure that everyone gets the attention they need.'
    }]
    return (
        <div className='md:p-32 p-4 space-y-10  text-center'>
            <p className='md:text-5xl text-2xl font-semibold'>Frequently asked questions</p>
            <div className='md:w-1/2 mx-auto flex flex-col divide-y'>
                {cards.map((card, index) => (
                    <InView key={index} delay={index * 0.2}>
                        <CardQuestion {...card} />
                    </InView>
                ))}
            </div>
        </div>
    )
}
type CardQuestionProps = {
    ask: string
    answer: string
}
const CardQuestion = ({ask, answer}:CardQuestionProps) => {
    return (
        <div className='space-y-3 py-2 group flex cursor-pointer flex-col items-start '>
            <p className='font-semibold md:text-xl text-xs'>{ask}</p>
            <p className='hidden group-hover:inline-flex '>{answer}</p>
        </div>
    )
}
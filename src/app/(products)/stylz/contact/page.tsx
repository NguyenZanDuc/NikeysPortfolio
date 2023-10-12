import InView from '@/app/components/Animation/InView'
import { cn } from '@/app/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className=''>
            <div className='md:p-32 p-4 space-x-4 md:space-y-8'>
                <InView className='md:text-6xl text-2xl text-center font-bold'>Visit Us</InView>
                <InView delay={0.2} className='md:text-xl md:w-1/2 mx-auto text-center text-gray-400'>Discover a world of beauty and relaxation at our salon. Experience top-notch hair, skin, and nail care services in a welcoming and luxurious environment.</InView>
            </div>
            <Content />
            <div className='p-4'>
                <InView className='bg-[#1D1D1D] flex flex-col justify-center items-center rounded-xl md:p-32 p-4 gap-4 md:gap-8'>
                        <p className='md:text-4xl text-2xl font-bold'>Book an Appointment</p>
                        <p className='text-gray-400 md:w-1/2 text-center'>Ready for a transformation? Book your appointment with us today and step into a world of personalized beauty and exceptional haircare. Your journey begins here.</p>
                        <button className='p-3 rounded-md md:text-base text-xs bg-white text-black font-bold'>BOOK NOW</button>
                </InView>
            </div>
        </div>
    )
}
export default page
const Content = () => {
    return(
        <div className='md:p-10 p-4 space-y-6'>
            <CardContent 
            image={'https://framerusercontent.com/images/Vo81UAkNbHXJlRFS0gl2CRMZno.jpg'} 
            title={'Our Salon'}>
                Elevate your beauty at our luxurious, contemporary hair salon. Indulge in expert styling, cutting-edge techniques, and premium products for a truly glamorous transformation.
            </CardContent>
            <CardContent className='md:flex-row-reverse '
             title='Opening Hours'
             image='https://framerusercontent.com/images/tOvZXPRCUFDv5EpMwiikjNwebu0.jpg'>
                <div className='md:px-16 px-8 text-lg text-gray-400'>
                    <div className='flex justify-between gap-6'>
                        <p>Monday</p>
                        <p>9:00 - 18:00</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>Tuesday</p>
                        <p>9:00 - 18:00</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>Wednesday</p>
                        <p>9:00 - 20:00</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>Thursday</p>
                        <p>9:00 - 18:00</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>Friday</p>
                        <p>9:00 - 18:00</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>Saturday</p>
                        <p>9:00 - 18:00</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>Sunday</p>
                        <p>Closed</p>
                    </div>
                </div>
             </CardContent>
             <CardContent
                title='Location'
                image='/map.png'
                >
                    <div className='md:divide-x flex gap-2  flex-col md:flex-row text-gray-500'>
                        <div className='px-5 space-y-2 flex flex-col items-start'>
                            <p>24 The Street</p>
                            <p>Covent Garden</p>
                            <p>London W1B 2GH</p>
                        </div>
                        <div className='px-5 space-y-2 flex flex-col items-start'>
                            <p>Call us: <span className='text-white'>+44 (0) 123 4567</span></p>
                            <p>Email us: <span className='text-white'>hello@stylzsalon.com</span></p>
                            <p>Directions: <span className='text-white'>View on map</span></p>
                        </div>
                    </div>
                </CardContent>
        </div>
    )
}



type CardContentProps = {
    image: string
    title: string
    children?: React.ReactNode
    className?: string
}
const CardContent = ({ image, title, children, className }: CardContentProps) => {
    return (
        <div className={cn("flex md:flex-row flex-col gap-5 md:h-[450px]", className)}>
            <InView className="rounded-2xl flex-1 overflow-hidden">
                <Image
                    src={image}
                    alt={''}
                    width={1000}
                    height={1000}
                    style={{ width: "100%", height: "auto%", objectFit: "cover" }} />
            </InView>
            <InView delay={0.2} className="rounded-2xl bg-[#1D1D1D] flex  flex-col flex-1 justify-center p-4 py-10 items-center gap-6">
                <div className='md:text-5xl text-2xl font-semibold'>{title}</div>
                <div className='text-sm text-center md:w-2/3 text-gray-300'>{children}</div>
            </InView>
        </div>
    )
}


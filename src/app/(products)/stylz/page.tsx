import Slide from '@/app/components/Animation/Slide'
import { cn } from '@/app/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Hero from './components/home/Hero'
import InView from '../Consuly/components/Animation/InView'
import StylzSalon from './components/StylzSalon'
import CardContent from './components/Card/CardContent'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Hero />
            <Content />
        </div>
    )
}

export default page


const Content = () => {
    return (
        <div className='p-4 space-y-6'>
            {/* Our Services */}
            <CardContent 
                image={'https://framerusercontent.com/images/6Lf1wWBcDCHF3X1dUqDr1U7ZnV0.jpg'}
                title={'Our Services'}
                description={'Discover our hair salon is exquisite services, from precision cuts to stunning color transformations. Elevate your style with the expertise of our skilled stylists.'}
                href={'#'}
                linkText={'GET STYLZED NOW'} />
            {/* Our Stylists */}
            <StylzSalon />
            <CardContent  className='md:flex-row-reverse' image={'https://framerusercontent.com/images/7FLH55QYKatB0dImeKquuzcATp4.jpg'} title={'Our Prices'} description={'Explore our transparent pricing for top-notch hair services. Affordable luxury awaits at our salon, where beauty meets your budget with exceptional value.'} href={'#'} linkText={'VIEW OUR PRICE LIST'} />
            <CardContent image={'https://framerusercontent.com/images/Vo81UAkNbHXJlRFS0gl2CRMZno.jpg'} title={'Our Salon'} description={'Elevate your beauty at our luxurious, contemporary hair salon. Indulge in expert styling, cutting-edge techniques, and premium products for a truly glamorous transformation.'} href={'#'} linkText={'VISIT THE SALON'} />
            <CardContent className='md:flex-row-reverse' image={'https://framerusercontent.com/images/CVXpSPpSbauiMhTcJFg44h7ZUw.jpg'} title={'Book an appointment'} description={'Ready for a transformation? Book your appointment with us today and step into a world of personalized beauty and exceptional haircare. Your journey begins here.'} href={'#'} linkText={'BOOK NOW'} />
            {/* @stylzsalon */}
            <div className='py-20 relative space-y-14 overflow-hidden'>
            <p className='md:text-6xl text-2xl font-bold text-center'>@stylzsalon</p>
            <Slide className='gap-6'>
                <div className='flex min-w-fit gap-6' >
                    <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                    <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                    <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                    <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                    <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                    <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                    <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                    <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                    <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                </div>
            </Slide>
            <div className='absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r -translate-x-2 from-black to-transparent'></div>
            <div className='absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l translate-x-1 from-black to-transparent'></div>
        </div>
        </div>
    )
}
const CardInstagram = ({ image }: { image: string }) => {
    return (
        <div className='w-[200px] h-[200px] rounded-2xl overflow-hidden'>
            <Image
                src={image}
                alt={''}
                width={1000}
                height={1000}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
    )
}



